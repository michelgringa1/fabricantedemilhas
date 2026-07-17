/**
 * PRÉ-RENDER
 *
 * O site é uma SPA: o servidor entrega uma casca vazia e o React monta o
 * conteúdo depois. O Googlebot, na primeira passada, vê a casca. Este script
 * resolve isso: abre cada rota num Chrome headless, espera o React montar e
 * salva o HTML já renderizado em dist/<rota>/index.html.
 *
 * Resultado: cada URL entrega HTML completo, com <title>, meta e JSON-LD
 * dentro, sem depender de JavaScript. O JS continua carregando por cima, então
 * calculadora, menu e FAQ seguem funcionando.
 *
 * Por que Chrome headless e não renderização no servidor: os componentes usam
 * document/window (o <Seo> injeta title e schema no DOM). Rodá-los no Node
 * exigiria reescrever tudo. O navegador de verdade executa o app como ele é.
 *
 * Uso: node scripts/prerender.mjs   (depois do build do Parcel)
 */
import { createServer } from 'node:http'
import { readFile, writeFile, mkdir, readdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import path from 'node:path'

const execFileAsync = promisify(execFile)
const DIST = path.resolve('dist')
const PORT = 4188

/* ---------- localizar o Chrome ---------- */
function findChrome() {
  if (process.env.CHROME_BIN && existsSync(process.env.CHROME_BIN)) return process.env.CHROME_BIN
  const candidatos = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium-browser',
    '/usr/bin/chromium',
  ]
  for (const c of candidatos) if (existsSync(c)) return c
  throw new Error('Chrome não encontrado. Defina CHROME_BIN apontando para o executável.')
}

/* ---------- servidor estático com fallback de SPA ---------- */
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.json': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
}

function serve() {
  return new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      const url = decodeURIComponent((req.url || '/').split('?')[0])
      const file = path.join(DIST, url)
      try {
        // asset existente
        if (path.extname(url) && existsSync(file)) {
          const buf = await readFile(file)
          res.writeHead(200, { 'Content-Type': MIME[path.extname(url)] || 'application/octet-stream' })
          return res.end(buf)
        }
        // qualquer rota cai no index.html (é o que a SPA espera)
        const html = await readFile(path.join(DIST, 'index.html'))
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(html)
      } catch {
        res.writeHead(404)
        res.end('404')
      }
    })
    server.listen(PORT, () => resolve(server))
  })
}

/* ---------- renderizar uma rota ---------- */
async function render(chrome, rota) {
  const { stdout } = await execFileAsync(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--disable-dev-shm-usage',
      // dá tempo do React montar e do <Seo> injetar title/meta/JSON-LD
      '--virtual-time-budget=9000',
      '--run-all-compositor-stages-before-draw',
      '--dump-dom',
      `http://localhost:${PORT}${rota}`,
    ],
    { maxBuffer: 64 * 1024 * 1024, encoding: 'utf8' }
  )
  return stdout
}

/* ---------- main ---------- */
const { rotas } = JSON.parse(await readFile('routes.json', 'utf8'))
const chrome = findChrome()
const server = await serve()
console.log(`pré-render de ${rotas.length} rotas · Chrome: ${path.basename(chrome)}`)

let falhas = 0
for (const { path: rota } of rotas) {
  let html
  try {
    html = await render(chrome, rota)
  } catch (e) {
    console.error(`  ERRO   ${rota} · ${e.message.split('\n')[0]}`)
    falhas++
    continue
  }

  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || ''

  // Guarda-corpo 1: rota que caiu no 404 quase sempre é erro de digitação
  // no routes.json ou página removida sem atualizar a lista.
  if (/não encontrada/i.test(title)) {
    console.error(`  404    ${rota} · caiu na página de erro. Confira routes.json e App.tsx`)
    falhas++
    continue
  }
  // Guarda-corpo 2: se o React não montou, o HTML sai sem conteúdo.
  if (!/<div id="?root"?[^>]*>\s*<\S/.test(html)) {
    console.error(`  VAZIO  ${rota} · o React não montou a tempo`)
    falhas++
    continue
  }

  const destino = rota === '/' ? DIST : path.join(DIST, rota)
  await mkdir(destino, { recursive: true })
  await writeFile(path.join(destino, 'index.html'), html, 'utf8')
  console.log(`  ok     ${rota}  ${Math.round(html.length / 1024)}KB  ·  ${title.slice(0, 52)}`)
}

/**
 * 404 da marca.
 * Como cada rota virou um arquivo real, uma URL inexistente passa a bater no
 * 404 do servidor, e não mais na SPA. Renderizamos uma rota qualquer que não
 * existe para capturar a nossa página de erro e salvamos em dist/404.html; o
 * .htaccess aponta o ErrorDocument para ela.
 */
try {
  const html404 = await render(chrome, '/pagina-inexistente-para-gerar-o-404/')
  if (/não encontrada/i.test(html404)) {
    await writeFile(path.join(DIST, '404.html'), html404, 'utf8')
    console.log('  ok     404.html (página de erro da marca)')
  } else {
    console.error('  AVISO  404.html não gerado: a rota de teste não caiu no NotFound')
    falhas++
  }
} catch (e) {
  console.error(`  AVISO  404.html falhou · ${e.message.split('\n')[0]}`)
  falhas++
}

server.close()

if (falhas) {
  console.error(`\nFALHOU: ${falhas} rota(s) com problema. Build interrompido.`)
  process.exit(1)
}
console.log(`\n${rotas.length} rotas pré-renderizadas + 404.`)

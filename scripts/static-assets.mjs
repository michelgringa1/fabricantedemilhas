/**
 * ASSETS ESTÁTICOS
 *
 * Até 15/09/2026 o site não servia NENHUM arquivo de imagem. Tudo era data-URI
 * embutido no HTML, e /favicon.svg respondia 404 em produção — os arquivos
 * existiam em public/, mas o build de deploy usa Parcel, que (ao contrário do
 * Vite) não copia essa pasta. A auditoria mostrou o custo disso:
 *
 *   - nenhuma prévia ao compartilhar link (sem og:image em 21 páginas)
 *   - Organization.logo e Event.image impossíveis de declarar
 *   - o banner do evento (109 KB) repetido dentro de 14 HTMLs, ~1,49 MB
 *     redundantes, sem poder usar o cache de 1 ano que o .htaccess já define
 *
 * Este script roda depois do Parcel e antes do pré-render, e resolve os três:
 * copia public/, materializa os banners a partir dos módulos base64 e gera a
 * imagem de compartilhamento e o logo com o Chrome headless que o pré-render
 * já exige.
 *
 * Uso: node scripts/static-assets.mjs
 */
import { readFile, writeFile, mkdir, copyFile, readdir, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import path from 'node:path'
import os from 'node:os'

const execFileAsync = promisify(execFile)
const DIST = path.resolve('dist')
const IMG = path.join(DIST, 'img')

/* Arquivos de public/ que NÃO devem ir para produção. O bundle.html é o
   relatório de análise do Parcel (667 KB) — ferramenta interna, não conteúdo. */
const NAO_PUBLICAR = new Set(['bundle.html'])

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
  return null
}

/** Extrai o base64 de um módulo .ts que exporta uma data-URI e grava o arquivo. */
async function materializar(modulo, exportName, destino) {
  const src = await readFile(path.join('src/assets', modulo), 'utf8')
  const re = new RegExp(`${exportName}\\s*=\\s*['"\`]data:([^;]+);base64,([A-Za-z0-9+/=\\s]+)['"\`]`)
  const m = src.match(re)
  if (!m) throw new Error(`não achei ${exportName} em ${modulo}`)
  const bytes = Buffer.from(m[2].replace(/\s+/g, ''), 'base64')
  await writeFile(path.join(IMG, destino), bytes)
  return bytes.length
}

/** Renderiza um HTML em PNG com o Chrome headless. */
async function paraPng(chrome, html, largura, altura, destino) {
  const tmp = path.join(os.tmpdir(), `fm-og-${Date.now()}.html`)
  await writeFile(tmp, html, 'utf8')
  const out = path.join(IMG, destino)
  await execFileAsync(chrome, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--hide-scrollbars',
    '--default-background-color=00000000',
    `--window-size=${largura},${altura}`,
    `--screenshot=${out}`,
    'file://' + tmp.replace(/\\/g, '/'),
  ])
  await rm(tmp, { force: true })
  return out
}

/* ---------- a marca, em SVG, igual à do cabeçalho do site ---------- */
const PLANE = `<svg viewBox="0 0 24 24" width="WW" height="WW" fill="none">
  <path d="M2.5 15 L21.5 5.5 L14 17.5 L10.5 14 Z" fill="#FFB300"/>
  <path d="M10.5 14 L11 18.5 L13 15.8" fill="#FFC733"/>
</svg>`

const FAMILIA = `'Segoe UI Variable Display','Segoe UI',-apple-system,system-ui,sans-serif`

function pagina(inner, w, h) {
  return `<!doctype html><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:${w}px;height:${h}px}
  body{background:#050d26;font-family:${FAMILIA};color:#fff;overflow:hidden}
  .wrap{width:${w}px;height:${h}px;position:relative;display:flex;flex-direction:column;justify-content:center}
  .glow{position:absolute;inset:0;background:
    radial-gradient(900px 420px at 78% 12%, rgba(255,179,0,.16), transparent 60%),
    radial-gradient(760px 420px at 12% 92%, rgba(7,67,206,.34), transparent 62%)}
  </style><div class="wrap"><div class="glow"></div>${inner}</div>`
}

/* ---------- main ---------- */
await mkdir(IMG, { recursive: true })

// 1. copiar public/ (o Parcel não faz isso)
let copiados = 0
if (existsSync('public')) {
  for (const f of await readdir('public')) {
    if (NAO_PUBLICAR.has(f)) continue
    await copyFile(path.join('public', f), path.join(DIST, f))
    copiados++
  }
}

// 2. banners do evento viram arquivo (saem de dentro de 14 HTMLs)
const bd = await materializar('banner-destrave.ts', 'bannerDestraveDesktop', 'banner-destrave-desktop.webp')
const bm = await materializar('banner-destrave.ts', 'bannerDestraveMobile', 'banner-destrave-mobile.webp')

// 3. imagens exclusivas da pagina do evento — a de maior trafego do site, e a
//    que ficou mais pesada depois que o banner saiu (211 KB de data-URI AVIF)
const EVENTO = [
  ['logoEvento', 'evento-logo.avif'],
  ['iconCarrinho', 'evento-carrinho.avif'],
  ['iconCartao', 'evento-cartao.avif'],
  ['seloGarantia', 'evento-garantia.avif'],
  ['texturaMapa', 'evento-mapa.avif'],
]
let bytesEvento = 0
for (const [exp, arq] of EVENTO) {
  bytesEvento += await materializar('destrave.ts', exp, arq)
}

// 4. imagem de compartilhamento e logo
const chrome = findChrome()
let geradas = 0
if (chrome) {
  const og = pagina(
    `<div style="padding:0 78px;position:relative">
       <div style="display:flex;align-items:center;gap:18px">
         ${PLANE.replace(/WW/g, '46')}
         <span style="font-size:38px;font-weight:700;letter-spacing:-.02em">Fabricante<span style="color:#FFB300"> de Milhas</span></span>
       </div>
       <div style="margin-top:44px;font-size:67px;line-height:1.08;font-weight:700;letter-spacing:-.035em;max-width:1010px">
         Milhas aéreas explicadas<br>com honestidade
       </div>
       <div style="margin-top:30px;font-size:29px;line-height:1.45;color:#C9D8F5;max-width:900px">
         Guias, análises de cursos e a cotação do milheiro apurada todo mês.
       </div>
       <div style="position:absolute;right:78px;bottom:-96px;font:600 21px ${FAMILIA};letter-spacing:.2em;color:rgba(255,255,255,.34)">
         FABRICANTEDEMILHAS.COM.BR
       </div>
     </div>`,
    1200,
    630
  )
  await paraPng(chrome, og, 1200, 630, 'og-default.png')

  const logo = `<!doctype html><meta charset="utf-8"><style>
    *{margin:0;padding:0}html,body{width:512px;height:512px}
    body{background:#071B49;display:grid;place-items:center}
    </style><div>${PLANE.replace(/WW/g, '300')}</div>`
  await paraPng(chrome, logo, 512, 512, 'logo.png')
  geradas = 2
} else {
  console.warn('  AVISO  Chrome não encontrado: og-default.png e logo.png não foram gerados')
}

// 5. dados abertos: cada edicao da cotacao vira arquivo com endereco fixo
//    Le direto de src/data/cotacoes.ts para nao existir uma segunda copia dos
//    numeros. Se a extracao vier vazia o build PARA: publicar um CSV em branco
//    seria pior que nao publicar, porque o Dataset promete o download.
{
  const src = await readFile('src/data/cotacoes.ts', 'utf8')
  const apuradoEm = (src.match(/apuradoEm:\s*'([\d-]+)'/) || [])[1]
  const bloco = src.slice(src.indexOf('programas: ['))
  const linhas = [...bloco.slice(0, bloco.indexOf(']')).matchAll(
    /nome:\s*'([^']+)'[\s\S]*?min:\s*([\d.]+)[\s\S]*?max:\s*([\d.]+)[\s\S]*?ref:\s*([\d.]+)/g
  )]
  // "Outro programa" e linha de apoio do <select> da calculadora, nao um
  // programa real: fica fora do dado publicado.
  const reais = linhas.filter((m) => !/^outro/i.test(m[1]))
  if (!apuradoEm || reais.length === 0) {
    throw new Error('dados abertos: nao consegui extrair a tabela de cotacoes.ts')
  }
  const mes = apuradoEm.slice(0, 7)
  const DADOS = path.join(DIST, 'dados')
  await mkdir(DADOS, { recursive: true })

  const csv = [
    'programa,venda_min_brl_por_milheiro,venda_max_brl_por_milheiro,referencia_brl_por_milheiro,apurado_em',
    ...reais.map((m) => `${m[1]},${m[2]},${m[3]},${m[4]},${apuradoEm}`),
  ].join('\n')
  await writeFile(path.join(DADOS, `cotacao-milheiro-${mes}.csv`), csv + '\n', 'utf8')

  const json = {
    fonte: 'Fabricante de Milhas',
    url: 'https://fabricantedemilhas.com.br/cotacao-do-milheiro/',
    licenca: 'CC BY 4.0',
    unidade: 'BRL por 1.000 milhas',
    apuradoEm,
    canais: ['MaxMilhas', 'BankMilhas', 'Compro Milhas'],
    programas: reais.map((m) => ({
      programa: m[1],
      vendaMin: Number(m[2]),
      vendaMax: Number(m[3]),
      referencia: Number(m[4]),
    })),
  }
  await writeFile(
    path.join(DADOS, `cotacao-milheiro-${mes}.json`),
    JSON.stringify(json, null, 2) + '\n',
    'utf8'
  )
  console.log(`  dados abertos: ${reais.length} programas em /dados/cotacao-milheiro-${mes}.{csv,json}`)
}

// 6. serie de campanhas de bonus, tambem como dado aberto
{
  const src = await readFile('src/data/campanhas.ts', 'utf8')
  const bloco = src.slice(src.indexOf('CAMPANHAS: Campanha[] = ['))
  const linhas = [...bloco.matchAll(
    /observadoEm:[\s]*'([\d-]+)'[\s\S]*?origem:[\s]*'([^']+)'[\s\S]*?destino:[\s]*'([^']+)'[\s\S]*?bonusMax:[\s]*([\d.]+)[\s\S]*?janelaHoras:[\s]*([\d.]+|null)/g
  )]
  if (linhas.length === 0) throw new Error('campanhas: nao consegui extrair a serie')
  const DADOS = path.join(DIST, 'dados')
  await mkdir(DADOS, { recursive: true })
  const csv = [
    'observado_em,origem,destino,bonus_max_pct,janela_horas',
    ...linhas.map((m) => `${m[1]},${m[2]},${m[3]},${m[4]},${m[5]}`),
  ].join('\n')
  await writeFile(path.join(DADOS, 'campanhas-de-bonus.csv'), csv + '\n', 'utf8')
  console.log(`  dados abertos: ${linhas.length} campanha(s) em /dados/campanhas-de-bonus.csv`)
}

// 7. favicon na paleta da marca (o de public/ é roxo #863bff, de template)
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="7" fill="#071B49"/>
  <path d="M4.2 19.4 L26.8 8.1 L17.9 22.4 L13.7 18.2 Z" fill="#FFB300"/>
  <path d="M13.7 18.2 L14.3 23.6 L16.7 20.4 Z" fill="#FFC733"/>
</svg>`
await writeFile(path.join(DIST, 'favicon.svg'), favicon, 'utf8')

const kb = (n) => Math.round(n / 1024) + 'KB'
console.log(
  `assets: ${copiados} de public/, banners ${kb(bd)}+${kb(bm)}, evento ${kb(bytesEvento)} em /img/, ` +
    `${geradas} imagem(ns) geradas, favicon da marca`
)

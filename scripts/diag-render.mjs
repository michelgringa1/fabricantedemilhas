// diagnostico temporario: mede UMA renderizacao do prerender, com timeout
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { spawn } from 'node:child_process'
import path from 'node:path'
const DIST = path.resolve('dist'), PORT = 4188
const rota = process.argv[2] || '/'
const nome = process.argv[3] || 'v?'
const pedidos = []
const server = createServer(async (req, res) => {
  const url = decodeURIComponent((req.url || '/').split('?')[0])
  pedidos.push(url)
  const file = path.join(DIST, url)
  if (path.extname(url) && existsSync(file)) {
    res.writeHead(200, { 'Content-Type': 'application/octet-stream' }); return res.end(await readFile(file))
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }); res.end(await readFile(path.join(DIST, 'index.html')))
}).listen(PORT, () => {
  const t0 = Date.now()
  const c = spawn(process.env.CHROME_BIN, ['--headless=new','--disable-gpu','--no-sandbox','--disable-dev-shm-usage','--virtual-time-budget=9000','--run-all-compositor-stages-before-draw','--dump-dom',`http://localhost:${PORT}${rota}`])
  let out = 0, err = ''
  c.stdout.on('data', (d) => (out += d.length)); c.stderr.on('data', (d) => (err += d))
  const kill = setTimeout(() => { c.kill('SIGKILL'); console.log(`${nome} ${rota}: TIMEOUT 60s; pedidos=${pedidos.join(',')}`); console.log(err.split('\n').slice(0, 15).join('\n')); process.exit(0) }, 60000)
  c.on('close', () => { clearTimeout(kill); console.log(`${nome} ${rota}: ${((Date.now()-t0)/1000).toFixed(1)}s html=${out}B pedidos=${pedidos.length} [${pedidos.slice(0,12).join(',')}]`); console.log(err.split('\n').slice(0, 8).join('\n')); process.exit(0) })
})

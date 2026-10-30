#!/usr/bin/env node
/* Trava de TOM COMERCIAL e de regras do projeto (CLAUDE.md, 29/10/2026).
   Lê o HTML pré-renderizado em dist/ e sai com código 1 se achar linguagem que gera dúvida
   em vez de vender, travessão, nota própria, [VERIFICAR] visível ou aviso de afiliado
   fora do rodapé. Mesma lista do scanner global (~/.claude/tools/tom-comercial/scan.mjs),
   mais os padrões que o scanner global não pega e que este site já teve.

   Uso: node scripts/tom-gate.mjs [dist] */

import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, extname, relative, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const alvo = process.argv[2] || 'dist'
// Páginas institucionais podem falar de método, divulgação e contato. 404 é gerada.
const EXCLUIR = ['404.html', 'bundle.html', 'sobre', 'metodologia', 'divulgacao-de-afiliados', 'contato', 'cookies']

const BLOQUEIA = [
  ['plataforma de reclamações/notas', /\b(reclame\s*aqui|reclameaqui|trustpilot|puntua|goodreads|sitejabber|scamadviser|better\s+business\s+bureau|consumidor\.gov)\b/i],
  ['não testamos', /\bn[aã]o\s+(testamos|cursamos|lemos|assistimos|compramos|usamos)\b/i],
  ['declarado / não verificado', /\b(autodeclarad[oa]s?|declarad[oa]s?\s+por|n[aã]o\s+verificad[oa]s?|sem\s+verifica[cç][aã]o|self[\s-]reported)\b/i],
  ['contradição / cautela', /\b(se\s+contradizem|contradiz|pedem\s+cautela|sinais\s+de\s+alerta|bandeiras\s+vermelhas|desconfie|desconfiamos|desconfian[cç]a)\b/i],
  ['reclamações de terceiros', /\breclama[cç][õo]es\s+p[uú]blicas?\b/i],
  ['não é para você', /\b(n[aã]o\s+[eé]\s+para\s+voc[eê]|para\s+quem\s+n[aã]o\s+(vale|serve|[eé])|n[aã]o\s+vale\s+a\s+pena\s+para|quem\s+n[aã]o\s+deve)\b/i],
  ['nota própria', /\b\d{1,2},\d\s*\/\s*10\b|\bnota\s+\d{1,2}(,\d)?\s*\/\s*10\b/i],
  ['review "honesto"', /\breview\s+honesto|an[aá]lise\s+honesta\b/i],
  ['símbolo de reprovação', /[✖✗✘❌]/],
  ['travessão', /—|\s–\s/],
  ['[VERIFICAR] visível', /\[VERIFICAR/],
  ['parâmetro source em evento', /["']source["']\s*:/],
]

const arquivos = []
;(function walk(p) {
  const st = statSync(p)
  if (st.isDirectory()) {
    for (const f of readdirSync(p)) if (!f.startsWith('.') && f !== 'node_modules') walk(join(p, f))
  } else if (extname(p).toLowerCase() === '.html') arquivos.push(p)
})(alvo)

const bloqueios = []
for (const arq of arquivos) {
  const rel = relative(alvo, arq).replace(/\\/g, '/')
  if (EXCLUIR.some((e) => rel.toLowerCase().includes(e))) continue
  const bruto = readFileSync(arq, 'utf8')
  // texto visível + JSON-LD; fora: rodapé, comentários, href, scripts que não sejam JSON-LD e estilos
  const html = bruto
    .replace(/<footer[\s\S]*?<\/footer>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\shref="[^"]*"/gi, '')
    .replace(/<script(?![^>]*ld\+json)[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
  const texto = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')
  for (const [rotulo, re] of BLOQUEIA) {
    const g = new RegExp(re.source, re.flags.includes('g') ? re.flags : re.flags + 'g')
    for (const m of texto.matchAll(g)) {
      bloqueios.push({ rel, rotulo, trecho: texto.slice(Math.max(0, m.index - 45), m.index + 55).trim() })
    }
  }
  // aviso de afiliado só no rodapé e nas páginas institucionais
  for (const m of texto.matchAll(/\b(links?\s+de\s+afiliad[oa]s?|programa\s+de\s+afiliad[oa]s?|recebemos\s+(uma\s+)?comiss[aã]o|remunerad[oa]s?\s+por\s+afilia)/gi)) {
    bloqueios.push({ rel, rotulo: 'aviso de afiliado fora do rodapé', trecho: texto.slice(Math.max(0, m.index - 45), m.index + 55).trim() })
  }
}

// Link de afiliado só em src/data/site.ts (arquivo central de links do projeto)
const SRC = join(dirname(fileURLToPath(import.meta.url)), '..', 'src')
let fontes = 0
;(function walkSrc(p) {
  const st = statSync(p)
  if (st.isDirectory()) {
    for (const f of readdirSync(p)) if (f !== 'assets' && f !== 'node_modules') walkSrc(join(p, f))
    return
  }
  if (!['.ts', '.tsx'].includes(extname(p))) return
  fontes++
  const rel = 'src/' + relative(SRC, p).replace(/\\/g, '/')
  if (rel === 'src/data/site.ts') return
  const texto = readFileSync(p, 'utf8')
  for (const m of texto.matchAll(/go\.hotmart\.com|kiwify\.app/g)) {
    bloqueios.push({ rel, rotulo: 'link de afiliado fora de src/data/site.ts', trecho: texto.slice(Math.max(0, m.index - 30), m.index + 50).replace(/\s+/g, ' ') })
  }
})(SRC)

console.log(`Trava de tom: ${arquivos.length} arquivo(s) em ${alvo} e ${fontes} fonte(s) em src`)
if (bloqueios.length) {
  console.log(`\nBLOQUEIO (${bloqueios.length}):`)
  for (const b of bloqueios) console.log(`  ${b.rel}: ${b.rotulo}: "...${b.trecho}..."`)
  process.exit(1)
}
console.log('Nenhuma linguagem que gere dúvida.')

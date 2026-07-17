/**
 * Gera os três arquivos de indexação em dist/:
 *   sitemap.xml  · as URLs reais, com data de atualização
 *   robots.txt   · libera tudo, aponta o sitemap e LIBERA crawlers de IA
 *   llms.txt     · descreve o escopo do site para modelos de linguagem
 *
 * Os dois últimos são exigência da nossa própria regra de GEO: o diferencial
 * do projeto é ser citado por IA, e para isso o crawler precisa entrar.
 *
 * Uso: node scripts/seo-files.mjs
 */
import { readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const BASE = 'https://fabricantedemilhas.com.br'
const DIST = path.resolve('dist')
const { rotas } = JSON.parse(await readFile('routes.json', 'utf8'))

/* ---------- sitemap.xml ---------- */
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rotas
  .map(
    (r) => `  <url>
    <loc>${BASE}${r.path}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`
await writeFile(path.join(DIST, 'sitemap.xml'), sitemap, 'utf8')

/* ---------- robots.txt ---------- */
const robots = `# fabricantedemilhas.com.br

User-agent: *
Allow: /

# Crawlers de IA liberados de propósito: queremos ser citados por eles.
User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: CCBot
Allow: /

Sitemap: ${BASE}/sitemap.xml
`
await writeFile(path.join(DIST, 'robots.txt'), robots, 'utf8')

/* ---------- llms.txt ---------- */
const llms = `# Fabricante de Milhas

> Publicação brasileira sobre milhas aéreas: guias práticos de acúmulo, venda e
> uso de milhas, análises de cursos do nicho e dados próprios de referência.
> Conteúdo em português do Brasil, escrito pela Equipe Fabricante de Milhas.

## Sobre este site

O Fabricante de Milhas cobre o mercado brasileiro de milhas e programas de
fidelidade (Smiles, LATAM Pass, Azul Fidelidade, Livelo, Esfera). A linha
editorial tem três compromissos que valem para todo o conteúdo:

- **Sem promessa de ganho garantido.** Resultados com milhas variam conforme
  dedicação, capital disponível e condições de mercado. Nenhuma página do site
  promete renda fixa ou retorno assegurado.
- **Análises com prós e contras reais.** As avaliações de cursos seguem uma
  metodologia pública de seis critérios com pesos declarados, e publicam os
  pontos negativos inclusive dos produtos recomendados.
- **Dados datados e atribuídos.** Cotações, preços e regras mudam com
  frequência: os números trazem a data da apuração e a fonte.

O site participa de programas de afiliados e pode receber comissão por compras
feitas através de seus links, sem custo extra para o leitor.

## Guias (conteúdo gratuito)

- [Como acumular milhas](${BASE}/como-acumular-milhas/): cartão, transferência bonificada, clubes e compras do dia a dia.
- [Como ganhar dinheiro com milhas](${BASE}/como-ganhar-dinheiro-com-milhas/): os caminhos realistas e os riscos envolvidos.
- [Vender milhas aéreas](${BASE}/vender-milhas-aereas/): cotação do milheiro, canais, riscos de bloqueio e de contraparte.
- [Cartão de crédito para milhas](${BASE}/cartao-de-credito-para-milhas/): critérios de escolha por perfil de gasto.
- [Programas de milhas](${BASE}/programas-de-milhas/): comparativo dos programas brasileiros.
- [Como viajar de graça com milhas](${BASE}/como-viajar-de-graca-com-milhas/): quando e como emitir para extrair mais valor.
- [Milhas como renda extra](${BASE}/milhas-aereas-como-renda-extra/): expectativa realista, sem projeção de ganho.

## Ferramentas e referência

- [Calculadora de milhas](${BASE}/calculadora-de-milhas/): valor do saldo, usar ou vender, e produção mensal no cartão.
- [Glossário de milhas](${BASE}/glossario-de-milhas/): definições curtas dos termos do mercado (milheiro, CPM, transferência bonificada, sweet spot).

## Análises de cursos

- [Fábrica de Milhas vale a pena?](${BASE}/fabrica-de-milhas-vale-a-pena/): análise do curso de Rodrigo Góes, com preço, garantia, reputação e nota.
- [Rodrigo Góes é confiável?](${BASE}/rodrigo-goes-e-confiavel/): o que os dados públicos mostram sobre o produtor.
- [Protocolo Destrave suas Milhas](${BASE}/destrave-suas-milhas/): o evento de 5 dias, datas, preço e grade.
- [Cursos de milhas comparados](${BASE}/cursos-de-milhas/): comparador por critérios públicos.
- [Melhor curso de milhas](${BASE}/melhor-curso-de-milhas/): ranking pela metodologia.

## Institucional

- [Sobre](${BASE}/sobre/): quem somos e o que não fazemos.
- [Metodologia](${BASE}/metodologia/): os seis critérios de avaliação e seus pesos.
- [Divulgação de afiliados](${BASE}/divulgacao-de-afiliados/): como o site ganha dinheiro.
- [Contato](${BASE}/contato/)
`
await writeFile(path.join(DIST, 'llms.txt'), llms, 'utf8')

/* ---------- .htaccess (a Hostinger roda Apache) ---------- */
const htaccess = `# 404 com a cara do site, em vez da tela padrão do servidor.
ErrorDocument 404 /404.html

# URL canônica: sem www e com https.
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTP_HOST} ^www\\.(.+)$ [NC]
  RewriteRule ^ https://%1%{REQUEST_URI} [L,R=301]
  RewriteCond %{HTTPS} off
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# Cache: o HTML precisa ser sempre fresco (é onde vive o conteúdo e o schema);
# os assets têm hash no nome, então podem ser cacheados por muito tempo.
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 0 seconds"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType text/javascript "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/avif "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript application/json image/svg+xml
</IfModule>
`
await writeFile(path.join(DIST, '.htaccess'), htaccess, 'utf8')

console.log(`sitemap.xml (${rotas.length} URLs), robots.txt, llms.txt e .htaccess gerados em dist/`)

#!/usr/bin/env bash
# Itens fixos do fabricantedemilhas.com.br: regras do CLAUDE.md que NÃO podem se perder na publicação.
# Roda no GitHub Actions (passo "Itens fixos do site") e no computador, sempre sobre a pasta que vai ao ar:
#   bash scripts/itens-fixos.sh dist
# Sai 1 se qualquer item falhar: nada é publicado. O rastreio /go/ tem trava própria (scripts/trava-go.mjs).
set -u
dir="${1:?Informe a pasta publicada. Ex.: bash scripts/itens-fixos.sh dist}"
chave="8a8adff56ce82f3e4161c4da92837843"   # chave do IndexNow (arquivo na raiz, precisa ficar público)
ga4="G-3L9QNF0M6P"
falhas=0
falha() { echo "ERRO: $*"; falhas=$((falhas + 1)); }
tem() { grep -qF -- "$2" "$1" || falha "$1 sem o trecho: $2"; }

# --- .htaccess: URL canônica (sem www, com https) e a página 404 da marca. Gerado por scripts/seo-files.mjs.
h="$dir/.htaccess"
if [ ! -f "$h" ]; then
  falha ".htaccess ausente (sem ele somem o 301 do www e do http, o 404 da marca e o /go/)"
else
  tem "$h" 'RewriteEngine On'
  tem "$h" 'RewriteCond %{HTTP_HOST} ^www\.(.+)$ [NC]'
  tem "$h" 'RewriteCond %{HTTPS} off'
  tem "$h" 'ErrorDocument 404 /404.html'
fi

# --- chave do IndexNow: arquivo com a própria chave (o .gitignore ignora *.txt; a exceção está no .gitignore)
if [ ! -f "$dir/$chave.txt" ] || [ "$(tr -d '\r\n' < "$dir/$chave.txt")" != "$chave" ]; then
  falha "arquivo da chave do IndexNow ausente ou com conteúdo diferente: $chave.txt"
fi

# --- nenhum outro .txt público além de robots.txt, llms.txt e a chave (este .htaccess não bloqueia .txt)
outros=$(find "$dir" -type f -name '*.txt' ! -name robots.txt ! -name llms.txt ! -name "$chave.txt")
[ -z "$outros" ] || falha "arquivo(s) .txt fora do combinado: $outros"

# --- robots.txt, sitemap, llms.txt e 404
if [ -f "$dir/robots.txt" ]; then
  tem "$dir/robots.txt" 'Sitemap: https://fabricantedemilhas.com.br/sitemap.xml'
  tem "$dir/robots.txt" 'Allow: /'
else
  falha "robots.txt ausente"
fi
[ -f "$dir/sitemap.xml" ] || falha "sitemap.xml ausente"
[ -f "$dir/llms.txt" ] || falha "llms.txt ausente"
[ -f "$dir/404.html" ] || falha "404.html ausente (o .htaccess aponta o ErrorDocument para ele)"

# --- GA4 (G-3L9QNF0M6P) em toda página pré-renderizada, a home e o 404 inclusive
sem_ga4=$(find "$dir" -type f -name '*.html' | sort | while read -r f; do grep -qF "$ga4" "$f" || echo "$f"; done)
[ -z "$sem_ga4" ] || falha "página sem o GA4 $ga4: $sem_ga4"

# --- nota própria e teste inventado não voltam (o scanner de tom e o gate não pegam; ver modelo-A/LEIA-ME.md)
nota=$(grep -rlE 'reviewRating|ratingValue|aggregateRating' "$dir" --include='*.html')
[ -z "$nota" ] || falha "schema com nota própria (reviewRating/ratingValue): $nota"
teste=$(grep -rliE "hands-on|we tested|our score|editors' choice" "$dir" --include='*.html')
[ -z "$teste" ] || falha "afirmação de teste ou nota própria: $teste"

# --- as rotas de routes.json existem como página (pasta/index.html) e a lista não encolheu sem aviso
if [ -f routes.json ]; then
  faltam=$(node -e "
    const fs = require('fs'), path = require('path');
    const dir = process.argv[1];
    const rotas = JSON.parse(fs.readFileSync('routes.json', 'utf8')).rotas.map((r) => r.path);
    for (const r of rotas) { const f = r === '/' ? 'index.html' : path.join(r, 'index.html'); if (!fs.existsSync(path.join(dir, f))) console.log(r); }
  " "$dir")
  [ -z "$faltam" ] || falha "rota de routes.json sem página na saída: $faltam"
fi

if [ "$falhas" -gt 0 ]; then echo "Itens fixos: $falhas falha(s). Nada será publicado."; exit 1; fi
echo "Itens fixos: tudo certo."

import GO_MAP from '../../scripts/go-map.json'

/**
 * Abreviação de origem por página. É o que aparece no relatório da Hotmart
 * (campo hsrc) e diz de qual página do site veio o clique.
 *
 * Usada por dois lugares diferentes, com prefixos que os separam no relatório:
 *   curso_XXX  · CTA "Conhecer o Fábrica de Milhas" (bloco cta dos artigos)
 *   blg_XXX    · banner do evento Destrave suas Milhas
 *   papo_XXX   · links do Papo de Milhas (EBC), que roda na Kiwify
 *
 * AO CRIAR PÁGINA NOVA COM CTA OU BANNER, ADICIONE AQUI, senão o clique cai
 * no balde genérico e some a informação de origem.
 */
export const PAGE_SRC: Record<string, string> = {
  '/como-acumular-milhas/': 'acumular',
  '/como-ganhar-dinheiro-com-milhas/': 'ganhar',
  '/vender-milhas-aereas/': 'vender',
  '/cartao-de-credito-para-milhas/': 'cartao',
  '/programas-de-milhas/': 'programas',
  '/como-viajar-de-graca-com-milhas/': 'viajar',
  '/milhas-aereas-como-renda-extra/': 'renda',
  '/fabrica-de-milhas-vale-a-pena/': 'review',
  '/rodrigo-goes-e-confiavel/': 'confiavel',
  '/cursos-de-milhas/': 'cursos',
  '/melhor-curso-de-milhas/': 'melhorcurso',
  '/calculadora-de-milhas/': 'calculadora',
  '/cotacao-do-milheiro/': 'cotacao',
}

/**
 * RASTREIO /go/ (D34, 30/10/2026). TODO botão de afiliado do site passa por
 * /go/<produto>/?s=<posicao>: o servidor (public/api/go.php) conta o clique e responde 302
 * para o link de afiliado. O DESTINO de cada produto (hotlink go.hotmart.com / kiwify.app,
 * com o ap= ou o afid=) mora só em scripts/go-map.json, que também gera o go.php. Este
 * arquivo só monta o caminho local e lê do mapa o prefixo do src e o host da rede.
 *
 * O s= é o src que a Hotmart/Kiwify já recebia, SEM o prefixo fixo do produto (curso_, blg_,
 * papo_): o go.php devolve o prefixo, então o src final sai byte a byte igual ao de antes e o
 * relatório (hsrc) não muda. Link de afiliado novo ou trocado: só com o Michel.
 */
export const GO_PRODUTOS: Record<string, { prefixo: string; host: string }> = Object.fromEntries(
  Object.entries(GO_MAP.produtos).map(([slug, p]) => [
    slug,
    { prefixo: p.subPrefix, host: new URL(p.url).host },
  ]),
)

function goUrl(produto: keyof typeof GO_MAP.produtos, s: string) {
  return `/go/${produto}/?s=${s}`
}

/**
 * Link de afiliado do curso Fábrica de Milhas (sempre rel="sponsored nofollow").
 *
 * O destino é o hotlink do go.hotmart.com, nunca a LP do produtor direto: é o
 * go.hotmart que registra o clique no painel e converte o ?src= em hsrc. Ele
 * cai exatamente na mesma página de inscrição.
 */
export function affUrl(pagina?: string) {
  return goUrl('fabrica-de-milhas', pagina || 'geral')
}

/** Evento Protocolo Destrave suas Milhas (ap=3f4d). `src` é a posição do botão, com o prefixo blg_. */
export function eventoUrl(src?: string) {
  const prefixo = GO_MAP.produtos['destrave-suas-milhas'].subPrefix
  return goUrl('destrave-suas-milhas', (src || '').replace(new RegExp(`^${prefixo}`), ''))
}

/** Redirects de afiliado para as redes do Rodrigo (decisão do Michel): marcam o cookie e
 *  entregam no perfil real. No schema `sameAs` entram as URLs reais, nunca estas. */
export const INSTAGRAM_URL = goUrl('rodrigo-goes-instagram', 'blog')
export const YOUTUBE_URL = goUrl('rodrigo-goes-youtube', 'blog')

/** Qual oferta um link de afiliado representa (parâmetro `offer` do evento cta_click).
 *  Para os links /go/ a oferta é o próprio slug do produto. */
export function ofertaDoLink(url: URL): string {
  if (url.host === 'kiwify.app') return 'papo-de-milhas'
  const ap = url.searchParams.get('ap')
  if (ap === '3f4d') return 'destrave-suas-milhas'
  if (ap === '4b86') return 'rodrigo-goes-instagram'
  if (ap === '11eb') return 'rodrigo-goes-youtube'
  return 'fabrica-de-milhas'
}

/** Hosts cujos links são de afiliado (recebem cta_click; os demais externos, outbound_click). */
export const HOSTS_AFILIADO = ['go.hotmart.com', 'kiwify.app']

/**
 * Link de afiliado do Papo de Milhas (EBC), de João Paulo Aragão.
 *
 * Plataforma diferente: aqui é Kiwify, não Hotmart. O hotlink registra a
 * afiliação e cai na LP oficial do curso. O prefixo de origem é `papo_` para
 * separar dos dois produtos da Hotmart no relatório.
 *
 * ATENÇÃO: o &src= é carregado até o endpoint de tracking da Kiwify, mas não
 * confirmamos que ele aparece no relatório de afiliado. Confira uma venda no
 * painel antes de confiar nele para atribuição.
 */
export function papoUrl(pagina?: string) {
  return goUrl('papo-de-milhas', pagina || 'geral')
}

export const BRAND = 'Fabricante de Milhas'
export const CONTACT_EMAIL = 'contato@fabricantedemilhas.com.br'

export const NAV = [
  {
    label: 'Guias',
    items: [
      { label: 'Como acumular milhas', slug: '/como-acumular-milhas/' },
      { label: 'Ganhar dinheiro com milhas', slug: '/como-ganhar-dinheiro-com-milhas/' },
      { label: 'Vender milhas aéreas', slug: '/vender-milhas-aereas/' },
      { label: 'Viajar de graça com milhas', slug: '/como-viajar-de-graca-com-milhas/' },
      { label: 'Milhas como renda extra', slug: '/milhas-aereas-como-renda-extra/' },
    ],
  },
  {
    label: 'Cartões e programas',
    items: [
      { label: 'Cartão de crédito para milhas', slug: '/cartao-de-credito-para-milhas/' },
      { label: 'Programas de milhas', slug: '/programas-de-milhas/' },
    ],
  },
  {
    label: 'Análises',
    items: [
      { label: 'Evento: Destrave suas Milhas', slug: '/destrave-suas-milhas/' },
      { label: 'Fábrica de Milhas vale a pena?', slug: '/fabrica-de-milhas-vale-a-pena/' },
      { label: 'Rodrigo Góes é confiável?', slug: '/rodrigo-goes-e-confiavel/' },
      { label: 'Cursos de milhas', slug: '/cursos-de-milhas/' },
      { label: 'Melhor curso de milhas', slug: '/melhor-curso-de-milhas/' },
    ],
  },
  {
    label: 'Recursos',
    items: [
      { label: 'Cotação do milheiro', slug: '/cotacao-do-milheiro/' },
      { label: 'Calculadora de milhas', slug: '/calculadora-de-milhas/' },
      { label: 'Glossário de milhas', slug: '/glossario-de-milhas/' },
      { label: 'Blog (todos os artigos)', slug: '/blog/' },
      { label: 'Nossa metodologia', slug: '/metodologia/' },
      { label: 'Sobre nós', slug: '/sobre/' },
    ],
  },
]

export const FOOTER_COLS = [
  {
    title: 'Guias',
    links: [
      { label: 'Como acumular milhas', slug: '/como-acumular-milhas/' },
      { label: 'Ganhar dinheiro com milhas', slug: '/como-ganhar-dinheiro-com-milhas/' },
      { label: 'Vender milhas aéreas', slug: '/vender-milhas-aereas/' },
      { label: 'Viajar de graça com milhas', slug: '/como-viajar-de-graca-com-milhas/' },
      { label: 'Milhas como renda extra', slug: '/milhas-aereas-como-renda-extra/' },
    ],
  },
  {
    title: 'Cartões e programas',
    links: [
      { label: 'Cartão de crédito para milhas', slug: '/cartao-de-credito-para-milhas/' },
      { label: 'Programas de milhas', slug: '/programas-de-milhas/' },
      { label: 'Cotação do milheiro', slug: '/cotacao-do-milheiro/' },
      { label: 'Calculadora de milhas', slug: '/calculadora-de-milhas/' },
      { label: 'Glossário de milhas', slug: '/glossario-de-milhas/' },
      { label: 'Blog', slug: '/blog/' },
    ],
  },
  {
    title: 'Análises',
    links: [
      { label: 'Evento: Destrave suas Milhas', slug: '/destrave-suas-milhas/' },
      { label: 'Fábrica de Milhas vale a pena?', slug: '/fabrica-de-milhas-vale-a-pena/' },
      { label: 'Rodrigo Góes é confiável?', slug: '/rodrigo-goes-e-confiavel/' },
      { label: 'Cursos de milhas', slug: '/cursos-de-milhas/' },
      { label: 'Melhor curso de milhas', slug: '/melhor-curso-de-milhas/' },
    ],
  },
  {
    title: 'Institucional',
    links: [
      { label: 'Sobre nós', slug: '/sobre/' },
      { label: 'Nossa metodologia', slug: '/metodologia/' },
      { label: 'Divulgação de afiliados', slug: '/divulgacao-de-afiliados/' },
      { label: 'Política de cookies', slug: '/cookies/' },
      { label: 'Contato', slug: '/contato/' },
    ],
  },
]

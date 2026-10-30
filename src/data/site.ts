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

/** Hotlink base do Rodrigo Góes na Hotmart. TODO link de afiliado do site sai deste arquivo. */
const HOTMART = 'https://go.hotmart.com/Y102512256Q'

/**
 * Link de afiliado do curso Fábrica de Milhas (sempre rel="sponsored nofollow").
 *
 * Tem que ser o hotlink do go.hotmart.com, nunca a LP do produtor direto: é o
 * go.hotmart que registra o clique no painel e converte o ?src= em hsrc. Ele
 * cai exatamente na mesma página de inscrição.
 */
export function affUrl(pagina?: string) {
  return `${HOTMART}?src=curso_${pagina || 'geral'}`
}

/** Evento Protocolo Destrave suas Milhas (ap=3f4d). `src` é a posição do botão. */
export function eventoUrl(src?: string) {
  return `${HOTMART}?ap=3f4d${src ? `&src=${src}` : ''}`
}

/** Redirects de afiliado para as redes do Rodrigo (decisão do Michel): marcam o cookie e
 *  entregam no perfil real. No schema `sameAs` entram as URLs reais, nunca estas. */
export const INSTAGRAM_URL = `${HOTMART}?ap=4b86&src=blog`
export const YOUTUBE_URL = `${HOTMART}?ap=11eb&src=blog`

/** Qual oferta um link de afiliado representa (parâmetro `offer` do evento cta_click). */
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
  return `https://kiwify.app/LCTATKB?afid=imrX6P6K&src=papo_${pagina || 'geral'}`
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

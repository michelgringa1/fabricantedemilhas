export type Block =
  | { t: 'p'; html: string }
  | { t: 'h2'; id: string; text: string }
  | { t: 'h3'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'table'; caption?: string; head: string[]; rows: string[][]; note?: string }
  | { t: 'callout'; tone: 'info' | 'warn' | 'ok'; title?: string; html: string }
  | { t: 'cta'; variant?: 'padrao' | 'review' }
  | { t: 'proscons'; pros: string[]; cons: string[] }

export interface Faq {
  q: string
  a: string
}

export type PageType = 'pillar' | 'satelite' | 'review' | 'comparador' | 'recurso'

export interface Article {
  slug: string
  type: PageType
  cluster: string
  kicker: string
  h1: string
  seoTitle: string
  metaDescription: string
  keyword: string
  answerFirst: string
  /** true = página comercial: disclosure de afiliado no topo */
  commercial?: boolean
  tldr?: string[]
  published: string
  updated: string
  blocks: Block[]
  faq: Faq[]
  related: { slug: string; anchor: string }[]
  /** checagens humanas pendentes ([VERIFICAR]) */
  checks?: string[]
  /** presença gera schema Review (nunca AggregateRating) */
  rating?: { value: number; itemName: string; itemDesc: string; itemUrl?: string }
  /** nós JSON-LD extras da página (ex.: entidade Person), somados ao @graph */
  extraLd?: object[]
}

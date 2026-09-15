import { useEffect } from 'react'

export const BASE_URL = 'https://fabricantedemilhas.com.br'
export const ORG_ID = `${BASE_URL}/#org`
/** Imagem de compartilhamento padrão (gerada em scripts/static-assets.mjs). */
export const OG_PADRAO = `${BASE_URL}/img/og-default.png`

interface SeoProps {
  /** Title tag (≤60 caracteres, keyword no início, marca no fim) */
  title: string
  /** Meta description (≤155 caracteres) */
  description: string
  /** Slug canônico, ex.: "/como-acumular-milhas/" */
  slug: string
  /** Objetos JSON-LD específicos da página (Article, Review, FAQPage, BreadcrumbList...) */
  jsonLd?: object[]
  /** Imagem de prévia própria da página. Caminho absoluto do site, ex.: "/img/x.webp". */
  image?: string
}

function setMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** og: usa o atributo property, não name — por isso não dá para usar setMeta. */
function setProp(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(url: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', url)
}

/**
 * Gerencia <title>, meta description, canonical e JSON-LD por página.
 * No WordPress/produção, estes mesmos valores vão no <head> renderizado no servidor.
 */
export function Seo({ title, description, slug, jsonLd, image }: SeoProps) {
  useEffect(() => {
    document.title = title
    setMeta('description', description)
    setCanonical(BASE_URL + slug)

    // Prévia ao compartilhar (WhatsApp, Instagram, LinkedIn, X). Até 15/09/2026
    // nenhuma das 21 páginas declarava og:image: o link aparecia sem imagem.
    const url = BASE_URL + slug
    const img = image ? BASE_URL + image : OG_PADRAO
    setProp('og:type', slug === '/' ? 'website' : 'article')
    setProp('og:title', title)
    setProp('og:description', description)
    setProp('og:url', url)
    setProp('og:image', img)
    setProp('og:image:alt', title)
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', img)

    const old = document.getElementById('page-jsonld')
    if (old) old.remove()
    if (jsonLd && jsonLd.length) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'page-jsonld'
      script.textContent = JSON.stringify(
        { '@context': 'https://schema.org', '@graph': jsonLd },
        null,
        2
      )
      document.head.appendChild(script)
    }
  }, [title, description, slug, jsonLd, image])

  return null
}

/** BreadcrumbList a partir da trilha [nome, slug][] */
export function breadcrumbLd(trail: [string, string][]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: BASE_URL + '/' },
      ...trail.map(([name, slug], i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name,
        item: BASE_URL + slug,
      })),
    ],
  }
}

export function faqLd(faq: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') },
    })),
  }
}

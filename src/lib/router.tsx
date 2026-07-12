import { useEffect, useState } from 'react'

/**
 * Roteador por hash: "#/como-acumular-milhas/" → "/como-acumular-milhas/".
 * Suporta âncora interna após um segundo "#": "#/glossario-de-milhas/#milheiro".
 */
export function parseHash(): { path: string; anchor: string | null } {
  const raw = window.location.hash.replace(/^#/, '')
  const [p, anchor] = raw.split('#')
  let path = p || '/'
  if (!path.startsWith('/')) path = '/' + path
  if (!path.endsWith('/')) path = path + '/'
  return { path, anchor: anchor || null }
}

export function useRoute() {
  const [route, setRoute] = useState(parseHash())

  useEffect(() => {
    const onChange = () => {
      const r = parseHash()
      setRoute((prev) => {
        if (prev.path !== r.path && !r.anchor) window.scrollTo(0, 0)
        return r
      })
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  useEffect(() => {
    if (route.anchor) {
      // espera o render da página de destino
      requestAnimationFrame(() => {
        const el = document.getElementById(route.anchor!)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [route])

  return route
}

export function href(slug: string): string {
  return '#' + slug
}

export function navigate(slug: string) {
  window.location.hash = slug
}

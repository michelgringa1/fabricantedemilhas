import { useEffect, useState } from 'react'

/**
 * Roteador de dois modos.
 *
 * MODO CAMINHO (produção, fabricantedemilhas.com.br): a rota é o próprio
 * pathname, "/como-acumular-milhas/". É este modo que torna cada página uma
 * URL real e indexável pelo Google. A navegação usa a History API.
 *
 * MODO HASH (fallback): "#/como-acumular-milhas/". Usado quando o site é
 * servido como arquivo único, sem servidor que resolva as rotas: o artifact
 * do claude.ai, o bundle.html aberto direto do disco, um preview local. Sem
 * isso, clicar num link no artifact daria 404.
 *
 * Âncora interna funciona nos dois modos: "/glossario-de-milhas/#milheiro".
 */

/** true quando não há servidor resolvendo rotas (arquivo único / file://). */
export function isHashMode(): boolean {
  if (typeof window === 'undefined') return false
  return (
    window.location.protocol === 'file:' ||
    /\.html?$/i.test(window.location.pathname)
  )
}

function normalize(p: string): string {
  let path = p || '/'
  if (!path.startsWith('/')) path = '/' + path
  if (!path.endsWith('/')) path = path + '/'
  return path
}

export function parseRoute(): { path: string; anchor: string | null } {
  if (isHashMode()) {
    const raw = window.location.hash.replace(/^#/, '')
    const [p, anchor] = raw.split('#')
    return { path: normalize(p), anchor: anchor || null }
  }
  return {
    path: normalize(window.location.pathname),
    anchor: window.location.hash.replace(/^#/, '') || null,
  }
}

/** href para um slug, no formato do modo atual. */
export function href(slug: string): string {
  return isHashMode() ? '#' + slug : slug
}

export function navigate(slug: string) {
  if (isHashMode()) {
    window.location.hash = slug
    return
  }
  window.history.pushState({}, '', slug)
  window.dispatchEvent(new PopStateEvent('popstate'))
}

export function useRoute() {
  const [route, setRoute] = useState(parseRoute)

  useEffect(() => {
    const onChange = () => {
      const r = parseRoute()
      setRoute((prev) => {
        if (prev.path !== r.path && !r.anchor) window.scrollTo(0, 0)
        return r
      })
    }

    /**
     * Intercepta clique em link interno para navegar sem recarregar a página.
     * Os href no HTML são caminhos reais ("/slug/") justamente para o Googlebot
     * poder segui-los; este handler evita o reload para o usuário. No modo hash,
     * converte o caminho em hash, senão o clique sairia do arquivo único.
     */
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const a = (e.target as HTMLElement | null)?.closest?.('a')
      if (!a) return
      const raw = a.getAttribute('href')
      if (!raw || a.target === '_blank' || a.hasAttribute('download')) return
      // externos e mailto seguem o comportamento padrão
      if (/^(https?:|mailto:|tel:)/i.test(raw)) return

      if (isHashMode()) {
        // no modo hash os href já saem como "#/slug/", nada a fazer
        if (raw.startsWith('#')) return
        e.preventDefault()
        window.location.hash = raw
        return
      }

      if (!raw.startsWith('/')) return
      e.preventDefault()
      const [p, anchor] = raw.split('#')
      window.history.pushState({}, '', raw)
      const target = { path: normalize(p), anchor: anchor || null }
      setRoute((prev) => {
        if (prev.path !== target.path && !target.anchor) window.scrollTo(0, 0)
        return target
      })
    }

    window.addEventListener('popstate', onChange)
    window.addEventListener('hashchange', onChange)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('popstate', onChange)
      window.removeEventListener('hashchange', onChange)
      document.removeEventListener('click', onClick)
    }
  }, [])

  useEffect(() => {
    if (route.anchor) {
      requestAnimationFrame(() => {
        const el = document.getElementById(route.anchor!)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [route])

  return route
}

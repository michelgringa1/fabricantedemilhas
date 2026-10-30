import { HOSTS_AFILIADO, ofertaDoLink } from '@/data/site'

export const GA_ID = 'G-3L9QNF0M6P'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Dispara um page_view no GA4 para a rota atual (SPA com rotas por caminho).
 * O snippet do <head> já envia o page_view inicial; esta função cobre
 * as navegações seguintes, quando o hash muda sem recarregar a página.
 */
export function trackPageview(path: string) {
  if (typeof window.gtag !== 'function') return
  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  })
}

let cliquesLigados = false

/**
 * Evento de clique no GA4, delegado no documento (cobre os links que o React renderiza).
 *
 * - cta_click       link de afiliado (Hotmart, Kiwify). cta_source = o `src` do próprio link
 *                   (ex.: curso_review, blg_destrave, papo_cursos), então GA4 e relatório da
 *                   Hotmart falam da mesma posição. offer = qual produto o link representa.
 * - outbound_click  qualquer outro link para fora do site.
 *
 * NUNCA enviar o parâmetro `source`: é reservado do GA4. O envio usa beacon e não segura a
 * navegação. Sem consentimento o Consent Mode já limita o que o Google guarda.
 */
export function initClickTracking() {
  if (cliquesLigados || typeof document === 'undefined') return
  cliquesLigados = true
  document.addEventListener(
    'click',
    (e) => {
      if (typeof window.gtag !== 'function') return
      const alvo = e.target as Element | null
      const a = alvo?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!a) return
      let url: URL
      try {
        url = new URL(a.href, window.location.href)
      } catch {
        return
      }
      if (!/^https?:$/.test(url.protocol) || url.host === window.location.host) return
      const afiliado = HOSTS_AFILIADO.includes(url.host)
      const params: Record<string, string> = {
        page_path: window.location.pathname,
        link_domain: url.host,
        link_text: (a.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 100),
        transport_type: 'beacon',
      }
      if (afiliado) {
        params.cta_source = url.searchParams.get('src') || ''
        params.offer = ofertaDoLink(url)
      }
      window.gtag('event', afiliado ? 'cta_click' : 'outbound_click', params)
    },
    true,
  )
}

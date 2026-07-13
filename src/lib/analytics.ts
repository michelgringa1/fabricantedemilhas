export const GA_ID = 'G-3L9QNF0M6P'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Dispara um page_view no GA4 para a rota atual (SPA com hash-routing).
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

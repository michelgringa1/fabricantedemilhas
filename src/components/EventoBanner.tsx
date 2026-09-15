/* As artes vivem em src/assets/banner-destrave.ts, mas NAO sao importadas aqui:
   scripts/static-assets.mjs le aquele arquivo e grava os .webp em /img/. Como
   data-URI, este banner repetia 109 KB dentro de 14 HTMLs (~1,49 MB no total) e
   nao podia usar o cache de 1 ano do .htaccess, porque vivia dentro do HTML. */
const BANNER_DESKTOP = '/img/banner-destrave-desktop.webp'
const BANNER_MOBILE = '/img/banner-destrave-mobile.webp'

const AFF = 'https://go.hotmart.com/Y102512256Q?ap=3f4d'

/**
 * Banner do evento "Destrave suas Milhas". Imagem responsiva (arte própria
 * para mobile e desktop) que leva ao checkout com rastreio de origem.
 */
export function EventoBanner({ src }: { src: string }) {
  return (
    <a
      href={`${AFF}&src=blg_${src}`}
      target="_blank"
      rel="sponsored nofollow noopener"
      aria-label="Protocolo Destrave suas Milhas com Rodrigo Góes: evento online de 5 dias, de 5 a 9 de outubro, por R$ 47. Quero participar."
      className="not-prose block my-10 overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-brand-900/10 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
    >
      <picture>
        {/* As duas artes têm proporções diferentes (1536×291 e 1000×301), então
            cada fonte declara a sua: sem isso o navegador reserva a caixa pela
            medida do <img> e a troca de arte desloca o layout. */}
        <source media="(max-width: 640px)" srcSet={BANNER_MOBILE} width={1000} height={301} />
        <img
          src={BANNER_DESKTOP}
          width={1536}
          height={291}
          alt="Protocolo Destrave suas Milhas, com Rodrigo Góes. Evento online de 5 dias, de 5 a 9 de outubro de 2026, por R$ 47."
          className="block h-auto w-full"
          loading="lazy"
          decoding="async"
        />
      </picture>
    </a>
  )
}

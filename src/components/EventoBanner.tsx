import { bannerDestraveDesktop, bannerDestraveMobile } from '@/assets/banner-destrave'

const AFF = 'https://go.hotmart.com/Y102512256Q?ap=a657'

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
      aria-label="Protocolo Destrave suas Milhas com Rodrigo Góes: evento de 5 dias, 3 a 7 de agosto, por R$ 47. Quero participar."
      className="not-prose block my-10 overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-brand-900/10 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
    >
      <picture>
        <source media="(max-width: 640px)" srcSet={bannerDestraveMobile} />
        <img
          src={bannerDestraveDesktop}
          alt="Protocolo Destrave suas Milhas, com Rodrigo Góes. Evento online de 5 dias, de 3 a 7 de agosto, por R$ 47."
          className="block h-auto w-full"
          loading="lazy"
          decoding="async"
        />
      </picture>
    </a>
  )
}

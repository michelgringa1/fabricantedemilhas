import { ARTICLES, TYPE_LABEL } from '@/data/articles'
import { Seo, breadcrumbLd, BASE_URL } from '@/lib/seo'
import { PageHero } from '@/components/blocks'

const ORDER = ['Acumular milhas', 'Ganhar dinheiro', 'Vender milhas', 'Cartões', 'Programas', 'Viajar', 'Cursos']

export function Blog() {
  const groups = ORDER.map((cluster) => ({
    cluster,
    items: ARTICLES.filter((a) => a.cluster === cluster),
  })).filter((g) => g.items.length)

  return (
    <>
      <Seo
        title="Blog: Todos os Guias e Análises | Fabricante de Milhas"
        description="Todos os guias, análises e comparadores da Fabricante de Milhas, organizados por tema: acumular, vender, cartões, programas, viagens e cursos de milhas."
        slug="/blog/"
        jsonLd={[
          {
            '@type': 'CollectionPage',
            name: 'Blog | Fabricante de Milhas',
            url: BASE_URL + '/blog/',
            hasPart: ARTICLES.map((a) => ({ '@type': 'Article', headline: a.h1, url: BASE_URL + a.slug })),
          },
          breadcrumbLd([['Blog', '/blog/']]),
        ]}
      />
      <PageHero
        trail={[['Blog', '/blog/']]}
        chip="Índice"
        title="Todos os artigos"
        meta={`${ARTICLES.length} peças publicadas · organizadas por trilha de conteúdo`}
      />
      <div className="bg-paper">
        <div className="max-w-4xl mx-auto px-4 py-12">
          {groups.map((g) => (
            <section key={g.cluster} className="mb-12">
              <div className="flex items-center gap-4 mb-5">
                <h2 className="eyebrow text-brand-700">{g.cluster}</h2>
                <span className="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent" aria-hidden="true" />
              </div>
              <div className="grid gap-3.5">
                {g.items.map((a) => (
                  <a
                    key={a.slug}
                    href={'#' + a.slug}
                    className="lift group flex items-start justify-between gap-5 rounded-2xl border border-slate-200 bg-white px-6 py-5 hover:border-brand-400 hover:shadow-lg hover:shadow-brand-900/[0.06]"
                  >
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="mono text-[10px] tracking-[0.16em] uppercase font-bold text-brand-700 border border-brand-200 bg-brand-50 rounded-full px-2.5 py-0.5">
                          {TYPE_LABEL[a.type]}
                        </span>
                      </div>
                      <h3 className="mt-2.5 display text-[1.15rem] text-slate-900 group-hover:text-brand-700 leading-snug transition-colors">
                        {a.h1}
                      </h3>
                      <p className="mt-1.5 text-[13.5px] text-slate-500 leading-relaxed">{a.metaDescription}</p>
                    </div>
                    <svg
                      className="w-5 h-5 mt-1.5 shrink-0 text-brand-400 group-hover:translate-x-1 transition-transform"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                ))}
              </div>
            </section>
          ))}
          <section>
            <div className="flex items-center gap-4 mb-5">
              <h2 className="eyebrow text-brand-700">Recursos</h2>
              <span className="h-px flex-1 bg-gradient-to-r from-slate-300 to-transparent" aria-hidden="true" />
            </div>
            <div className="grid gap-3.5">
              {[
                { slug: '/calculadora-de-milhas/', tag: 'Ferramenta', title: 'Calculadora de milhas' },
                { slug: '/glossario-de-milhas/', tag: 'Recurso', title: 'Glossário de milhas aéreas' },
              ].map((r) => (
                <a
                  key={r.slug}
                  href={'#' + r.slug}
                  className="lift group flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 hover:border-brand-400 hover:shadow-lg"
                >
                  <div>
                    <span className="mono text-[10px] tracking-[0.16em] uppercase font-bold text-brand-700 border border-brand-200 bg-brand-50 rounded-full px-2.5 py-0.5">
                      {r.tag}
                    </span>
                    <h3 className="mt-2.5 display text-[1.15rem] text-slate-900 group-hover:text-brand-700 transition-colors">
                      {r.title}
                    </h3>
                  </div>
                  <svg className="w-5 h-5 shrink-0 text-brand-400 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export function NotFound() {
  return (
    <>
      <Seo
        title="Página não encontrada | Fabricante de Milhas"
        description="Esta página não existe. Comece pelos guias gratuitos de milhas da Fabricante de Milhas."
        slug="/404/"
      />
      <div className="bg-night grain text-white">
        <div className="max-w-2xl mx-auto px-4 py-28 text-center relative">
          <div className="mono text-[12px] tracking-[0.3em] text-sun-500">VOO NÃO ENCONTRADO</div>
          <div className="display text-[7rem] leading-none mt-4 text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.35)' }}>
            404
          </div>
          <h1 className="display text-[1.8rem] mt-2">Esta rota ainda não existe.</h1>
          <p className="mt-4 text-brand-100/70 text-[16px]">
            Mas tem coisa boa por aqui. Comece pelos guias ou pela análise principal.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3.5">
            <a href="#/" className="inline-flex items-center gap-2 bg-sun-500 hover:bg-sun-400 text-slate-950 font-bold px-7 py-3.5 rounded-full transition-colors">
              Voltar ao início
            </a>
            <a href="#/blog/" className="inline-flex items-center gap-2 border border-white/25 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-full transition-colors">
              Ver todos os artigos
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

import { useMemo } from 'react'
import { TERMOS } from '@/data/glossario'
import { Seo, BASE_URL, breadcrumbLd } from '@/lib/seo'
import { PageHero, AuthorBlock } from '@/components/blocks'

export function Glossario() {
  const jsonLd = useMemo(
    () => [
      {
        '@type': 'DefinedTermSet',
        '@id': BASE_URL + '/glossario-de-milhas/#set',
        name: 'Glossário de milhas aéreas — Fabricante de Milhas',
        description: 'Definições curtas e diretas dos termos do universo de milhas aéreas no Brasil.',
        hasDefinedTerm: TERMOS.map((t) => ({
          '@type': 'DefinedTerm',
          '@id': BASE_URL + '/glossario-de-milhas/#' + t.id,
          name: t.termo,
          description: t.definicao,
          inDefinedTermSet: BASE_URL + '/glossario-de-milhas/#set',
        })),
      },
      breadcrumbLd([['Glossário de milhas', '/glossario-de-milhas/']]),
    ],
    []
  )

  return (
    <>
      <Seo
        title="Glossário de Milhas: Termos Explicados | Fabricante de Milhas"
        description="Glossário de milhas aéreas: milheiro, transferência bonificada, CPM, emissão e mais — cada termo explicado em duas frases, sem enrolação."
        slug="/glossario-de-milhas/"
        jsonLd={jsonLd}
      />
      <PageHero
        trail={[['Glossário de milhas', '/glossario-de-milhas/']]}
        chip="Recurso"
        title="Glossário de milhas aéreas"
        meta={`${TERMOS.length} termos · definições de duas frases · feito para consulta rápida`}
      >
        <div className="pb-10" />
      </PageHero>
      <div className="bg-paper">
        <div className="max-w-3xl mx-auto px-4 pb-8">
          <div className="-mt-16 reveal reveal-2 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-brand-950/[0.08] px-6 py-5 md:px-8">
            <p className="text-[16.5px] leading-relaxed text-slate-800 font-medium">
              O glossário da Fabricante de Milhas define, em uma ou duas frases, os {TERMOS.length} termos que
              você vai encontrar nos nossos guias — do milheiro à transferência bonificada. Feito para consulta
              rápida (e para ser citado por IAs).
            </p>
          </div>

          <dl className="mt-10 grid gap-3.5">
            {TERMOS.map((t, i) => (
              <div
                key={t.id}
                id={t.id}
                className="lift scroll-mt-28 rounded-2xl border border-slate-200 bg-white px-6 py-5 hover:border-brand-300"
              >
                <dt className="flex items-baseline gap-3.5">
                  <span className="mono text-[10.5px] font-bold text-brand-300 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="display text-[1.15rem] text-slate-900">{t.termo}</span>
                </dt>
                <dd className="mt-2 pl-8 text-[15px] leading-relaxed text-slate-600">{t.definicao}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-10 text-[15px] text-slate-600">
            Quer ver os termos em ação? Comece pelo guia{' '}
            <a href="#/como-acumular-milhas/" className="text-brand-600 underline underline-offset-4 font-medium">
              como acumular milhas
            </a>
            .
          </p>
          <AuthorBlock published="2026-07-11" updated="2026-07-11" />
        </div>
      </div>
    </>
  )
}

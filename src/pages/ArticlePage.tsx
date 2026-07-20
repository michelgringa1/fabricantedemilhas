import { useMemo } from 'react'
import type { Article } from '@/data/types'
import { TYPE_LABEL } from '@/data/articles'
import { Seo, BASE_URL, ORG_ID, breadcrumbLd, faqLd } from '@/lib/seo'
import {
  PageHero,
  AnswerFirst,
  Tldr,
  BlockRenderer,
  FaqSection,
  AuthorBlock,
  ChecksNote,
  RelatedLinks,
} from '@/components/blocks'
import { EventoBanner, BANNER_SRC } from '@/components/EventoBanner'

/** Escolhe um ponto de corte no meio do artigo, preferindo o início de uma
 * seção (h2) mais próxima do centro, para o banner não partir um parágrafo. */
function pontoDeCorte(blocks: Article['blocks']): number {
  const meio = Math.floor(blocks.length / 2)
  let melhor = -1
  let menorDist = Infinity
  blocks.forEach((b, i) => {
    if (i > 0 && b.t === 'h2') {
      const dist = Math.abs(i - meio)
      if (dist < menorDist) {
        menorDist = dist
        melhor = i
      }
    }
  })
  return melhor === -1 ? meio : melhor
}

export function ArticlePage({ article }: { article: Article }) {
  const jsonLd = useMemo(() => {
    const graph: object[] = []
    const base = {
      headline: article.h1,
      description: article.metaDescription,
      inLanguage: 'pt-BR',
      author: { '@type': 'Organization', name: 'Equipe Fabricante de Milhas', '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      datePublished: article.published,
      dateModified: article.updated,
      mainEntityOfPage: BASE_URL + article.slug,
    }
    if (article.rating) {
      graph.push({
        '@type': 'Review',
        ...base,
        itemReviewed: {
          '@type': 'Course',
          name: article.rating.itemName,
          description: article.rating.itemDesc,
          url: article.rating.itemUrl,
          provider: { '@type': 'Organization', name: '4MULTIPLUS MIDIA DIGITAL LTDA' },
          offers: { '@type': 'Offer', category: 'Paid' },
        },
        reviewRating: { '@type': 'Rating', ratingValue: article.rating.value, bestRating: 10, worstRating: 0 },
      })
    } else {
      graph.push({ '@type': 'Article', ...base })
    }
    if (article.faq.length) graph.push(faqLd(article.faq))
    graph.push(breadcrumbLd([[article.h1, article.slug]]))
    if (article.extraLd) graph.push(...article.extraLd)
    return graph
  }, [article])

  const updatedFmt = new Date(article.updated + 'T12:00:00').toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      <Seo title={article.seoTitle} description={article.metaDescription} slug={article.slug} jsonLd={jsonLd} />
      <article>
        <PageHero
          trail={[[article.cluster, '/blog/'], [article.h1, article.slug]]}
          chip={TYPE_LABEL[article.type]}
          title={article.h1}
          meta={
            <span>
              Por <strong className="text-brand-100/90 font-semibold">Equipe Fabricante de Milhas</strong>
              <span className="mx-2 opacity-50">·</span>Atualizado em {updatedFmt}
              {article.rating && (
                <>
                  <span className="mx-2 opacity-50">·</span>
                  <span className="text-sun-400 font-bold">
                    Nota {article.rating.value.toFixed(1).replace('.', ',')}/10
                  </span>
                </>
              )}
            </span>
          }
        >
          <div className="pb-10" />
        </PageHero>

        <div className="bg-paper">
          <div className="max-w-3xl mx-auto px-4 pb-6">
            {/* answer-first sobrepõe a faixa escura */}
            <div className="-mt-16 reveal reveal-2">
              <AnswerFirst text={article.answerFirst} />
            </div>
            {article.tldr && <Tldr items={article.tldr} />}

            <div className="mt-10">
              {BANNER_SRC[article.slug] ? (
                (() => {
                  const corte = pontoDeCorte(article.blocks)
                  return (
                    <>
                      <BlockRenderer blocks={article.blocks.slice(0, corte)} />
                      <EventoBanner src={BANNER_SRC[article.slug]} />
                      <BlockRenderer blocks={article.blocks.slice(corte)} />
                    </>
                  )
                })()
              ) : (
                <BlockRenderer blocks={article.blocks} />
              )}
            </div>

            <FaqSection faq={article.faq} />
            <RelatedLinks related={article.related} />
            <AuthorBlock published={article.published} updated={article.updated} />
            {article.checks && <ChecksNote checks={article.checks} />}
            <div className="pb-8" />
          </div>
        </div>
      </article>
    </>
  )
}

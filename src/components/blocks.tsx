import type { ReactNode } from 'react'
import type { Block, Faq } from '@/data/types'
import { AFF_URL } from '@/data/site'
import { PlaneMark } from '@/components/layout'

/* ---------- hero de página (chrome escuro) ---------- */

export function PageHero({
  trail,
  chip,
  title,
  meta,
  children,
}: {
  trail: [string, string][]
  chip?: string
  title: string
  meta?: ReactNode
  children?: ReactNode
}) {
  return (
    <div className="bg-night grain text-white">
      <div className="max-w-3xl mx-auto px-4 pt-10 pb-12">
        <Breadcrumbs trail={trail} dark />
        {chip && (
          <div className="reveal mt-7 flex items-center gap-3">
            <span className="mono text-[10.5px] tracking-[0.18em] text-sun-500 border border-sun-500/40 rounded-full px-3 py-1 uppercase">
              {chip}
            </span>
          </div>
        )}
        <h1 className="reveal reveal-1 display text-[2.1rem] md:text-[2.9rem] leading-[1.08] mt-4">{title}</h1>
        {meta && <div className="reveal reveal-2 mt-4 text-[13.5px] text-brand-100/60">{meta}</div>}
        {children}
      </div>
    </div>
  )
}

/* ---------- blocos de topo ---------- */

export function AnswerFirst({ text }: { text: string }) {
  return (
    <div className="relative rounded-2xl bg-white border border-slate-200 shadow-xl shadow-brand-950/[0.08] px-6 py-5 md:px-8 md:py-6">
      <span className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-sun-500 to-brand-500" aria-hidden="true" />
      <div className="eyebrow text-brand-600 mb-2.5 flex items-center gap-2">
        <svg className="w-3.5 h-3.5 text-sun-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
        Resposta rápida
      </div>
      <p className="text-[17.5px] leading-relaxed text-slate-800 font-medium">{text}</p>
    </div>
  )
}

export function Tldr({ items }: { items: string[] }) {
  return (
    <div className="mt-6 rounded-2xl border border-slate-200 bg-white overflow-hidden">
      <div className="flex items-center gap-2.5 px-6 pt-5">
        <span className="mono text-[11px] tracking-[0.2em] font-bold text-brand-700">TL;DR</span>
        <span className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" aria-hidden="true" />
        <span className="mono text-[10px] tracking-[0.14em] text-slate-400 uppercase">o essencial</span>
      </div>
      <ul className="px-6 py-5 space-y-3">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3.5 text-[15.5px] leading-relaxed text-slate-700">
            <span className="mono text-[11px] font-bold text-sun-600 mt-1.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
            <span dangerouslySetInnerHTML={{ __html: it }} />
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ---------- CTA de afiliado (máx. 1 por artigo) ---------- */

export function CtaAffiliate({ variant = 'padrao' }: { variant?: 'padrao' | 'review' }) {
  return (
    <aside className="my-14 rounded-3xl bg-night grain text-white px-7 py-9 md:px-11 md:py-11 relative overflow-hidden border border-white/10 not-prose">
      <svg className="absolute inset-0 w-full h-full" aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 800 300" fill="none">
        <path className="flight-path" d="M-20 240 C 180 160, 420 260, 620 120 S 780 60, 840 80" stroke="rgba(255,179,0,0.3)" strokeWidth="1.5" />
      </svg>
      <div className="relative max-w-2xl">
        <div className="eyebrow text-sun-500 flex items-center gap-2">
          <PlaneMark className="w-3.5 h-3.5" />
          Quer se aprofundar?
        </div>
        {variant === 'review' ? (
          <p className="mt-4 display text-[1.5rem] md:text-[1.75rem] leading-snug">
            O Fábrica de Milhas é o curso que recomendamos como porta de entrada —{' '}
            <span className="text-brand-100/70 font-normal">com os prós e contras que você acabou de ler.</span>
          </p>
        ) : (
          <p className="mt-4 display text-[1.5rem] md:text-[1.75rem] leading-snug">
            O Fábrica de Milhas, do Rodrigo Góes, é o curso que recomendamos como porta de entrada.
          </p>
        )}
        {variant !== 'review' && (
          <p className="mt-3 text-[15px] text-brand-100/75">
            Veja nossa{' '}
            <a href="#/fabrica-de-milhas-vale-a-pena/" className="text-sun-400 font-semibold u-link">
              análise completa
            </a>{' '}
            antes de decidir — nota, preço, garantia e para quem NÃO serve.
          </p>
        )}
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a
            href={AFF_URL}
            target="_blank"
            rel="sponsored nofollow noopener"
            className="inline-flex items-center gap-2.5 bg-sun-500 hover:bg-sun-400 text-slate-950 font-bold px-7 py-3.5 rounded-full transition-all hover:shadow-xl hover:shadow-sun-500/20"
          >
            Conhecer o Fábrica de Milhas
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          {variant === 'review' && (
            <a href="#/cursos-de-milhas/" className="text-brand-100/80 u-link text-[14.5px] font-medium">
              Comparar com alternativas
            </a>
          )}
        </div>
        <p className="mt-5 mono text-[10.5px] tracking-[0.08em] text-brand-100/45 uppercase">
          Resultados variam — nenhum ganho é garantido
        </p>
      </div>
    </aside>
  )
}

/* ---------- corpo ---------- */

function Callout({ tone, title, html }: { tone: 'info' | 'warn' | 'ok'; title?: string; html: string }) {
  const styles = {
    info: 'bg-brand-50/70 border-brand-600 text-slate-800',
    warn: 'bg-amber-50/80 border-sun-600 text-amber-950',
    ok: 'bg-emerald-50/70 border-emerald-600 text-emerald-950',
  }[tone]
  return (
    <div className={`my-7 rounded-r-2xl border-l-[3px] px-6 py-5 ${styles}`}>
      {title && <div className="eyebrow mb-2 opacity-80">{title}</div>}
      <div className="text-[15.5px] leading-relaxed [&_a]:underline [&_a]:underline-offset-2" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="my-9 grid md:grid-cols-2 gap-4 not-prose">
      {[
        { label: 'Prós', sign: '+', items: pros, color: 'text-emerald-600', ring: 'border-emerald-500/30', chip: 'bg-emerald-600' },
        { label: 'Contras', sign: '−', items: cons, color: 'text-rose-600', ring: 'border-rose-500/30', chip: 'bg-rose-600' },
      ].map((col) => (
        <div key={col.label} className={`rounded-2xl border ${col.ring} bg-white p-6`}>
          <div className="flex items-center gap-2.5 mb-4">
            <span className={`grid place-items-center w-6 h-6 rounded-full ${col.chip} text-white font-bold text-[15px] leading-none`}>
              {col.sign}
            </span>
            <span className="display text-[1.1rem] text-slate-900">{col.label}</span>
          </div>
          <ul className="space-y-3.5">
            {col.items.map((p, i) => (
              <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-slate-700">
                <span className={`mono text-[11px] font-bold mt-1 shrink-0 ${col.color}`}>{String(i + 1).padStart(2, '0')}</span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: p.replace(/\[VERIFICAR[^\]]*\]/g, (m) => `<mark class="verificar">${m}</mark>`),
                  }}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="article-body">
      {blocks.map((b, i) => {
        switch (b.t) {
          case 'p':
            return <p key={i} dangerouslySetInnerHTML={{ __html: b.html }} />
          case 'h2':
            return (
              <h2 key={i} id={b.id}>
                {b.text}
              </h2>
            )
          case 'h3':
            return <h3 key={i}>{b.text}</h3>
          case 'ul':
            return (
              <ul key={i}>
                {b.items.map((it, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: it }} />
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={i}>
                {b.items.map((it, j) => (
                  <li key={j} dangerouslySetInnerHTML={{ __html: it }} />
                ))}
              </ol>
            )
          case 'table':
            return (
              <div key={i} className="my-8 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                {b.caption && (
                  <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 text-[13px] font-semibold text-slate-600">
                    {b.caption}
                  </div>
                )}
                <div className="overflow-x-auto">
                  <table className="fm-table">
                    <thead>
                      <tr>
                        {b.head.map((h, j) => (
                          <th key={j}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.rows.map((row, j) => (
                        <tr key={j}>
                          {row.map((cell, k) => (
                            <td
                              key={k}
                              dangerouslySetInnerHTML={{
                                __html: cell.replace(/\[VERIFICAR[^\]]*\]/g, (m) => `<mark class="verificar">${m}</mark>`),
                              }}
                            />
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {b.note && (
                  <div
                    className="bg-slate-50 border-t border-slate-200 px-5 py-2.5 text-[12.5px] text-slate-500"
                    dangerouslySetInnerHTML={{
                      __html: b.note.replace(/\[VERIFICAR[^\]]*\]/g, (m) => `<mark class="verificar">${m}</mark>`),
                    }}
                  />
                )}
              </div>
            )
          case 'callout':
            return <Callout key={i} tone={b.tone} title={b.title} html={b.html} />
          case 'cta':
            return <CtaAffiliate key={i} variant={b.variant} />
          case 'proscons':
            return <ProsCons key={i} pros={b.pros} cons={b.cons} />
          default:
            return null
        }
      })}
    </div>
  )
}

/* ---------- FAQ / autor / rodapé de artigo ---------- */

export function FaqSection({ faq }: { faq: Faq[] }) {
  return (
    <section className="mt-14" aria-label="Perguntas frequentes">
      <div className="eyebrow text-brand-600">FAQ</div>
      <h2 className="display text-[1.55rem] text-slate-900 mt-2 mb-6">Perguntas frequentes</h2>
      <div className="border-t border-slate-200">
        {faq.map((f, i) => (
          <details key={i} className="group border-b border-slate-200">
            <summary className="cursor-pointer list-none py-5 flex items-start justify-between gap-5 font-semibold text-slate-900 text-[16px] hover:text-brand-700 transition-colors">
              <span className="flex gap-4">
                <span className="mono text-[11px] font-bold text-brand-300 mt-1.5 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                {f.q}
              </span>
              <svg
                className="w-5 h-5 text-sun-600 shrink-0 mt-0.5 transition-transform duration-300 group-open:rotate-45"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </summary>
            <p className="pb-6 pl-8 text-[15.5px] leading-relaxed text-slate-600 max-w-2xl">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export function AuthorBlock({ published, updated }: { published: string; updated: string }) {
  const fmt = (d: string) =>
    new Date(d + 'T12:00:00').toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })
  return (
    <div className="mt-14 rounded-2xl bg-night grain text-white px-6 py-6 flex flex-col sm:flex-row gap-5 sm:items-center">
      <span className="grid place-items-center w-12 h-12 rounded-xl border border-white/15 bg-white/[0.06] shrink-0">
        <PlaneMark className="w-5 h-5" />
      </span>
      <div className="text-[14px] leading-relaxed">
        <div className="display text-[15.5px]">Equipe Fabricante de Milhas</div>
        <p className="text-brand-100/70 mt-1">
          Conteúdo produzido seguindo{' '}
          <a href="#/metodologia/" className="text-sun-400 u-link">
            metodologia pública
          </a>
          . Publicado em {fmt(published)} · Atualizado em {fmt(updated)}.
        </p>
      </div>
    </div>
  )
}

export function ChecksNote({ checks }: { checks: string[] }) {
  if (!checks.length) return null
  return (
    <details className="mt-6 rounded-2xl border border-dashed border-sun-600/50 bg-sun-300/10 px-5 py-4">
      <summary className="cursor-pointer text-[13px] font-bold text-amber-900 mono tracking-wide">
        NOTA EDITORIAL · {checks.length} checagens humanas pendentes antes da publicação
      </summary>
      <ul className="mt-3 space-y-1.5 text-[13.5px] text-amber-950 list-disc pl-5">
        {checks.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </details>
  )
}

export function Breadcrumbs({ trail, dark = false }: { trail: [string, string][]; dark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`text-[12.5px] ${dark ? 'text-brand-100/50' : 'text-slate-500'}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <a href="#/" className={dark ? 'hover:text-white u-link' : 'hover:text-brand-600 hover:underline'}>
            Início
          </a>
        </li>
        {trail.map(([name, slug], i) => (
          <li key={slug} className="flex items-center gap-1.5">
            <span aria-hidden="true" className="opacity-60">→</span>
            {i === trail.length - 1 ? (
              <span className={dark ? 'text-brand-100/80' : 'text-slate-700 font-medium'}>{name}</span>
            ) : (
              <a href={'#' + slug} className={dark ? 'hover:text-white u-link' : 'hover:text-brand-600 hover:underline'}>
                {name}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function RelatedLinks({ related }: { related: { slug: string; anchor: string }[] }) {
  if (!related.length) return null
  return (
    <section className="mt-14" aria-label="Leia também">
      <div className="eyebrow text-brand-600">Continue a rota</div>
      <h2 className="display text-[1.35rem] text-slate-900 mt-2 mb-5">Leia também</h2>
      <div className="grid sm:grid-cols-2 gap-3.5">
        {related.map((r, i) => (
          <a
            key={r.slug}
            href={'#' + r.slug}
            className="lift group rounded-2xl border border-slate-200 bg-white px-5 py-4 text-[14.5px] font-semibold text-slate-800 hover:border-brand-400 hover:shadow-lg hover:shadow-brand-900/[0.06] flex items-center justify-between gap-4"
          >
            <span className="flex gap-3.5 items-baseline">
              <span className="mono text-[10.5px] font-bold text-brand-300 group-hover:text-sun-600 transition-colors shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="group-hover:text-brand-700 transition-colors">{r.anchor}</span>
            </span>
            <svg className="w-4 h-4 shrink-0 text-brand-400 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        ))}
      </div>
    </section>
  )
}

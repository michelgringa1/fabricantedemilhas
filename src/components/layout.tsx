import { useState } from 'react'
import { NAV, FOOTER_COLS, CONTACT_EMAIL } from '@/data/site'

export function PlaneMark({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path d="M2.5 15 L21.5 5.5 L14 17.5 L10.5 14 Z" fill="#FFB300" />
      <path d="M10.5 14 L11 18.5 L13 15.8" fill="#FFC733" />
    </svg>
  )
}

export function Logo({ light = true }: { light?: boolean }) {
  return (
    <a href="/" className="flex items-center gap-2.5 shrink-0 group" aria-label="Fabricante de Milhas, ir para o início">
      <span className="grid place-items-center w-9 h-9 rounded-xl border border-white/20 bg-white/[0.06] group-hover:border-sun-500/60 transition-colors">
        <PlaneMark />
      </span>
      <span className={`display text-[17px] leading-none ${light ? 'text-white' : 'text-slate-900'}`}>
        Fabricante<span className="text-sun-500"> de Milhas</span>
      </span>
    </a>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="sticky top-0 z-50 bg-[#071B49]/92 backdrop-blur-md border-b border-white/[0.09] text-white supports-[backdrop-filter]:bg-[#071B49]/85 bg-[#071B49]">
        <div className="max-w-6xl mx-auto px-4 h-[68px] flex items-center justify-between gap-4">
          <Logo />
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navegação principal">
            {NAV.map((group) => (
              <div key={group.label} className="relative group">
                <button className="px-3.5 py-2 text-[14.5px] font-medium text-brand-100/90 hover:text-white rounded-lg hover:bg-white/[0.07] inline-flex items-center gap-1.5 transition-colors">
                  {group.label}
                  <svg className="w-3 h-3 opacity-50" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute left-0 top-full pt-2 hidden group-hover:block group-focus-within:block">
                  <div className="bg-[#0A2050] border border-white/10 rounded-2xl shadow-2xl shadow-black/50 py-2.5 min-w-[280px] overflow-hidden">
                    {group.items.map((it) => (
                      <a
                        key={it.slug}
                        href={it.slug}
                        className="block px-5 py-2.5 text-[14px] text-brand-100/85 hover:bg-white/[0.06] hover:text-white transition-colors"
                      >
                        {it.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="/fabrica-de-milhas-vale-a-pena/"
              className="hidden sm:inline-flex items-center gap-2 bg-sun-500 hover:bg-sun-400 text-slate-950 font-bold text-[13.5px] px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-sun-500/25"
            >
              A análise nº 1
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <button
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10"
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <nav className="lg:hidden border-t border-white/10 bg-[#071B49] max-h-[70vh] overflow-y-auto" aria-label="Menu móvel">
            {NAV.map((group) => (
              <div key={group.label} className="px-5 py-4 border-b border-white/[0.07]">
                <div className="eyebrow text-sun-500 mb-2">{group.label}</div>
                {group.items.map((it) => (
                  <a key={it.slug} href={it.slug} onClick={() => setOpen(false)} className="block py-2 text-[15px] text-brand-100/90">
                    {it.label}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        )}
      </header>
    </>
  )
}

export function Footer() {
  return (
    <footer className="bg-night grain text-white mt-24">
      <div className="max-w-6xl mx-auto px-4 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-[1.35fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 text-[14px] leading-relaxed text-brand-100/70 max-w-xs">
              Milhas aéreas no Brasil, do zero ao avançado: guias práticos, análises honestas
              de cursos e dados atualizados todo mês.
            </p>
            <p className="mono mt-5 text-[12px] tracking-wide text-brand-100/50">{CONTACT_EMAIL}</p>
          </div>
          {FOOTER_COLS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <div className="eyebrow text-sun-500 mb-4">{col.title}</div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.slug}>
                    <a href={l.slug} className="text-[13.5px] text-brand-100/75 hover:text-white u-link">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-14 pt-7 border-t border-white/[0.09] text-[12.5px] leading-relaxed text-brand-100/55 space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>© 2026 Fabricante de Milhas. Todos os direitos reservados.</p>
            <p className="mono text-[11px] tracking-[0.18em] uppercase text-brand-100/40">GRU → MUNDO · desde 2026</p>
          </div>
          <p className="text-[11.5px] text-brand-100/40">
            Alguns links deste site são de afiliado. Podemos receber comissão, sem custo extra para você.{' '}
            <a href="/divulgacao-de-afiliados/" className="u-link text-brand-100/60">Saiba mais</a>.
          </p>
        </div>
      </div>
    </footer>
  )
}

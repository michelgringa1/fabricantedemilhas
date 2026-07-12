import { Seo, breadcrumbLd } from '@/lib/seo'
import { PlaneMark } from '@/components/layout'

const CLUSTERS = [
  {
    slug: '/como-acumular-milhas/',
    n: '01',
    title: 'Acumular milhas',
    desc: 'Cartão, transferências bonificadas e clubes: o passo a passo do zero absoluto ao acúmulo em escala.',
    featured: true,
  },
  {
    slug: '/como-ganhar-dinheiro-com-milhas/',
    n: '02',
    title: 'Ganhar dinheiro',
    desc: 'Os 3 caminhos realistas — com os riscos na mesa.',
  },
  {
    slug: '/vender-milhas-aereas/',
    n: '03',
    title: 'Vender milhas',
    desc: 'Cotação, canais seguros e as lições do caso 123milhas.',
  },
  {
    slug: '/cartao-de-credito-para-milhas/',
    n: '04',
    title: 'Cartões de crédito',
    desc: 'O cartão que pontua de verdade para o seu perfil.',
  },
  {
    slug: '/programas-de-milhas/',
    n: '05',
    title: 'Programas de milhas',
    desc: 'Smiles, LATAM Pass, Azul Fidelidade e cia., comparados.',
  },
  {
    slug: '/como-viajar-de-graca-com-milhas/',
    n: '06',
    title: 'Viajar com milhas',
    desc: 'Quando e como emitir para multiplicar cada milha.',
  },
]

const TICKER = [
  'SMILES', 'LATAM PASS', 'AZUL FIDELIDADE', 'LIVELO', 'ESFERA',
  'COTAÇÃO DO MILHEIRO · ATUALIZAÇÃO MENSAL', 'CALCULADORA DE MILHAS', 'TRANSFERÊNCIA BONIFICADA', 'CLASSE EXECUTIVA',
]

function Ticker() {
  const row = (
    <div className="flex items-center shrink-0">
      {TICKER.map((t) => (
        <span key={t} className="flex items-center">
          <span className="mono text-[12px] tracking-[0.22em] text-brand-100/70 px-7 whitespace-nowrap">{t}</span>
          <span className="text-sun-500 text-[10px]" aria-hidden="true">✦</span>
        </span>
      ))}
    </div>
  )
  return (
    <div className="bg-[#040A1E] border-y border-white/[0.07] overflow-hidden py-3" aria-hidden="true">
      <div className="marquee-track">
        {row}
        {row}
      </div>
    </div>
  )
}

function BoardingPass() {
  return (
    <a
      href="#/fabrica-de-milhas-vale-a-pena/"
      className="float-card block w-[340px] max-w-full rounded-2xl bg-white text-slate-900 shadow-2xl shadow-black/50 rotate-[2.5deg] hover:rotate-0 transition-transform duration-500 overflow-hidden"
      aria-label="Abrir análise: Fábrica de Milhas vale a pena?"
    >
      <div className="px-6 pt-5 pb-4 flex items-center justify-between">
        <div>
          <div className="eyebrow text-slate-400">Análise nº 1</div>
          <div className="display text-[19px] mt-1">Fábrica de Milhas</div>
        </div>
        <span className="relative grid place-items-center w-14 h-14">
          <span className="ring-dial absolute inset-0 rounded-full" style={{ ['--val' as string]: 80 }} />
          <span className="display text-[17px]">8,0</span>
        </span>
      </div>
      <div className="px-6 pb-4 grid grid-cols-3 gap-2 text-center">
        <div>
          <div className="mono text-[10px] tracking-[0.14em] text-slate-400">PREÇO</div>
          <div className="text-[13px] font-bold mt-0.5">premium</div>
        </div>
        <div>
          <div className="mono text-[10px] tracking-[0.14em] text-slate-400">GARANTIA</div>
          <div className="text-[13px] font-bold mt-0.5">7d + extra</div>
        </div>
        <div>
          <div className="mono text-[10px] tracking-[0.14em] text-slate-400">REP. RA</div>
          <div className="text-[13px] font-bold mt-0.5">6,6 · regular</div>
        </div>
      </div>
      <div className="perf mx-4" />
      <div className="px-6 py-4 flex items-center justify-between gap-4">
        <div className="mono text-[11px] tracking-[0.14em] text-slate-500">
          FM-2026 · REVIEW<br />PRÓS + CONTRAS REAIS
        </div>
        <div className="barcode h-9 w-24 opacity-80" aria-hidden="true" />
      </div>
      <div className="bg-sun-500 text-slate-950 text-center font-bold text-[13.5px] py-2.5">
        Ler a análise completa →
      </div>
    </a>
  )
}

const ANALISES = [
  {
    slug: '/fabrica-de-milhas-vale-a-pena/',
    tag: 'REVIEW',
    title: 'Fábrica de Milhas vale a pena?',
    desc: 'Preço, garantia dupla, Reclame Aqui e 5 contras reais do curso do Rodrigo Góes.',
    nota: 80,
  },
  {
    slug: '/rodrigo-goes-e-confiavel/',
    tag: 'REVIEW',
    title: 'Rodrigo Góes é confiável?',
    desc: 'CNPJ, números autodeclarados e reputação: o que os dados públicos mostram.',
    nota: null,
  },
  {
    slug: '/cursos-de-milhas/',
    tag: 'COMPARADOR',
    title: 'Cursos de milhas comparados',
    desc: 'Os principais cursos lado a lado, pelos 6 critérios da metodologia.',
    nota: null,
  },
]

export function Home() {
  return (
    <>
      <Seo
        title="Fabricante de Milhas — Milhas aéreas explicadas com honestidade"
        description="Guias completos, análises e comparativos de cursos de milhas aéreas. Aprenda a acumular, vender e viajar com milhas — sem promessa milagrosa."
        slug="/"
        jsonLd={[breadcrumbLd([])]}
      />

      {/* HERO */}
      <section className="bg-night grain text-white relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 1200 640" fill="none">
          <path className="flight-path" d="M-40 500 C 260 380, 520 560, 780 340 S 1150 160, 1280 220" stroke="rgba(255,179,0,0.35)" strokeWidth="1.5" />
          <path className="flight-path" d="M-60 260 C 220 180, 640 300, 900 140 S 1180 40, 1300 90" stroke="rgba(110,168,255,0.28)" strokeWidth="1.5" style={{ animationDelay: '-1.2s' }} />
          <circle cx="780" cy="340" r="3" fill="#FFB300" opacity="0.8" />
          <circle cx="900" cy="140" r="3" fill="#6EA8FF" opacity="0.7" />
        </svg>
        <div className="max-w-6xl mx-auto px-4 pt-20 pb-24 md:pt-28 md:pb-32 relative grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
          <div>
            <div className="reveal eyebrow text-sun-500 flex items-center gap-2.5">
              <PlaneMark className="w-4 h-4" />
              Milhas aéreas do zero ao avançado
            </div>
            <h1 className="reveal reveal-1 display text-[2.7rem] md:text-[4rem] leading-[1.02] mt-6">
              Milhas aéreas,
              <br />
              <span className="text-gradient-sky">explicadas com</span>
              <br />
              honestidade<span className="text-sun-500">.</span>
            </h1>
            <p className="reveal reveal-2 mt-7 text-[17px] md:text-lg text-brand-100/80 leading-relaxed max-w-lg">
              Guias práticos para acumular, vender e viajar com milhas — e análises completas
              dos cursos que prometem te ensinar. Sem hype, sem renda garantida.
            </p>
            <div className="reveal reveal-3 mt-9 flex flex-wrap gap-3.5">
              <a
                href="#/como-acumular-milhas/"
                className="inline-flex items-center gap-2.5 bg-sun-500 hover:bg-sun-400 text-slate-950 font-bold px-7 py-3.5 rounded-full transition-all hover:shadow-xl hover:shadow-sun-500/25"
              >
                Começar pelo guia gratuito
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a
                href="#/cursos-de-milhas/"
                className="inline-flex items-center gap-2 border border-white/25 hover:border-white/60 hover:bg-white/[0.06] text-white font-semibold px-7 py-3.5 rounded-full transition-all"
              >
                Comparar cursos
              </a>
            </div>
            <div className="reveal reveal-4 mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] text-brand-100/60">
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-sun-500" />Guias gratuitos</span>
              <span className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-sun-500" />Dados atualizados todo mês</span>
              <a href="#/metodologia/" className="flex items-center gap-2 u-link text-brand-100/80"><span className="w-1 h-1 rounded-full bg-sun-500" />Metodologia pública</a>
            </div>
          </div>
          <div className="reveal reveal-3 hidden lg:flex justify-center">
            <BoardingPass />
          </div>
        </div>
      </section>

      <Ticker />

      {/* TRILHAS */}
      <section className="bg-paper">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <div className="eyebrow text-brand-600">Trilhas gratuitas</div>
              <h2 className="display text-[2rem] md:text-[2.5rem] text-slate-900 mt-3">Comece por aqui</h2>
            </div>
            <a href="#/blog/" className="text-brand-700 font-semibold text-[14.5px] u-link">
              Ver todos os artigos →
            </a>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CLUSTERS.map((c) => (
              <a
                key={c.slug}
                href={'#' + c.slug}
                className={`lift group relative rounded-2xl p-7 overflow-hidden ${
                  c.featured
                    ? 'bg-band grain text-white sm:col-span-2 lg:col-span-1 lg:row-span-2 flex flex-col justify-between min-h-[280px] border border-white/10'
                    : 'bg-white border border-slate-200 hover:border-brand-400 hover:shadow-xl hover:shadow-brand-900/[0.07]'
                }`}
              >
                <div>
                  <div className={`mono text-[13px] font-bold tracking-[0.14em] ${c.featured ? 'text-sun-500' : 'text-brand-300 group-hover:text-sun-600 transition-colors'}`}>
                    {c.n}
                  </div>
                  <h3 className={`display text-[1.35rem] mt-3 ${c.featured ? 'text-white text-[1.7rem]' : 'text-slate-900 group-hover:text-brand-700'}`}>
                    {c.title}
                  </h3>
                  <p className={`mt-2.5 text-[14.5px] leading-relaxed ${c.featured ? 'text-brand-100/80' : 'text-slate-600'}`}>
                    {c.desc}
                  </p>
                </div>
                <span className={`mt-6 inline-flex items-center gap-2 text-[13.5px] font-bold ${c.featured ? 'text-sun-500' : 'text-brand-600'}`}>
                  Ler o guia
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ANÁLISES */}
      <section className="bg-band grain text-white">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <div className="eyebrow text-sun-500">Fundo de funil, sem fantasia</div>
              <h2 className="display text-[2rem] md:text-[2.5rem] mt-3">Análises de cursos</h2>
              <p className="mt-3 text-brand-100/75 max-w-lg">
                Reviews completos com prós, contras e reputação verificada — inclusive do curso que recomendamos.
              </p>
            </div>
            <a href="#/metodologia/" className="text-sun-500 font-semibold text-[14.5px] u-link">
              Como avaliamos →
            </a>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {ANALISES.map((a) => (
              <a
                key={a.slug}
                href={'#' + a.slug}
                className="lift group rounded-2xl border border-white/12 bg-white/[0.05] hover:bg-white/[0.09] hover:border-sun-500/40 p-7 flex flex-col backdrop-blur-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="mono text-[10.5px] tracking-[0.18em] text-sun-500 border border-sun-500/40 rounded-full px-3 py-1">
                    {a.tag}
                  </span>
                  {a.nota && (
                    <span className="relative grid place-items-center w-12 h-12 shrink-0">
                      <span className="ring-dial absolute inset-0 rounded-full" style={{ ['--val' as string]: a.nota }} />
                      <span className="display text-[14px]">{(a.nota / 10).toFixed(1).replace('.', ',')}</span>
                    </span>
                  )}
                </div>
                <h3 className="display text-[1.3rem] leading-snug mt-5 group-hover:text-sun-400 transition-colors">{a.title}</h3>
                <p className="mt-2.5 text-[14px] text-brand-100/70 leading-relaxed flex-1">{a.desc}</p>
                <span className="mt-5 text-[13.5px] font-bold text-white/90 inline-flex items-center gap-2">
                  Ler a análise
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DADO PRÓPRIO — painel */}
      <section className="bg-paper">
        <div className="max-w-6xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow text-brand-600">Dado próprio · atualização mensal</div>
            <h2 className="display text-[2rem] md:text-[2.4rem] text-slate-900 mt-3 leading-tight">
              Cotação do milheiro,<br />mês a mês
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed max-w-md">
              Mantemos uma tabela de referência do custo e da cotação de venda do milheiro por programa —
              a bússola de quem acumula para vender. Citada nos nossos guias, aberta para consulta.
            </p>
            <a
              href="#/vender-milhas-aereas/#cotacao"
              className="mt-6 inline-flex items-center gap-2.5 bg-brand-700 hover:bg-brand-800 text-white font-bold px-6 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-brand-700/25"
            >
              Consultar a tabela do mês
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </a>
          </div>
          <div className="rounded-2xl bg-night grain border border-white/10 p-7 text-white shadow-2xl shadow-brand-900/20">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="mono text-[11px] tracking-[0.2em] text-sun-500">PAINEL · MILHEIRO</span>
              <span className="mono text-[11px] tracking-[0.14em] text-brand-100/50">JUL/2026 <mark className="verificar">[VERIFICAR]</mark></span>
            </div>
            <div className="divide-y divide-white/[0.07]">
              {[
                ['SMILES', 'GOL'],
                ['LATAM PASS', 'LATAM'],
                ['AZUL FIDELIDADE', 'AZUL'],
              ].map(([p, cia]) => (
                <div key={p} className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-3">
                    <PlaneMark className="w-3.5 h-3.5" />
                    <div>
                      <div className="mono text-[13px] font-bold tracking-[0.1em]">{p}</div>
                      <div className="mono text-[10px] tracking-[0.16em] text-brand-100/40">{cia}</div>
                    </div>
                  </div>
                  <div className="mono text-[13px] text-brand-100/60 tabular-nums">R$ --,-- <span className="text-brand-100/35">/milheiro</span></div>
                </div>
              ))}
            </div>
            <div className="pt-4 mono text-[10.5px] tracking-[0.12em] text-brand-100/40">
              VALORES DE REFERÊNCIA · SUJEITOS A MUDANÇA · FONTE: EQUIPE FABRICANTE DE MILHAS
            </div>
          </div>
        </div>
      </section>

      {/* PRINCÍPIOS */}
      <section className="bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="eyebrow text-brand-600">Por que confiar</div>
          <div className="mt-8 grid md:grid-cols-3 gap-x-10 gap-y-12">
            {[
              {
                n: '01',
                title: 'Análise em terceira pessoa',
                desc: 'Avaliamos cursos e produtores com fontes públicas e verificáveis — CNPJ, Reclame Aqui, imprensa.',
                slug: '/sobre/',
                link: 'Quem somos',
              },
              {
                n: '02',
                title: 'Metodologia pública',
                desc: 'Seis critérios com pesos declarados definem cada nota. Os contras ficam no texto — inclusive dos cursos que recomendamos.',
                slug: '/metodologia/',
                link: 'Como avaliamos',
              },
              {
                n: '03',
                title: 'Dados próprios todo mês',
                desc: 'Tabela de referência da cotação do milheiro por programa, revisada mensalmente e citada nos guias.',
                slug: '/vender-milhas-aereas/',
                link: 'Ver a tabela',
              },
            ].map((c) => (
              <div key={c.n} className="relative pt-8">
                <span className="display absolute -top-3 left-0 text-[3.4rem] leading-none text-transparent select-none" style={{ WebkitTextStroke: '1.5px rgba(18,86,224,0.25)' }} aria-hidden="true">
                  {c.n}
                </span>
                <h3 className="display text-[1.25rem] text-slate-900 relative">{c.title}</h3>
                <p className="mt-2.5 text-[14.5px] text-slate-600 leading-relaxed">{c.desc}</p>
                <a href={'#' + c.slug} className="mt-3.5 inline-block text-[13.5px] font-bold text-brand-600 u-link">
                  {c.link} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOSSÁRIO CTA */}
      <section className="bg-paper border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <a href="#/glossario-de-milhas/" className="lift group block rounded-3xl bg-band grain text-white px-8 py-12 md:px-14 relative overflow-hidden border border-white/10">
            <div className="relative flex flex-col md:flex-row md:items-center gap-8 justify-between">
              <div>
                <div className="eyebrow text-sun-500">Referência rápida</div>
                <h2 className="display text-[1.9rem] md:text-[2.3rem] mt-3 leading-tight">
                  Milheiro? Bonificada? CPM?<br />
                  <span className="text-gradient-sky">O glossário explica em duas frases.</span>
                </h2>
              </div>
              <span className="shrink-0 inline-flex items-center gap-2.5 bg-sun-500 group-hover:bg-sun-400 text-slate-950 font-bold px-7 py-3.5 rounded-full transition-colors">
                Abrir o glossário
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </span>
            </div>
          </a>
        </div>
      </section>
    </>
  )
}

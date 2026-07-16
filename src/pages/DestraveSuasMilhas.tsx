import { useMemo } from 'react'
import { Seo, BASE_URL, ORG_ID, breadcrumbLd, faqLd } from '@/lib/seo'
import { FaqSection, AuthorBlock, Breadcrumbs } from '@/components/blocks'
import { PlaneMark } from '@/components/layout'
import { logoEvento, iconCarrinho, iconCartao, seloGarantia, texturaMapa } from '@/assets/destrave'

/** Link de inscrição do evento (afiliado) */
const INSCRICAO = 'https://go.hotmart.com/Y102512256Q?ap=a657'

const FAQ = [
  {
    q: 'O que é o Protocolo Destrave suas Milhas?',
    a: 'É um treinamento online de 5 dias ao vivo criado por Rodrigo Góes, focado em destravar o acúmulo de milhas a partir dos gastos que você já tem. O participante aprende a montar uma rotina mensal de acúmulo e, segundo a página oficial, deve sair do evento com cerca de 5.000 milhas.',
  },
  {
    q: 'Quando acontece e quanto custa?',
    a: 'As aulas ao vivo acontecem de segunda 3 a sexta 7 de agosto de 2026, com cerca de uma hora por dia. O acesso custa R$ 47 no cartão ou via Pix, ante um valor cheio anunciado de R$ 119. As condições valem para a turma atual e podem mudar nas próximas.',
  },
  {
    q: 'Preciso ter cartão de crédito para participar?',
    a: 'Não. A página oficial afirma que o método funciona mesmo para quem não tem cartão de crédito, usando outros caminhos de acúmulo como compras com CPF em parceiros, portais e pagamento de contas. O cartão acelera o processo, mas o evento se apresenta como acessível para quem ainda não tem um.',
  },
  {
    q: 'Preciso ganhar muito para acumular milhas?',
    a: 'De acordo com o material oficial, não existe exigência de renda alta, e o conteúdo é apresentado como aplicável a partir de cerca de um salário mínimo. A lógica é aproveitar melhor gastos que já existem, como mercado, farmácia, combustível e contas de casa.',
  },
  {
    q: 'As 5.000 milhas são garantidas mesmo?',
    a: 'Trate esse número como estimativa, não como garantia contratual. A página oficial usa a expressão "5.000 milhas garantidas", mas o volume real depende de você aplicar o que é ensinado durante os 5 dias. A Fabricante de Milhas não intermedeia esse crédito: confirme as condições na página oficial antes de contar com o benefício.',
  },
  {
    q: 'O evento tem garantia se eu não gostar?',
    a: 'Sim. A página oficial informa garantia de 7 dias com devolução integral do valor, sem necessidade de justificar. Na prática, dá para assistir ao conteúdo, avaliar se faz sentido para o seu momento e pedir reembolso dentro do prazo caso não sirva.',
  },
  {
    q: 'Vou conseguir assistir se tiver pouco tempo?',
    a: 'O evento é anunciado como 5 encontros ao vivo que pedem cerca de uma hora por dia. É pouco tempo diário, mas exige presença durante a semana. Quem não consegue reservar essa hora tende a aproveitar pouco, já que o formato é prático e sequencial.',
  },
  {
    q: 'O que é ensinado em cada um dos 5 dias?',
    a: 'A grade anunciada é sequencial: dia 1, organizar os gastos para ver onde a milha escapa; dia 2, resgatar milhas paradas em programas antigos; dia 3, o caminho das 5.000 milhas; dia 4, ligar a máquina de acúmulo com os gastos do dia a dia; e dia 5, transformar o saldo em passagem, viagem ou dinheiro.',
  },
  {
    q: 'Isso é a mesma coisa que o curso Fábrica de Milhas?',
    a: 'Não. O Protocolo Destrave suas Milhas é um evento curto e de baixo investimento, com foco em destravar o acúmulo em 5 dias. O Fábrica de Milhas é o treinamento completo do mesmo produtor, com 8 níveis de conteúdo. Analisamos o curso completo em uma página dedicada.',
  },
]

/** Grade oficial anunciada pelo evento, dia a dia */
const GRADE = [
  {
    dia: 'Dia 1',
    icon: iconCartao,
    title: 'Organize seus gastos',
    desc: 'O ponto de partida é enxergar onde a sua milha já está sendo gerada e, principalmente, por onde ela está escapando todo mês.',
  },
  {
    dia: 'Dia 2',
    icon: null,
    title: 'Resgate o que já é seu',
    desc: 'Você vai atrás das milhas paradas em programas antigos e traz esse saldo esquecido de volta para a sua conta.',
  },
  {
    dia: 'Dia 3',
    icon: null,
    title: 'Suas 5.000 milhas',
    desc: 'O evento chama este dia de "suas 5.000 milhas garantidas" e descreve um caminho com condições: se inscrever, acessar o material preparatório, participar dos encontros e destravar o acúmulo. Cumprindo os passos, o crédito é liberado.',
  },
  {
    dia: 'Dia 4',
    icon: iconCarrinho,
    title: 'Ligue sua máquina',
    desc: 'A parte central: como fazer os gastos do dia a dia renderem milha sem você gastar nada a mais do que já gastaria.',
  },
  {
    dia: 'Dia 5',
    icon: null,
    title: 'Milha vira dinheiro',
    desc: 'O fechamento mostra como transformar o saldo em passagem, viagem ou dinheiro, e qual é o próximo passo depois da semana.',
  },
]

export function DestraveSuasMilhas() {
  const jsonLd = useMemo(
    () => [
      {
        '@type': 'Event',
        name: 'Protocolo Destrave suas Milhas',
        description:
          'Treinamento online de 5 dias ao vivo com Rodrigo Góes sobre como destravar o acúmulo de milhas aéreas a partir dos gastos do dia a dia, reduzir o custo de viagens e usar milhas como renda extra.',
        url: BASE_URL + '/destrave-suas-milhas/',
        startDate: '2026-08-03',
        endDate: '2026-08-07',
        eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
        eventStatus: 'https://schema.org/EventScheduled',
        inLanguage: 'pt-BR',
        location: {
          '@type': 'VirtualLocation',
          url: 'https://www.lp.fabricademilha.com/fbm/protocolo-destrave-suas-milhas-lp1/',
        },
        performer: { '@type': 'Person', name: 'Rodrigo Góes' },
        organizer: { '@type': 'Organization', name: '4MULTIPLUS MIDIA DIGITAL LTDA' },
        subEvent: GRADE.map((d, i) => ({
          '@type': 'Event',
          name: `${d.dia}: ${d.title}`,
          description: d.desc,
          startDate: `2026-08-0${i + 3}`,
          eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
          eventStatus: 'https://schema.org/EventScheduled',
          location: {
            '@type': 'VirtualLocation',
            url: 'https://www.lp.fabricademilha.com/fbm/protocolo-destrave-suas-milhas-lp1/',
          },
        })),
        offers: {
          '@type': 'Offer',
          price: 47,
          priceCurrency: 'BRL',
          availability: 'https://schema.org/InStock',
          url: BASE_URL + '/destrave-suas-milhas/',
          category: 'Paid',
        },
      },
      faqLd(FAQ),
      breadcrumbLd([['Destrave suas Milhas', '/destrave-suas-milhas/']]),
      {
        '@type': 'Article',
        headline: 'Protocolo Destrave suas Milhas: o que é, datas, preço e o que você aprende',
        description:
          'Tudo sobre o evento Protocolo Destrave suas Milhas, de Rodrigo Góes: datas, preço, o que é ensinado nos 5 dias, o que está incluído e para quem faz sentido.',
        inLanguage: 'pt-BR',
        author: { '@type': 'Organization', name: 'Equipe Fabricante de Milhas', '@id': ORG_ID },
        publisher: { '@id': ORG_ID },
        datePublished: '2026-07-16',
        dateModified: '2026-07-16',
        mainEntityOfPage: BASE_URL + '/destrave-suas-milhas/',
      },
    ],
    []
  )

  return (
    <>
      <Seo
        title="Destrave suas Milhas: o Evento de Rodrigo Góes [2026]"
        description="Protocolo Destrave suas Milhas: 5 dias ao vivo com Rodrigo Góes para destravar seu acúmulo. Datas, preço, o que você aprende e como se inscrever."
        slug="/destrave-suas-milhas/"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="bg-night grain text-white relative overflow-hidden">
        <svg className="!absolute inset-0 w-full h-full !z-0" aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 1200 560" fill="none">
          <path className="flight-path" d="M-40 420 C 260 320, 520 470, 780 280 S 1150 130, 1280 180" stroke="rgba(255,179,0,0.32)" strokeWidth="1.5" />
          <path className="flight-path" d="M-60 220 C 220 150, 640 250, 900 120 S 1180 30, 1300 80" stroke="rgba(110,168,255,0.25)" strokeWidth="1.5" style={{ animationDelay: '-1.2s' }} />
        </svg>
        <div className="max-w-5xl mx-auto px-4 pt-8 pb-16 relative">
          <Breadcrumbs trail={[['Destrave suas Milhas', '/destrave-suas-milhas/']]} dark />

          <div className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <div className="reveal flex flex-wrap items-center gap-3">
                <span className="mono text-[10.5px] tracking-[0.18em] text-sun-500 border border-sun-500/40 rounded-full px-3 py-1 uppercase">
                  Evento ao vivo
                </span>
                <span className="mono text-[10.5px] tracking-[0.18em] text-brand-100/60 uppercase">
                  3 a 7 de agosto de 2026
                </span>
              </div>

              <h1 className="reveal reveal-1 display text-[2.3rem] md:text-[3.1rem] leading-[1.05] mt-5">
                O dinheiro que você
                <br />
                <span className="text-gradient-sky">já gasta todo mês</span>
                <br />
                pode virar passagem<span className="text-sun-500">.</span>
              </h1>

              <p className="reveal reveal-2 mt-6 text-[17px] text-brand-100/80 leading-relaxed max-w-lg">
                Mercado, farmácia, combustível, conta de luz. Esse gasto já existe e já gera milhas
                para alguém. O <strong className="text-white">Protocolo Destrave suas Milhas</strong>, de
                Rodrigo Góes, são 5 dias ao vivo para essas milhas passarem a ser suas.
              </p>

              <div className="reveal reveal-3 mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={INSCRICAO}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className="inline-flex items-center gap-2.5 bg-sun-500 hover:bg-sun-400 text-slate-950 font-bold px-7 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-sun-500/25"
                >
                  Garantir minha vaga
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <div className="text-[13px] text-brand-100/70">
                  <div>
                    <strong className="text-white text-[15px]">R$ 47</strong> no cartão ou no Pix
                  </div>
                  <div className="text-brand-100/50">Garantia de 7 dias</div>
                </div>
              </div>

              <p className="reveal reveal-4 mt-6 text-[12.5px] text-brand-100/50">
                Resultados variam conforme dedicação, capital disponível e condições do mercado.
              </p>
            </div>

            {/* card do evento */}
            <div className="reveal reveal-3">
              <div className="rounded-3xl bg-white/[0.06] border border-white/12 backdrop-blur-sm p-7">
                <img
                  src={logoEvento}
                  alt="Logo do evento Protocolo Destrave suas Milhas"
                  className="w-full max-w-[260px] mx-auto"
                  width={430}
                  height={272}
                  loading="eager"
                />
                <div className="mt-6 divide-y divide-white/[0.08] border-t border-white/[0.08]">
                  {[
                    ['FORMATO', '5 dias, online e ao vivo'],
                    ['QUANDO', 'seg 3 a sex 7 de agosto'],
                    ['DEDICAÇÃO', 'cerca de 1 hora por dia'],
                    ['INVESTIMENTO', 'R$ 47 (de R$ 119)'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-center justify-between py-3">
                      <span className="mono text-[10px] tracking-[0.16em] text-brand-100/45">{k}</span>
                      <span className="text-[13.5px] font-semibold text-right">{v}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 mono text-[10px] tracking-[0.1em] text-brand-100/35 uppercase text-center">
                  Condições da turma de agosto de 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-paper">
        <div className="max-w-5xl mx-auto px-4 pb-8">
          {/* ANSWER-FIRST */}
          <div className="-mt-10 reveal reveal-2 relative z-10 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-brand-950/[0.08] px-6 py-5 md:px-8 md:py-6 max-w-3xl">
            <div className="eyebrow text-brand-600 mb-2.5 flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-sun-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />
              </svg>
              Resposta rápida
            </div>
            <p className="text-[17.5px] leading-relaxed text-slate-800 font-medium">
              Segundo a Equipe Fabricante de Milhas, o Protocolo Destrave suas Milhas é um evento online
              de 5 dias ao vivo, conduzido por Rodrigo Góes, que ensina a acumular milhas a partir dos
              gastos que você já tem. Acontece de 3 a 7 de agosto de 2026 por R$ 47, com garantia de 7
              dias, e a expectativa anunciada é sair da semana com cerca de 5.000 milhas.
            </p>
          </div>

          {/* A ISCA / CURIOSIDADE */}
          <section className="mt-16 max-w-3xl">
            <div className="eyebrow text-brand-600">A conta que quase ninguém faz</div>
            <h2 className="display text-[1.8rem] md:text-[2.1rem] text-slate-900 mt-3 leading-tight">
              Você já pagou pela sua próxima viagem. Só não recebeu ainda.
            </h2>
            <div className="article-body mt-5">
              <p>
                Pense no que sai da sua conta todo mês sem você pensar: o mercado, a farmácia, o posto,
                a fatura de internet, a escola das crianças. Esse dinheiro sai de qualquer jeito. A única
                pergunta é se ele sai <strong>gerando milhas para você</strong> ou passando batido.
              </p>
              <p>
                É exatamente aí que mora a diferença entre quem viaja pagando taxa e quem paga tarifa
                cheia. Não é renda maior, e sim um caminho diferente para o mesmo gasto. Esse é o ponto
                de partida do Protocolo Destrave suas Milhas: em 5 encontros ao vivo, Rodrigo Góes mostra
                como reorganizar o que você já gasta para o saldo começar a crescer todo mês.
              </p>
              <p>
                Nossa leitura, para você decidir com clareza: o evento é curto, barato e tem garantia de
                7 dias. O que ele entrega bem é o destravamento inicial, o empurrão de quem sempre achou
                milhas complicado demais. O que ele não entrega, e nem promete, é dinheiro fácil sem
                dedicação.
              </p>
            </div>
          </section>

          {/* A GRADE DOS 5 DIAS */}
          <section className="mt-16">
            <div className="eyebrow text-brand-600">A grade oficial</div>
            <h2 className="display text-[1.8rem] md:text-[2.1rem] text-slate-900 mt-3">
              O que acontece em cada um dos 5 dias
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl">
              A sequência anunciada pelo evento, de segunda a sexta. Cada dia destrava uma etapa e
              prepara a seguinte.
            </p>

            {/* linha do tempo */}
            <ol className="mt-9 relative">
              <span
                className="absolute left-[27px] top-3 bottom-3 w-px border-l-2 border-dashed border-brand-200 hidden sm:block"
                aria-hidden="true"
              />
              {GRADE.map((d) => (
                <li key={d.dia} className="relative flex gap-5 sm:gap-7 pb-5 last:pb-0">
                  {/* marcador */}
                  <div className="shrink-0 relative z-10">
                    {d.icon ? (
                      <img
                        src={d.icon}
                        alt=""
                        aria-hidden="true"
                        className="w-14 h-14 object-contain bg-paper rounded-full p-1"
                        width={56}
                        height={56}
                        loading="lazy"
                      />
                    ) : (
                      <span className="grid place-items-center w-14 h-14 rounded-full bg-brand-700 text-white border-4 border-paper">
                        <PlaneMark className="w-5 h-5" />
                      </span>
                    )}
                  </div>
                  <div className="lift flex-1 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 hover:border-brand-400 hover:shadow-lg hover:shadow-brand-900/[0.06]">
                    <span className="mono text-[10px] tracking-[0.16em] uppercase font-bold text-slate-950 bg-sun-500 rounded-full px-2.5 py-1">
                      {d.dia}
                    </span>
                    <h3 className="display text-[1.2rem] text-slate-900 mt-3">{d.title}</h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-slate-600">{d.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* O QUE ESTÁ INCLUÍDO */}
          <section className="mt-16">
            <div
              className="rounded-3xl bg-night grain text-white p-8 md:p-11 relative overflow-hidden border border-white/10"
              style={{
                backgroundImage: `linear-gradient(rgba(5,13,38,0.86), rgba(5,13,38,0.94)), url(${texturaMapa})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="relative">
                <div className="eyebrow text-sun-500">Tudo que entra por R$ 47</div>
                <h2 className="display text-[1.8rem] md:text-[2.1rem] mt-3">O que está incluído</h2>

                <div className="mt-8 grid sm:grid-cols-2 gap-x-10 gap-y-5">
                  {[
                    ['5 dias de conteúdo ao vivo', 'Prático e objetivo, cerca de uma hora por dia.'],
                    ['Cerca de 5.000 milhas', 'Estimativa anunciada pelo evento para quem aplica o método na semana.'],
                    ['3 materiais de apoio', 'A organização não detalhou o conteúdo até a publicação desta página.'],
                    ['Garantia de 7 dias', 'Devolução integral do valor, sem precisar justificar.'],
                  ].map(([t, d], i) => (
                    <div key={t} className="flex gap-4">
                      <span className="mono text-[11px] font-bold text-sun-500 mt-1 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <div className="font-bold text-[15.5px]">{t}</div>
                        <div className="text-[13.5px] text-brand-100/65 mt-0.5">{d}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href={INSCRICAO}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    className="inline-flex items-center gap-2.5 bg-sun-500 hover:bg-sun-400 text-slate-950 font-bold px-7 py-3.5 rounded-full transition-all hover:shadow-xl hover:shadow-sun-500/20"
                  >
                    Quero participar por R$ 47
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                  <span className="mono text-[10.5px] tracking-[0.1em] text-brand-100/50 uppercase">
                    Valores e condições da turma de agosto de 2026
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* PARA QUEM É / NÃO É */}
          <section className="mt-16">
            <div className="eyebrow text-brand-600">Honestidade antes do clique</div>
            <h2 className="display text-[1.8rem] md:text-[2.1rem] text-slate-900 mt-3">
              Para quem faz sentido, e para quem não faz
            </h2>

            <div className="mt-8 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-emerald-500/30 bg-white p-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="grid place-items-center w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-[15px] leading-none">
                    +
                  </span>
                  <span className="display text-[1.1rem] text-slate-900">Faz sentido para você que</span>
                </div>
                <ul className="space-y-3.5">
                  {[
                    'Gasta todo mês e sente que não aproveita nada disso.',
                    'Quer viajar com a família pagando uma fração do preço.',
                    'Procura uma renda extra que caiba na rotina.',
                    'Tem um cartão básico, ou nem tem cartão, e acha que por isso está fora.',
                    'Já tentou entender de milhas antes e achou complicado demais.',
                  ].map((t, i) => (
                    <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-slate-700">
                      <span className="mono text-[11px] font-bold mt-1 shrink-0 text-emerald-600">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-rose-500/30 bg-white p-6">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="grid place-items-center w-6 h-6 rounded-full bg-rose-600 text-white font-bold text-[15px] leading-none">
                    −
                  </span>
                  <span className="display text-[1.1rem] text-slate-900">Não perca seu dinheiro se você</span>
                </div>
                <ul className="space-y-3.5">
                  {[
                    'Procura ganho passivo ou dinheiro sem esforço, porque milhas não são isso.',
                    'Não consegue reservar cerca de uma hora por dia durante os 5 dias.',
                    'Espera resultado garantido no primeiro mês, sem aplicar nada.',
                    'Quer só o básico para uma viagem pontual, porque nossos guias gratuitos já resolvem.',
                  ].map((t, i) => (
                    <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-slate-700">
                      <span className="mono text-[11px] font-bold mt-1 shrink-0 text-rose-600">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* QUEM CONDUZ + GARANTIA */}
          <section className="mt-16 grid md:grid-cols-[1.3fr_0.7fr] gap-5">
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="eyebrow text-brand-600">Quem conduz</div>
              <h2 className="display text-[1.5rem] text-slate-900 mt-2.5">Rodrigo Góes</h2>
              <div className="article-body mt-3 !text-[15px]">
                <p className="!mb-3">
                  Engenheiro mecânico de formação, Rodrigo Góes ficou conhecido como o "Mago das Milhas"
                  e é hoje um dos maiores nomes do nicho no Brasil. São mais de dez anos dedicados ao
                  assunto e mais de 40 países visitados, além de aparições em veículos como Mais Você,
                  CNN Brasil, Folha de S.Paulo e Estadão.
                </p>
                <p className="!mb-3">
                  Ele também divulga números de volume de milhas e de alunos. Como esses valores mudam
                  conforme o canal em que são publicados, preferimos não repetir cifra específica aqui e
                  tratamos o tema na análise dedicada.
                </p>
                <p className="!mb-0">
                  Ele também assina o curso completo Fábrica de Milhas. Se a sua dúvida é sobre a
                  reputação dele, analisamos os dados públicos em{' '}
                  <a href="#/rodrigo-goes-e-confiavel/">Rodrigo Góes é confiável?</a>.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 flex flex-col items-center text-center">
              <img
                src={seloGarantia}
                alt="Selo de 7 dias de garantia incondicional do evento"
                className="w-28 h-28 object-contain"
                width={112}
                height={112}
                loading="lazy"
              />
              <div className="display text-[1.15rem] text-slate-900 mt-3">Risco baixo de testar</div>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-600">
                A página oficial informa 7 dias de garantia incondicional, com devolução integral e sem
                justificativa. Você entra, assiste e decide depois.
              </p>
            </div>
          </section>

          {/* CTA FINAL */}
          <section className="mt-16">
            <div className="rounded-3xl bg-hero text-white px-7 py-10 md:px-12 md:py-12 text-center relative overflow-hidden">
              <svg className="absolute inset-0 w-full h-full opacity-40" aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 800 300" fill="none">
                <path className="flight-path" d="M-20 240 C 180 160, 420 260, 620 120 S 780 60, 840 80" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
              </svg>
              <div className="relative max-w-2xl mx-auto">
                <PlaneMark className="w-7 h-7 mx-auto" />
                <h2 className="display text-[1.9rem] md:text-[2.3rem] mt-4 leading-tight">
                  Sua próxima viagem começa
                  <br />
                  numa segunda-feira de agosto.
                </h2>
                <p className="mt-4 text-[16px] text-white/85 leading-relaxed">
                  De 3 a 7 de agosto, cerca de uma hora por dia, R$ 47 e garantia de 7 dias. É uma
                  semana para destravar o acúmulo e sair com as primeiras milhas na conta, em torno de
                  5.000 segundo a estimativa do evento.
                </p>
                <a
                  href={INSCRICAO}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  className="mt-8 inline-flex items-center gap-2.5 bg-sun-500 hover:bg-sun-400 text-slate-950 font-bold px-8 py-4 rounded-full transition-all hover:shadow-2xl hover:shadow-sun-500/30 text-[17px]"
                >
                  Fazer minha inscrição agora
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <p className="mt-5 mono text-[10.5px] tracking-[0.08em] text-white/55 uppercase">
                  Inscrições pela página oficial do evento · resultados variam, nenhum ganho é garantido
                </p>
              </div>
            </div>
          </section>

          <div className="max-w-3xl">
            <FaqSection faq={FAQ} />

            {/* leia também */}
            <section className="mt-14" aria-label="Leia também">
              <div className="eyebrow text-brand-600">Antes de decidir</div>
              <h2 className="display text-[1.35rem] text-slate-900 mt-2 mb-5">Leia também</h2>
              <div className="grid sm:grid-cols-2 gap-3.5">
                {[
                  { slug: '/fabrica-de-milhas-vale-a-pena/', anchor: 'Fábrica de Milhas vale a pena? A análise do curso completo' },
                  { slug: '/rodrigo-goes-e-confiavel/', anchor: 'Rodrigo Góes é confiável? O que os dados mostram' },
                  { slug: '/como-acumular-milhas/', anchor: 'Como acumular milhas: o guia gratuito' },
                  { slug: '/calculadora-de-milhas/', anchor: 'Calculadora: quanto valem as suas milhas' },
                ].map((r, i) => (
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

            <AuthorBlock published="2026-07-16" updated="2026-07-16" />
            <div className="pb-8" />
          </div>
        </div>
      </div>
    </>
  )
}

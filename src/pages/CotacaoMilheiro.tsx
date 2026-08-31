import { useMemo } from 'react'
import { Seo, BASE_URL, breadcrumbLd, faqLd } from '@/lib/seo'
import { PageHero, AnswerFirst, FaqSection, AuthorBlock, RelatedLinks } from '@/components/blocks'
import { EventoBanner } from '@/components/EventoBanner'
import {
  TABELA_DO_MES,
  PRAZOS,
  FONTES,
  premioDaEspera,
  mesCurto,
  mesDaApuracao,
} from '@/data/cotacoes'

const brl = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })

const FAQ = [
  {
    q: 'Quanto vale o milheiro hoje?',
    a: `Na apuração da Fabricante de Milhas de ${mesDaApuracao()}, o milheiro de venda ficou entre R$ 11 e R$ 19 no Smiles, entre R$ 16 e R$ 30 no LATAM Pass e entre R$ 13 e R$ 17 no Azul Fidelidade. A faixa é larga de propósito: o valor depende de em qual canal você vende e de quantos dias aceita esperar pelo pagamento.`,
  },
  {
    q: 'Por que o mesmo milheiro tem preços tão diferentes?',
    a: 'Porque os canais vendem produtos diferentes. Marketplace publica a média de quem anunciou e esperou alguém emitir. Plataforma que paga à vista por PIX desconta o risco de carregar o estoque. E dentro de uma mesma plataforma o preço ainda muda conforme o prazo até você receber.',
  },
  {
    q: 'Vale mais a pena esperar para receber?',
    a: `Sim, e dá para medir. Na apuração de ${mesDaApuracao()}, aceitar receber em 30 dias úteis em vez de 1 dia útil pagou ${premioDaEspera('smiles')}% a mais no Smiles, ${premioDaEspera('latam')}% no LATAM Pass e ${premioDaEspera('azul')}% no Azul. Quem tem pressa paga por ela.`,
  },
  {
    q: 'De onde vêm esses valores?',
    a: `São apuração própria da Fabricante de Milhas, coletada manualmente em ${FONTES.join(', ')} na data indicada. Não raspamos dados automaticamente e não republicamos tabela de terceiros: consultamos os canais e registramos o que cada um pagava naquele dia.`,
  },
  {
    q: 'Com que frequência a tabela é atualizada?',
    a: 'Uma vez por mês. Cada edição traz a data da apuração no topo, e valores antigos não são reescritos silenciosamente. Cotação de milhas muda todo dia, então trate a tabela como referência de ordem de grandeza, não como preço travado.',
  },
]

export function CotacaoMilheiro() {
  const jsonLd = useMemo(
    () => [
      {
        '@type': 'Dataset',
        name: 'Cotação do milheiro por programa de fidelidade — Brasil',
        description:
          'Apuração mensal da Fabricante de Milhas sobre quanto os canais de compra pagam por milheiro em cada programa de fidelidade brasileiro, incluindo a variação de preço por prazo de recebimento.',
        url: BASE_URL + '/cotacao-do-milheiro/',
        inLanguage: 'pt-BR',
        license: 'https://creativecommons.org/licenses/by/4.0/',
        isAccessibleForFree: true,
        creator: { '@id': BASE_URL + '/#org' },
        publisher: { '@id': BASE_URL + '/#org' },
        temporalCoverage: TABELA_DO_MES.apuradoEm,
        dateModified: TABELA_DO_MES.apuradoEm,
        spatialCoverage: { '@type': 'Place', name: 'Brasil' },
        measurementTechnique:
          'Coleta manual nas calculadoras e tabelas públicas dos canais de compra de milhas, na data da apuração.',
        variableMeasured: [
          {
            '@type': 'PropertyValue',
            name: 'Preço de venda por milheiro',
            unitText: 'BRL por 1.000 milhas',
          },
          {
            '@type': 'PropertyValue',
            name: 'Prazo de recebimento',
            unitText: 'dias úteis após o uso das milhas',
          },
        ],
      },
      faqLd(FAQ),
      breadcrumbLd([['Cotação do milheiro', '/cotacao-do-milheiro/']]),
    ],
    []
  )

  return (
    <>
      <Seo
        title={`Cotação do Milheiro em ${mesCurto()} | Fabricante de Milhas`}
        description={`Quanto vale o milheiro em ${mesDaApuracao()}: faixa de venda por programa e quanto o prazo de recebimento muda o preço. Apuração própria em três canais.`}
        slug="/cotacao-do-milheiro/"
        jsonLd={jsonLd}
      />

      <PageHero
        trail={[['Cotação do milheiro', '/cotacao-do-milheiro/']]}
        chip="Dado próprio"
        title={`Cotação do milheiro em ${mesDaApuracao()}`}
        meta={
          <>
            Apurado em{' '}
            {new Date(TABELA_DO_MES.apuradoEm + 'T12:00:00').toLocaleDateString('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}{' '}
            · {FONTES.length} canais consultados · atualizamos todo mês
          </>
        }
      >
        <div className="pb-10" />
      </PageHero>

      <div className="bg-paper">
        <div className="max-w-3xl mx-auto px-4 pb-6">
          <div className="-mt-16 reveal reveal-2">
            <AnswerFirst
              text={`Na apuração da Fabricante de Milhas de ${mesDaApuracao()}, o milheiro de venda ficou entre R$ 11 e R$ 19 no Smiles, R$ 16 e R$ 30 no LATAM Pass e R$ 13 e R$ 17 no Azul Fidelidade. A faixa é larga porque o preço depende do canal e, principalmente, de quantos dias você aceita esperar para receber.`}
            />
          </div>

          {/* ---------- tabela principal ---------- */}
          <h2 id="tabela" className="display text-[1.7rem] md:text-[2rem] mt-12 text-slate-900">
            A tabela do mês
          </h2>
          <p className="mt-3 text-[15.5px] leading-relaxed text-slate-700">
            Faixa que os canais de compra pagaram por milheiro em {mesDaApuracao()}. O valor de
            referência é o que usamos como padrão na{' '}
            <a href="/calculadora-de-milhas/" className="u-link text-brand-700 font-medium">
              calculadora de milhas
            </a>
            .
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="fm-table">
                <thead>
                  <tr>
                    <th>Programa</th>
                    <th>Faixa de venda</th>
                    <th>Referência</th>
                  </tr>
                </thead>
                <tbody>
                  {TABELA_DO_MES.programas
                    .filter((p) => p.nome !== 'Outro programa')
                    .map((p) => (
                      <tr key={p.nome}>
                        <td>
                          <strong>{p.nome}</strong>
                          {p.nota && (
                            <span className="block mt-1 text-[12.5px] leading-snug text-slate-500">
                              {p.nota}
                            </span>
                          )}
                        </td>
                        <td className="whitespace-nowrap">
                          {p.venda.min === p.venda.max
                            ? `R$ ${p.venda.min}`
                            : `R$ ${p.venda.min} a R$ ${p.venda.max}`}
                        </td>
                        <td className="whitespace-nowrap">R$ {p.ref}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            <div className="bg-slate-50 border-t border-slate-200 px-5 py-2.5 text-[12.5px] text-slate-500">
              Valores por milheiro (1.000 milhas), em reais. Apuração de {mesCurto()} da Equipe
              Fabricante de Milhas.
            </div>
          </div>

          {/* ---------- o custo da pressa ---------- */}
          <h2 id="custo-da-pressa" className="display text-[1.7rem] md:text-[2rem] mt-14 text-slate-900">
            O custo da pressa
          </h2>
          <p className="mt-3 text-[15.5px] leading-relaxed text-slate-700">
            Este é o dado que quase ninguém publica. Mesma milha, mesmo dia, mesma plataforma: o que
            muda é só quantos dias você espera para receber o dinheiro. Quanto mais rápido você quer
            o PIX, menos a plataforma paga — porque ela assume o risco de carregar o saldo até
            alguém emitir.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="fm-table">
                <thead>
                  <tr>
                    <th>Prazo para receber</th>
                    <th>Smiles</th>
                    <th>LATAM Pass</th>
                    <th>Azul</th>
                  </tr>
                </thead>
                <tbody>
                  {PRAZOS.linhas.map((l) => (
                    <tr key={l.prazo}>
                      <td>{l.prazo}</td>
                      <td className="whitespace-nowrap">{brl(l.smiles)}</td>
                      <td className="whitespace-nowrap">{brl(l.latam)}</td>
                      <td className="whitespace-nowrap">{brl(l.azul)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-slate-50 border-t border-slate-200 px-5 py-2.5 text-[12.5px] text-slate-500">
              Preço por milheiro conforme o prazo de pagamento, apurado em {PRAZOS.fonte} em{' '}
              {mesCurto()}. Venda mínima de {PRAZOS.minimoVenda.toLocaleString('pt-BR')} milhas.
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-brand-50/70 border-l-[3px] border-brand-600 px-5 py-4">
            <p className="text-[15.5px] leading-relaxed text-slate-800">
              <strong>A conta que importa:</strong> esperar 30 dias úteis em vez de 1 rendeu{' '}
              <strong>{premioDaEspera('smiles')}% a mais no Smiles</strong>,{' '}
              {premioDaEspera('latam')}% no LATAM Pass e {premioDaEspera('azul')}% no Azul. Num saldo
              de 100 mil milhas Smiles, a diferença entre receber amanhã e receber em um mês foi de
              cerca de {brl((PRAZOS.linhas[0].smiles - PRAZOS.linhas[4].smiles) * 100)}.
            </p>
          </div>

          <EventoBanner src="cotacao" />

          {/* ---------- método ---------- */}
          <h2 id="metodo" className="display text-[1.7rem] md:text-[2rem] mt-14 text-slate-900">
            Como apuramos
          </h2>
          <p className="mt-3 text-[15.5px] leading-relaxed text-slate-700">
            Não existe API pública de cotação de milheiro no Brasil. Dá para raspar marketplace, mas
            aí o número deixa de ser nosso: vira o deles com a nossa marca, e o erro deles vira
            nosso. Então a coleta é manual, um canal de cada vez, na data que está no topo desta
            página.
          </p>
          <ul className="mt-4 space-y-2 text-[15.5px] leading-relaxed text-slate-700">
            <li>
              <strong>MaxMilhas</strong> — preço médio de marketplace publicado na página de venda.
              Você anuncia e espera alguém emitir com as suas milhas.
            </li>
            <li>
              <strong>BankMilhas</strong> — valor à vista por PIX, tabelado por faixa de quantidade.
            </li>
            <li>
              <strong>Compro Milhas</strong> — calculadora pública escalonada por prazo de
              recebimento, que é de onde sai a tabela do custo da pressa.
            </li>
          </ul>
          <p className="mt-4 text-[15.5px] leading-relaxed text-slate-700">
            Consultamos também a HotMilhas, mas a cotação dela só aparece depois de entregar e-mail
            e WhatsApp num formulário de captação. Ficou de fora: não vale virar lead por um número
            que as outras três já dão. Nossos critérios de apuração estão na{' '}
            <a href="/metodologia/" className="u-link text-brand-700 font-medium">
              metodologia
            </a>
            .
          </p>

          <div className="mt-6 rounded-2xl bg-amber-50/80 border-l-[3px] border-sun-500 px-5 py-4">
            <p className="text-[15.5px] leading-relaxed text-slate-800">
              <strong>Trate como ordem de grandeza, não como preço travado.</strong> Cotação de
              milhas muda todo dia e varia com saldo, programa e demanda. Antes de fechar qualquer
              venda, cote no seu canal e compare com a faixa acima.
            </p>
          </div>

          <FaqSection faq={FAQ} />
          <RelatedLinks
            related={[
              { slug: '/vender-milhas-aereas/', anchor: 'Como vender milhas com segurança' },
              { slug: '/calculadora-de-milhas/', anchor: 'Calcular quanto vale o seu saldo' },
              { slug: '/como-ganhar-dinheiro-com-milhas/', anchor: 'Como ganhar dinheiro com milhas' },
              { slug: '/glossario-de-milhas/', anchor: 'O que é milheiro e outros termos' },
            ]}
          />
          <AuthorBlock published="2026-08-30" updated={TABELA_DO_MES.apuradoEm} />
        </div>
      </div>
    </>
  )
}

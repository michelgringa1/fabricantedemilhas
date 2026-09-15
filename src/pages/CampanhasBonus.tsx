import { useMemo } from 'react'
import { Seo, breadcrumbLd, BASE_URL } from '@/lib/seo'
import { PageHero, FaqSection, AuthorBlock, RelatedLinks } from '@/components/blocks'
import { EventoBanner } from '@/components/EventoBanner'
import {
  CAMPANHAS,
  totalCampanhas,
  ultimaObservacao,
  intervaloMedioDias,
  janelaMediaHoras,
  bonusMaximoObservado,
} from '@/data/campanhas'

const FAQ = [
  {
    q: 'De quanto em quanto tempo sai uma campanha de bônus de transferência?',
    a: `Não existe calendário público, e quem promete um número está chutando. Por isso a Equipe Fabricante de Milhas passou a registrar cada campanha que observa, com data, percentual e duração da janela. Até agora são ${totalCampanhas()} observação(ões), o que ainda não dá série para afirmar frequência: quando houver, o intervalo médio aparece nesta página, calculado a partir dos registros.`,
  },
  {
    q: 'Quanto tempo fica aberta uma campanha de bônus?',
    a: `Pouco, e é esse o padrão que já dá para afirmar. A campanha de 14 de setembro de 2026 ficou disponível por 38 horas. Quem descobre a promoção no terceiro dia normalmente já perdeu. Vale mais acompanhar a página de ofertas do programa do que esperar o e-mail.`,
  },
  {
    q: 'Preciso me cadastrar antes de transferir para ganhar o bônus?',
    a: 'Na maioria das campanhas, sim, e é o erro que mais custa caro. Transferir sem fazer a adesão à promoção credita os pontos sem o bônus, e em geral não há como reverter. Leia o regulamento antes de clicar em transferir.',
  },
  {
    q: 'Como vocês registram essas campanhas?',
    a: 'Consultando as páginas públicas de ofertas dos programas, sem login e sem raspagem automática. Só entra o que foi visto na página oficial, com a data em que foi visto. Nada é estimado nem preenchido por inferência.',
  },
]

export function CampanhasBonus() {
  const intervalo = intervaloMedioDias()

  const jsonLd = useMemo(
    () => [
      {
        '@type': 'Dataset',
        name: 'Campanhas de bônus de transferência de pontos — Brasil',
        description:
          'Registro próprio da Fabricante de Milhas com cada campanha de bônus de transferência observada nas páginas oficiais dos programas de pontos brasileiros: data, par de programas, percentual máximo e duração da janela de adesão.',
        url: BASE_URL + '/campanhas-de-bonus/',
        inLanguage: 'pt-BR',
        license: 'https://creativecommons.org/licenses/by/4.0/',
        isAccessibleForFree: true,
        creator: { '@id': BASE_URL + '/#org' },
        publisher: { '@id': BASE_URL + '/#org' },
        spatialCoverage: { '@type': 'Place', name: 'Brasil' },
        temporalCoverage: CAMPANHAS.map((c) => c.observadoEm).sort()[0] + '/..',
        measurementTechnique:
          'Observação manual das páginas públicas de ofertas dos programas de pontos, sem login. Registra-se apenas o que está publicado na página oficial, na data em que foi visto.',
        variableMeasured: [
          { '@type': 'PropertyValue', name: 'Percentual máximo de bônus', unitText: '%' },
          { '@type': 'PropertyValue', name: 'Duração da janela de adesão', unitText: 'horas' },
        ],
        distribution: [
          {
            '@type': 'DataDownload',
            encodingFormat: 'text/csv',
            contentUrl: BASE_URL + '/dados/campanhas-de-bonus.csv',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      breadcrumbLd([['Campanhas de bônus', '/campanhas-de-bonus/']]),
    ],
    []
  )

  return (
    <>
      <Seo
        title="Campanhas de Bônus de Transferência: o Registro [2026]"
        description="Registro próprio de cada campanha de bônus de transferência observada: data, programas, percentual e quanto tempo a janela ficou aberta. Dado, não estimativa."
        slug="/campanhas-de-bonus/"
        jsonLd={jsonLd}
      />

      <PageHero
        trail={[['Campanhas de bônus', '/campanhas-de-bonus/']]}
        chip="Dado próprio"
        title="Campanhas de bônus de transferência"
        meta={`${totalCampanhas()} campanha(s) registrada(s) · última observação em ${ultimaObservacao()}`}
      >
        <div className="pb-4 md:pb-10" />
      </PageHero>

      <div className="bg-paper">
        <div className="max-w-5xl mx-auto px-4 pb-8">
          <div className="lg:-mt-16 reveal reveal-2 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-brand-950/[0.08] px-6 py-5 md:px-8">
            <p className="text-[16.5px] leading-relaxed text-slate-800 font-medium">
              Ninguém no Brasil publica a série de campanhas de bônus com data, percentual e
              duração. A Equipe Fabricante de Milhas passou a registrar cada uma que observa, para
              poder responder &ldquo;de quanto em quanto tempo sai uma promoção?&rdquo; com dado em
              vez de palpite. Enquanto a série for curta, esta página diz exatamente o que ela
              permite e o que ainda não permite afirmar.
            </p>
          </div>

          {/* ---------- o que a série já mostra ---------- */}
          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white border border-slate-200 px-5 py-4">
              <div className="eyebrow text-slate-400">Bônus máximo observado</div>
              <div className="display text-[1.6rem] mt-1 text-slate-900">
                {bonusMaximoObservado()}%
              </div>
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 px-5 py-4">
              <div className="eyebrow text-slate-400">Janela média de adesão</div>
              <div className="display text-[1.6rem] mt-1 text-slate-900">
                {janelaMediaHoras() !== null ? `${janelaMediaHoras()} h` : '—'}
              </div>
            </div>
            <div className="rounded-2xl bg-white border border-slate-200 px-5 py-4">
              <div className="eyebrow text-slate-400">Intervalo médio</div>
              <div className="display text-[1.6rem] mt-1 text-slate-900">
                {intervalo !== null ? `${intervalo} dias` : 'sem série'}
              </div>
            </div>
          </div>

          {intervalo === null && (
            <div className="mt-4 rounded-2xl bg-amber-50/80 border-l-[3px] border-sun-500 px-5 py-4">
              <p className="text-[15.5px] leading-relaxed text-slate-800">
                <strong>Por que &ldquo;sem série&rdquo; e não um número.</strong> Com{' '}
                {totalCampanhas()} observação(ões) não existe intervalo para calcular: intervalo
                exige pelo menos duas datas. Preferimos deixar o campo vazio a preencher com uma
                estimativa — foi justamente um chute de &ldquo;30 a 60 dias&rdquo;, que este
                registro veio substituir, que nos fez começar a anotar.
              </p>
            </div>
          )}

          {/* ---------- a série ---------- */}
          <h2 id="registro" className="display text-[1.7rem] md:text-[2rem] mt-14 text-slate-900">
            O registro, campanha a campanha
          </h2>
          <div className="fm-table-wrap mt-4">
            <table className="fm-table">
              <caption className="sr-only">
                Campanhas de bônus de transferência observadas pela Fabricante de Milhas
              </caption>
              <thead>
                <tr>
                  <th scope="col">Observado em</th>
                  <th scope="col">De → para</th>
                  <th scope="col">Bônus máximo</th>
                  <th scope="col">Janela</th>
                  <th scope="col">Detalhe</th>
                </tr>
              </thead>
              <tbody>
                {[...CAMPANHAS]
                  .sort((a, b) => (a.observadoEm < b.observadoEm ? 1 : -1))
                  .map((c) => (
                    <tr key={c.observadoEm + c.origem + c.destino}>
                      <th scope="row">
                        {new Date(c.observadoEm + 'T12:00:00').toLocaleDateString('pt-BR')}
                      </th>
                      <td>
                        {c.origem} → {c.destino}
                      </td>
                      <td>
                        <strong>{c.bonusMax}%</strong>
                      </td>
                      <td>{c.janelaHoras !== null ? `${c.janelaHoras} h` : 'não anunciada'}</td>
                      <td className="text-slate-600">{c.nota || '—'}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13.5px] leading-relaxed text-slate-500">
            Apurado nas páginas oficiais de ofertas dos programas, sem login e sem raspagem
            automática. Uso livre com atribuição (CC BY 4.0) ·{' '}
            <a href="/dados/campanhas-de-bonus.csv" className="u-link text-brand-700 font-medium">
              baixar em CSV
            </a>
            .
          </p>

          <EventoBanner src="campanhas" />

          {/* ---------- leitura prática ---------- */}
          <h2 id="como-usar" className="display text-[1.7rem] md:text-[2rem] mt-14 text-slate-900">
            O que fazer com isso
          </h2>
          <p className="mt-3 text-[15.5px] leading-relaxed text-slate-700">
            A conclusão que a série já sustenta não é sobre frequência, é sobre{' '}
            <strong>pressa</strong>. A campanha que registramos ficou aberta por 38 horas e exigia
            adesão à promoção <em>antes</em> da transferência. Isso muda a rotina de quem acumula:
            não adianta esperar o e-mail do programa, porque ele costuma chegar com a janela já
            correndo.
          </p>
          <ul className="mt-4 space-y-2 text-[15.5px] leading-relaxed text-slate-700">
            <li>
              Deixe o saldo <strong>pronto para transferir</strong> antes da campanha existir: conta
              verificada, dados batendo entre os dois programas.
            </li>
            <li>
              Confira a página de ofertas do seu programa algumas vezes por semana. É pública e leva
              um minuto.
            </li>
            <li>
              <strong>Adira à promoção antes de transferir.</strong> Transferir primeiro credita sem
              o bônus, e em geral não há reversão.
            </li>
            <li>
              Faça a conta antes: bônus alto num programa onde você não vai emitir nem vender não é
              oportunidade, é saldo parado. Use a{' '}
              <a href="/cotacao-do-milheiro/" className="u-link text-brand-700 font-medium">
                cotação do milheiro
              </a>{' '}
              do mês.
            </li>
          </ul>

          <FaqSection faq={FAQ} />
          <RelatedLinks
            related={[
              {
                slug: '/como-acumular-milhas/',
                anchor: 'Como acumular milhas com transferência bonificada',
              },
              { slug: '/cotacao-do-milheiro/', anchor: 'Cotação do milheiro do mês' },
              { slug: '/programas-de-milhas/', anchor: 'Comparativo dos programas de milhas' },
            ]}
          />
          <AuthorBlock published="2026-09-15" updated="2026-09-15" />
        </div>
      </div>
    </>
  )
}

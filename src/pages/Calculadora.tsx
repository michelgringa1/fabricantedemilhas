import { useMemo, useState } from 'react'
import { Seo, BASE_URL, breadcrumbLd, faqLd } from '@/lib/seo'
import { PageHero, FaqSection, AuthorBlock, ChecksNote } from '@/components/blocks'
import { PlaneMark } from '@/components/layout'
import { TABELA_DO_MES, mesCurto, mesDaApuracao } from '@/data/cotacoes'

/* Cotações vêm da tabela do mês (src/data/cotacoes.ts), fonte única do site.
   O usuário pode editar cada valor na tela; estes são só os padrões. */
const PROGRAMAS = TABELA_DO_MES.programas

const FAQ = [
  {
    q: 'Como calcular quanto valem minhas milhas?',
    a: 'Multiplique o saldo pela cotação do milheiro e divida por mil: 50.000 milhas a R$ 20/milheiro valem cerca de R$ 1.000. A cotação varia por programa, prazo de recebimento e demanda. Use a calculadora com a cotação do dia para um retrato fiel.',
  },
  {
    q: 'Quanto vale o milheiro hoje?',
    a: 'Depende do programa e do momento: cada milheiro tem uma faixa própria que oscila diariamente. Os valores pré-preenchidos na calculadora são referência editorial da Fabricante de Milhas. Edite pelo valor atual do seu canal de venda antes de decidir.',
  },
  {
    q: 'É melhor usar as milhas ou vender?',
    a: 'Faça a conta do milheiro embutido: preço da passagem em dinheiro, menos taxas, dividido pelas milhas exigidas. Se o resultado ficar acima da cotação de venda, emitir vale mais; se ficar abaixo, vale mais vender as milhas e comprar a passagem em dinheiro.',
  },
  {
    q: 'Quantas milhas meu cartão gera por mês?',
    a: 'Converta o gasto mensal para dólar, multiplique pelos pontos por dólar do cartão e aplique o bônus médio de transferência. Um gasto de R$ 5.000 num cartão de 2 pontos/dólar, com bônus de 80%, gera em torno de 3 mil milhas ao mês. A calculadora faz essa conta com os seus números.',
  },
  {
    q: 'Os resultados da calculadora são exatos?',
    a: 'São estimativas para decisão, não cotação de mercado em tempo real. Regras de programas, bônus e cotações mudam com frequência; confirme o valor no canal de venda ou no programa antes de fechar qualquer operação.',
  },
]

const fmtBRL = (v: number) =>
  v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 })
const fmtNum = (v: number) => Math.round(v).toLocaleString('pt-BR')

/* ---------- inputs ---------- */

function Field({
  label,
  suffix,
  value,
  onChange,
  step = 1,
  min = 0,
}: {
  label: string
  suffix?: string
  value: number
  onChange: (v: number) => void
  step?: number
  min?: number
}) {
  return (
    <label className="block">
      <span className="mono text-[10.5px] tracking-[0.16em] uppercase text-slate-500">{label}</span>
      <span className="mt-1.5 flex items-center rounded-xl border border-slate-300 bg-white focus-within:border-brand-500 focus-within:ring-2 focus-within:ring-brand-100 transition-all overflow-hidden">
        <input
          type="number"
          inputMode="decimal"
          min={min}
          step={step}
          value={Number.isFinite(value) ? value : ''}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          className="w-full px-3.5 py-2.5 text-[15px] font-semibold text-slate-900 outline-none bg-transparent tabular-nums"
        />
        {suffix && <span className="mono text-[11px] text-slate-400 pr-3.5 shrink-0">{suffix}</span>}
      </span>
    </label>
  )
}

function ResultPanel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-night grain text-white p-6 md:p-7 border border-white/10 h-full">
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <span className="mono text-[11px] tracking-[0.2em] text-sun-500 uppercase">{title}</span>
        <PlaneMark className="w-4 h-4" />
      </div>
      {children}
    </div>
  )
}

/* ---------- modo 1: valor do saldo ---------- */

interface Linha {
  programa: string
  saldo: number
  cotacao: number
}

function ModoSaldo() {
  const [linhas, setLinhas] = useState<Linha[]>([
    { programa: PROGRAMAS[0].nome, saldo: 50000, cotacao: PROGRAMAS[0].ref },
  ])

  const set = (i: number, patch: Partial<Linha>) =>
    setLinhas((ls) => ls.map((l, j) => (j === i ? { ...l, ...patch } : l)))

  const total = linhas.reduce((acc, l) => acc + (l.saldo / 1000) * l.cotacao, 0)

  return (
    <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-5">
      <div className="space-y-4">
        {linhas.map((l, i) => (
          <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="mono text-[11px] font-bold tracking-[0.14em] text-brand-400">
                PROGRAMA {String(i + 1).padStart(2, '0')}
              </span>
              {linhas.length > 1 && (
                <button
                  onClick={() => setLinhas((ls) => ls.filter((_, j) => j !== i))}
                  className="text-[12px] text-slate-400 hover:text-rose-600 font-medium transition-colors"
                >
                  Remover
                </button>
              )}
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <label className="block">
                <span className="mono text-[10.5px] tracking-[0.16em] uppercase text-slate-500">Programa</span>
                <select
                  value={l.programa}
                  onChange={(e) => {
                    const p = PROGRAMAS.find((p) => p.nome === e.target.value)
                    set(i, { programa: e.target.value, cotacao: p ? p.ref : l.cotacao })
                  }}
                  className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-[15px] font-semibold text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                >
                  {PROGRAMAS.map((p) => (
                    <option key={p.nome}>{p.nome}</option>
                  ))}
                </select>
              </label>
              <Field label="Saldo" suffix="milhas/pts" value={l.saldo} onChange={(v) => set(i, { saldo: v })} step={1000} />
              <Field label="Cotação do milheiro" suffix="R$/mil" value={l.cotacao} onChange={(v) => set(i, { cotacao: v })} step={0.5} />
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-brand-50 px-4 py-2.5">
              <span className="text-[13px] text-slate-600">Valor estimado deste saldo</span>
              <span className="display text-[17px] text-brand-700 tabular-nums">{fmtBRL((l.saldo / 1000) * l.cotacao)}</span>
            </div>
          </div>
        ))}
        <button
          onClick={() => setLinhas((ls) => [...ls, { programa: 'LATAM Pass', saldo: 0, cotacao: 22 }])}
          className="w-full rounded-2xl border-2 border-dashed border-slate-300 hover:border-brand-400 hover:bg-brand-50/50 py-3.5 text-[14px] font-bold text-slate-500 hover:text-brand-700 transition-all"
        >
          + Adicionar outro programa
        </button>
        <p className="text-[12px] text-slate-400">
          Cotações pré-preenchidas são a nossa referência de {mesCurto()}
          {!TABELA_DO_MES.validado && (
            <>
              {' '}
              <mark className="verificar">[VERIFICAR: apuração pendente]</mark>
            </>
          )}
          . Edite pelo valor atual do seu canal.
        </p>
      </div>
      <ResultPanel title="Painel · Seu saldo">
        <div className="py-6">
          <div className="mono text-[10.5px] tracking-[0.18em] text-brand-100/50 uppercase">Valor total estimado</div>
          <div className="display text-[2.6rem] leading-tight mt-1 tabular-nums">{fmtBRL(total)}</div>
          <div className="mt-1 text-[13px] text-brand-100/60">
            {fmtNum(linhas.reduce((a, l) => a + l.saldo, 0))} milhas/pontos em {linhas.length}{' '}
            {linhas.length === 1 ? 'programa' : 'programas'}
          </div>
        </div>
        <div className="divide-y divide-white/[0.07] border-t border-white/10">
          {linhas.map((l, i) => (
            <div key={i} className="flex items-center justify-between py-3">
              <span className="mono text-[12px] tracking-[0.08em] text-brand-100/70">{l.programa.toUpperCase()}</span>
              <span className="mono text-[13px] tabular-nums">{fmtBRL((l.saldo / 1000) * l.cotacao)}</span>
            </div>
          ))}
        </div>
        <p className="pt-4 mono text-[10px] tracking-[0.1em] text-brand-100/40 uppercase leading-relaxed">
          Estimativa · cotações oscilam diariamente · não é oferta de compra
        </p>
      </ResultPanel>
    </div>
  )
}

/* ---------- modo 2: usar ou vender ---------- */

function ModoUsarVender() {
  const [preco, setPreco] = useState(2400)
  const [taxas, setTaxas] = useState(120)
  const [milhas, setMilhas] = useState(90000)
  const [cotacao, setCotacao] = useState(16)

  const embutido = milhas > 0 ? ((preco - taxas) / milhas) * 1000 : 0
  const emitirValeMais = embutido > cotacao
  const valorVenda = (milhas / 1000) * cotacao
  const economia = preco - taxas

  return (
    <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-5">
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="mono text-[11px] font-bold tracking-[0.14em] text-brand-400 mb-4">A EMISSÃO QUE VOCÊ ESTÁ AVALIANDO</div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Preço da passagem em dinheiro" suffix="R$" value={preco} onChange={setPreco} step={50} />
          <Field label="Taxas pagas em dinheiro" suffix="R$" value={taxas} onChange={setTaxas} step={10} />
          <Field label="Milhas exigidas na emissão" suffix="milhas" value={milhas} onChange={setMilhas} step={1000} />
          <Field label="Cotação de venda do milheiro" suffix="R$/mil" value={cotacao} onChange={setCotacao} step={0.5} />
        </div>
        <div className="mt-5 rounded-xl bg-brand-50 px-4 py-3 text-[13.5px] text-slate-600 leading-relaxed">
          A conta: <strong className="text-slate-800">(preço − taxas) ÷ milhas × 1.000</strong> = valor do milheiro
          embutido na emissão. Acima da cotação de venda, emitir vence; abaixo, vender vence.
        </div>
      </div>
      <ResultPanel title="Painel · Veredito">
        <div className="py-6">
          <div className="mono text-[10.5px] tracking-[0.18em] text-brand-100/50 uppercase">Milheiro embutido</div>
          <div className="display text-[2.6rem] leading-tight mt-1 tabular-nums">{fmtBRL(embutido)}</div>
          <div
            className={`mt-3 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-bold ${
              emitirValeMais ? 'bg-emerald-400/15 text-emerald-300 border border-emerald-400/30' : 'bg-sun-500/15 text-sun-400 border border-sun-500/40'
            }`}
          >
            {emitirValeMais ? '✓ Emitir vale mais' : '⇄ Vender vale mais'}
          </div>
        </div>
        <div className="divide-y divide-white/[0.07] border-t border-white/10 text-[13px]">
          <div className="flex items-center justify-between py-3">
            <span className="text-brand-100/70">Economia se emitir</span>
            <span className="mono tabular-nums">{fmtBRL(economia)}</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-brand-100/70">Receita se vender as milhas</span>
            <span className="mono tabular-nums">{fmtBRL(valorVenda)}</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-brand-100/70">Diferença a favor de {emitirValeMais ? 'emitir' : 'vender'}</span>
            <span className="mono tabular-nums text-sun-400">{fmtBRL(Math.abs(economia - valorVenda))}</span>
          </div>
        </div>
        <p className="pt-4 mono text-[10px] tracking-[0.1em] text-brand-100/40 uppercase leading-relaxed">
          Compare sempre no mesmo dia · cotações e tarifas mudam rápido
        </p>
      </ResultPanel>
    </div>
  )
}

/* ---------- modo 3: produção no cartão ---------- */

function ModoCartao() {
  const [gasto, setGasto] = useState(5000)
  const [ppd, setPpd] = useState(2)
  const [dolar, setDolar] = useState(5.5)
  const [bonus, setBonus] = useState(80)
  const [cotacao, setCotacao] = useState(16)

  const pontosMes = dolar > 0 ? (gasto / dolar) * ppd : 0
  const milhasMes = pontosMes * (1 + bonus / 100)
  const milhasAno = milhasMes * 12
  const valorAno = (milhasAno / 1000) * cotacao

  return (
    <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-5">
      <div className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="mono text-[11px] font-bold tracking-[0.14em] text-brand-400 mb-4">SEU CARTÃO E SEU GASTO</div>
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Gasto mensal no cartão" suffix="R$" value={gasto} onChange={setGasto} step={100} />
          <Field label="Pontos por dólar do cartão" suffix="pts/US$" value={ppd} onChange={setPpd} step={0.1} />
          <Field label="Cotação do dólar" suffix="R$" value={dolar} onChange={setDolar} step={0.05} />
          <Field label="Bônus médio de transferência" suffix="%" value={bonus} onChange={setBonus} step={5} />
          <Field label="Cotação do milheiro (p/ valor)" suffix="R$/mil" value={cotacao} onChange={setCotacao} step={0.5} />
        </div>
        <div className="mt-5 rounded-xl bg-brand-50 px-4 py-3 text-[13.5px] text-slate-600 leading-relaxed">
          Fluxo da conta: gasto ÷ dólar × pontos/dólar = pontos no banco → transferidos com bônus viram milhas.
          Transferir <strong className="text-slate-800">sem bônus</strong> é onde a maioria perde. Veja o{' '}
          <a href="/como-acumular-milhas/" className="text-brand-600 underline underline-offset-2">guia de acúmulo</a>.
        </div>
      </div>
      <ResultPanel title="Painel · Produção">
        <div className="py-6">
          <div className="mono text-[10.5px] tracking-[0.18em] text-brand-100/50 uppercase">Milhas por ano</div>
          <div className="display text-[2.6rem] leading-tight mt-1 tabular-nums">{fmtNum(milhasAno)}</div>
          <div className="mt-1 text-[13px] text-brand-100/60">≈ {fmtNum(milhasMes)} milhas/mês com bônus de {bonus}%</div>
        </div>
        <div className="divide-y divide-white/[0.07] border-t border-white/10 text-[13px]">
          <div className="flex items-center justify-between py-3">
            <span className="text-brand-100/70">Pontos gerados/mês (sem bônus)</span>
            <span className="mono tabular-nums">{fmtNum(pontosMes)}</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <span className="text-brand-100/70">Valor estimado do saldo anual</span>
            <span className="mono tabular-nums text-sun-400">{fmtBRL(valorAno)}</span>
          </div>
        </div>
        <p className="pt-4 mono text-[10px] tracking-[0.1em] text-brand-100/40 uppercase leading-relaxed">
          Estimativa · só pontue o que pode pagar integral: juros comem qualquer margem
        </p>
      </ResultPanel>
    </div>
  )
}

/* ---------- página ---------- */

const MODOS = [
  { id: 'saldo', label: 'Valor do saldo', desc: 'Quanto valem suas milhas hoje' },
  { id: 'usar-vender', label: 'Usar ou vender', desc: 'O veredito de uma emissão' },
  { id: 'cartao', label: 'Produção no cartão', desc: 'Milhas que seu gasto gera' },
] as const

export function Calculadora() {
  const [modo, setModo] = useState<(typeof MODOS)[number]['id']>('saldo')

  const jsonLd = useMemo(
    () => [
      {
        '@type': 'WebApplication',
        name: 'Calculadora de Milhas: Fabricante de Milhas',
        url: BASE_URL + '/calculadora-de-milhas/',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Web',
        description:
          'Calculadora gratuita de milhas aéreas: valor do saldo por programa, comparação entre usar ou vender milhas e produção mensal de milhas no cartão.',
        offers: { '@type': 'Offer', price: 0, priceCurrency: 'BRL' },
        publisher: { '@id': BASE_URL + '/#org' },
      },
      faqLd(FAQ),
      breadcrumbLd([['Calculadora de milhas', '/calculadora-de-milhas/']]),
    ],
    []
  )

  return (
    <>
      <Seo
        title="Calculadora de Milhas: Quanto Valem Seus Pontos?"
        description="Calculadora gratuita: descubra quanto vale seu saldo de milhas por programa, se compensa usar ou vender, e quantas milhas seu cartão gera por mês."
        slug="/calculadora-de-milhas/"
        jsonLd={jsonLd}
      />
      <PageHero
        trail={[['Calculadora de milhas', '/calculadora-de-milhas/']]}
        chip="Ferramenta"
        title="Calculadora de milhas"
        meta="3 modos · valores editáveis · resultado na hora"
      >
        <div className="pb-10" />
      </PageHero>

      <div className="bg-paper">
        <div className="max-w-5xl mx-auto px-4 pb-8">
          <div className="-mt-16 reveal reveal-2 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-brand-950/[0.08] px-6 py-5 md:px-8">
            <p className="text-[16.5px] leading-relaxed text-slate-800 font-medium">
              A calculadora da Fabricante de Milhas responde as três contas que todo milheiro faz: quanto vale o
              seu saldo hoje, se compensa usar ou vender numa emissão específica, e quantas milhas o seu cartão
              produz por mês. Todos os valores são editáveis. Use a cotação do dia.
            </p>
          </div>

          {/* tabs */}
          <div className="mt-8 grid sm:grid-cols-3 gap-3" role="tablist" aria-label="Modos da calculadora">
            {MODOS.map((m) => (
              <button
                key={m.id}
                role="tab"
                aria-selected={modo === m.id}
                onClick={() => setModo(m.id)}
                className={`lift rounded-2xl px-5 py-4 text-left border transition-all ${
                  modo === m.id
                    ? 'bg-night text-white border-transparent shadow-lg'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-brand-400'
                }`}
              >
                <span className={`display block text-[15.5px] ${modo === m.id ? 'text-sun-400' : 'text-slate-900'}`}>{m.label}</span>
                <span className={`block text-[12.5px] mt-0.5 ${modo === m.id ? 'text-brand-100/70' : 'text-slate-500'}`}>{m.desc}</span>
              </button>
            ))}
          </div>

          <div className="mt-6">
            {modo === 'saldo' && <ModoSaldo />}
            {modo === 'usar-vender' && <ModoUsarVender />}
            {modo === 'cartao' && <ModoCartao />}
          </div>

          {/* conteúdo de apoio */}
          <div className="article-body mt-14 max-w-3xl">
            <h2 id="como-funciona">Como esta calculadora chega nos números</h2>
            <p>
              Tudo gira em torno do <a href="/glossario-de-milhas/#milheiro">milheiro</a> (bloco de mil milhas).
              O valor do saldo é <strong>saldo ÷ 1.000 × cotação</strong>; o veredito usar-ou-vender compara o{' '}
              <strong>milheiro embutido na emissão</strong> com a cotação de venda; e a produção no cartão converte
              seu gasto mensal em pontos e aplica o <a href="/glossario-de-milhas/#transferencia-bonificada">bônus de transferência</a>.
              As fórmulas são as mesmas que usamos nos guias de <a href="/vender-milhas-aereas/">venda</a> e de{' '}
              <a href="/como-viajar-de-graca-com-milhas/">emissão</a>.
            </p>
            <p>
              As cotações pré-preenchidas vêm da nossa tabela de referência, apurada em{' '}
              <strong>{mesDaApuracao()}</strong>
              {!TABELA_DO_MES.validado && (
                <>
                  {' '}
                  <mark className="verificar">[VERIFICAR: apuração pendente]</mark>
                </>
              )}
              . O mercado muda diariamente e a cotação varia por programa, por prazo de recebimento e por
              canal, então edite os campos com o valor real do seu antes de decidir qualquer operação.
            </p>
          </div>

          <div className="max-w-3xl">
            <FaqSection faq={FAQ} />

            {/* menção leve ao Fábrica de Milhas */}
            <div className="mt-12 rounded-2xl border border-slate-200 bg-white px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
              <p className="text-[14.5px] text-slate-600 leading-relaxed">
                <strong className="text-slate-800">Gostou das contas?</strong> Transformar esses números em rotina é
                exatamente o que o curso Fábrica de Milhas, do Rodrigo Góes, se propõe a ensinar.
              </p>
              <a
                href="/fabrica-de-milhas-vale-a-pena/"
                className="shrink-0 inline-flex items-center gap-2 text-[14px] font-bold text-brand-700 hover:text-brand-800 u-link"
              >
                Ler nossa análise do curso
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>

            <AuthorBlock published="2026-07-12" updated="2026-07-12" />
            <ChecksNote
              checks={[
                'Cotações de referência dos programas (Smiles, LATAM Pass, Azul Fidelidade, Livelo, Esfera): sincronizar com a tabela mensal',
                'Cotação padrão do dólar no modo cartão (R$ 5,50)',
                'Faixa padrão de bônus de transferência (80%)',
              ]}
            />
          </div>
        </div>
      </div>
    </>
  )
}

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  A TABELA DO MÊS                                                     ║
 * ║  Fonte única da cotação do milheiro no site inteiro.                 ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 *
 * ESTE É O ÚNICO ARQUIVO A EDITAR para atualizar a cotação. A calculadora,
 * o painel da home e as tabelas dos guias leem tudo daqui. Antes, o número
 * estava espalhado em 6 lugares e "atualizar" significava caçar valor no
 * código, o que garantia que uma hora ficaria inconsistente.
 *
 * ─── COMO ATUALIZAR (uma vez por mês, ~5 minutos) ──────────────────────
 *  1. Levante a cotação nos canais de venda (ver `FONTES` abaixo).
 *  2. Edite os números aqui e a data em `apuradoEm`.
 *  3. Vire `validado` para true quando os dados forem seus, apurados de fato.
 *  4. Commit + push. O deploy é automático e o site inteiro sincroniza.
 *
 * ─── POR QUE NÃO É AUTOMÁTICO ──────────────────────────────────────────
 * Não existe API pública de cotação de milheiro no Brasil. Dá para raspar
 * marketplace, mas aí o número não é nosso: é o deles com a nossa marca, e
 * o erro deles vira nosso. O valor editorial desta tabela está justamente em
 * ser uma apuração própria. Automatizar a coleta mataria o diferencial.
 * O que É automático: o lembrete mensal (workflow lembrete-cotacao.yml) e a
 * propagação do número por todo o site assim que você edita este arquivo.
 */

export interface Cotacao {
  nome: string
  /** Faixa de VENDA: quanto pagam a você por milheiro. */
  venda: { min: number; max: number }
  /** Referência usada como padrão na calculadora (meio da faixa de venda). */
  ref: number
  nota?: string
}

/** Canais consultados na apuração. Nenhum deles tem API: a coleta é manual. */
export const FONTES = [
  'MaxMilhas',
  'HotMilhas',
  'BankMilhas',
  'Cotação em canais de emissores diretos',
] as const

/**
 * ⚠️ `validado: false` faz o site inteiro exibir o selo [VERIFICAR] sozinho.
 * Vire para `true` só quando os números forem apuração real da equipe. Assim
 * o selo some de todas as páginas de uma vez, e nunca fica um esquecido.
 */
export const TABELA_DO_MES = {
  validado: false,
  apuradoEm: '2026-07-17',
  programas: [
    { nome: 'Smiles', venda: { min: 14, max: 19 }, ref: 16 },
    { nome: 'LATAM Pass', venda: { min: 19, max: 25 }, ref: 22 },
    { nome: 'Azul Fidelidade', venda: { min: 16, max: 22 }, ref: 19 },
    { nome: 'Livelo', venda: { min: 15, max: 21 }, ref: 18, nota: 'Programa de pontos: transfira com bônus antes de vender.' },
    { nome: 'Esfera', venda: { min: 14, max: 19 }, ref: 16, nota: 'Programa de pontos: transfira com bônus antes de vender.' },
    { nome: 'Outro programa', venda: { min: 12, max: 26 }, ref: 20 },
  ] as Cotacao[],
}

/** Data da apuração por extenso, ex.: "julho de 2026". */
export function mesDaApuracao(): string {
  return new Date(TABELA_DO_MES.apuradoEm + 'T12:00:00').toLocaleDateString('pt-BR', {
    month: 'long',
    year: 'numeric',
  })
}

/** Data curta, ex.: "jul/2026". */
export function mesCurto(): string {
  const d = new Date(TABELA_DO_MES.apuradoEm + 'T12:00:00')
  const m = d.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '')
  return `${m}/${d.getFullYear()}`
}

export function cotacaoDe(nome: string): Cotacao | undefined {
  return TABELA_DO_MES.programas.find((p) => p.nome === nome)
}

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
 * ─── REGISTRO DA APURAÇÃO ──────────────────────────────────────────────
 * O que foi efetivamente observado, por fonte, na data de `apuradoEm`. É o
 * que sustenta a faixa publicada: sem isto a tabela é um número sem lastro,
 * e é justamente o lastro que a torna citável.
 *
 * 30/08/2026
 *
 *   MaxMilhas · maxmilhas.com.br/vender-milhas · "preço médio para cada
 *   10.000 milhas", valor público na página, sem login:
 *     Smiles              R$ 171,50 / 10k  →  R$ 17,15 / milheiro
 *     LATAM Pass          R$ 282,40 / 10k  →  R$ 28,24 / milheiro
 *     TudoAzul            R$ 166,90 / 10k  →  R$ 16,69 / milheiro
 *
 *   BankMilhas · bankmilhas.com.br/vender-milhas/<programa> · valor à vista
 *   por PIX, tabelado por faixa de quantidade:
 *     Smiles       30k e 40k  R$ 11,00 · 50k e 60k  R$ 12,50
 *     LATAM Pass   10k        R$ 10,00 · 15k a 25k  R$ 16,00
 *     Livelo       50k a 75k  R$ 15,00
 *     TudoAzul e Esfera: não compra.
 *
 *   HotMilhas: cotação atrás de login. Não apurada nesta rodada.
 *
 * ─── POR QUE A FAIXA É LARGA ───────────────────────────────────────────
 * MaxMilhas e BankMilhas não vendem o mesmo produto. A MaxMilhas publica a
 * MÉDIA de marketplace: você anuncia e espera alguém emitir com as suas
 * milhas. A BankMilhas paga À VISTA por PIX e desconta o risco de carregar
 * o estoque. Daí Smiles sair a R$ 11 num canal e R$ 17 no outro no mesmo
 * dia. A faixa min–max publicada é exatamente essa distância, e ela é o
 * dado: mede quanto custa ter pressa.
 */

/**
 * ⚠️ `validado: false` faz o site inteiro exibir o selo [VERIFICAR] sozinho.
 * Vire para `true` só quando os números forem apuração real da equipe. Assim
 * o selo some de todas as páginas de uma vez, e nunca fica um esquecido.
 */
export const TABELA_DO_MES = {
  validado: true,
  apuradoEm: '2026-08-30',
  programas: [
    { nome: 'Smiles', venda: { min: 11, max: 17 }, ref: 14 },
    { nome: 'LATAM Pass', venda: { min: 16, max: 28 }, ref: 22 },
    { nome: 'Azul Fidelidade', venda: { min: 16, max: 17 }, ref: 17, nota: 'Fonte única: só a MaxMilhas compra TudoAzul entre os canais consultados.' },
    { nome: 'Livelo', venda: { min: 15, max: 15 }, ref: 15, nota: 'Programa de pontos: transfira com bônus antes de vender. Fonte única (BankMilhas).' },
    { nome: 'Esfera', venda: { min: 14, max: 19 }, ref: 16, nota: 'Sem compra direta no mercado: o valor sai do programa aéreo de destino após a transferência. Faixa herdada de jul/2026, não reapurada em agosto.' },
    { nome: 'Outro programa', venda: { min: 11, max: 28 }, ref: 18 },
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

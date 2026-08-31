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
  'BankMilhas',
  'Compro Milhas',
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
 *   Compro Milhas · compromilhas.com · calculadora pública, preço por 1.000
 *   milhas escalonado pelo PRAZO até receber (mínimo de 40.000 para venda):
 *                      Smiles    LATAM    Azul
 *     30 dias úteis    19,10     29,50    16,00
 *     15 dias úteis    15,45     25,49    13,90
 *      5 dias úteis    15,30     25,24    13,77
 *      3 dias úteis    15,15     24,99    13,63
 *      1 dia útil      15,00     24,75    13,50
 *     Não cota Livelo nem Esfera.
 *
 *   HotMilhas: cotação só depois de entregar e-mail e WhatsApp num
 *   formulário de captação. Não apurada: não vale virar lead por um número
 *   que as outras três fontes já dão.
 *
 * ─── POR QUE A FAIXA É LARGA ───────────────────────────────────────────
 * As três fontes não vendem o mesmo produto, e a distância entre elas É o
 * dado: mede quanto custa receber rápido.
 *
 * A MaxMilhas publica a MÉDIA de marketplace — você anuncia e espera alguém
 * emitir. A BankMilhas paga À VISTA por PIX e desconta o risco de carregar o
 * estoque. A Compro Milhas escancara o mecanismo ao tabelar o mesmo saldo por
 * prazo de recebimento: no Smiles, esperar 30 dias em vez de 1 paga R$ 19,10
 * contra R$ 15,00, ou 27% a mais pela mesma milha.
 *
 * É por isso que a faixa min–max fica larga e deve ficar. Um número único
 * esconderia a única decisão que o vendedor realmente toma.
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
    { nome: 'Smiles', venda: { min: 11, max: 19 }, ref: 15 },
    { nome: 'LATAM Pass', venda: { min: 16, max: 30 }, ref: 23 },
    { nome: 'Azul Fidelidade', venda: { min: 13, max: 17 }, ref: 15 },
    { nome: 'Livelo', venda: { min: 15, max: 15 }, ref: 15, nota: 'Programa de pontos: transfira com bônus antes de vender. Fonte única (BankMilhas).' },
    { nome: 'Esfera', venda: { min: 14, max: 19 }, ref: 16, nota: 'Sem compra direta no mercado: o valor sai do programa aéreo de destino após a transferência. Faixa herdada de jul/2026, não reapurada em agosto.' },
    { nome: 'Outro programa', venda: { min: 11, max: 30 }, ref: 18 },
  ] as Cotacao[],
}

/**
 * O CUSTO DA PRESSA.
 *
 * Mesma milha, mesmo dia, mesma plataforma: o que muda é só quantos dias você
 * espera para receber. Apurado na calculadora pública da Compro Milhas, que é
 * a única das três fontes que tabela por prazo — as outras entregam um número
 * só e escondem esta decisão.
 *
 * É o dado mais original da tabela: em nenhum outro lugar do mercado
 * brasileiro isto está publicado lado a lado.
 */
export const PRAZOS = {
  fonte: 'Compro Milhas',
  apuradoEm: '2026-08-30',
  minimoVenda: 40000,
  linhas: [
    { prazo: '30 dias úteis após o uso', smiles: 19.1, latam: 29.5, azul: 16.0 },
    { prazo: '15 dias úteis após o uso', smiles: 15.45, latam: 25.49, azul: 13.9 },
    { prazo: '5 dias úteis após o uso', smiles: 15.3, latam: 25.24, azul: 13.77 },
    { prazo: '3 dias úteis após o uso', smiles: 15.15, latam: 24.99, azul: 13.63 },
    { prazo: '1 dia útil após o uso', smiles: 15.0, latam: 24.75, azul: 13.5 },
  ],
}

/** Quanto a mais rende esperar o prazo mais longo em vez do mais curto, em %. */
export function premioDaEspera(programa: 'smiles' | 'latam' | 'azul'): number {
  const l = PRAZOS.linhas
  const maior = l[0][programa]
  const menor = l[l.length - 1][programa]
  return Math.round(((maior - menor) / menor) * 100)
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

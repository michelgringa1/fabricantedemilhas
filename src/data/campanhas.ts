/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  SÉRIE DE CAMPANHAS DE BÔNUS DE TRANSFERÊNCIA                        ║
 * ║  Segundo dado próprio do site, ao lado da cotação do milheiro.       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 *
 * POR QUE ISTO EXISTE
 * O site afirmava que campanhas de bônus saem "a cada 30 a 60 dias" sem
 * nenhuma base. Ninguém no Brasil publica a série com data, percentual e
 * janela. Em vez de continuar chutando, passamos a registrar cada campanha
 * que observamos. Em três ou quatro meses a afirmação deixa de ser palpite
 * e vira dado.
 *
 * COMO ALIMENTAR
 * A página de ofertas da Livelo (livelo.com.br/ofertas) e a de campanhas da
 * Smiles são públicas, não exigem login. Ao ver uma campanha nova, adicione
 * uma linha aqui com a data de observação, o par de programas, o percentual
 * máximo anunciado e a janela de inscrição. Não invente: só entra o que foi
 * visto na página oficial.
 *
 * O QUE JÁ DÁ PARA DIZER COM UM PONTO
 * Nada sobre frequência, que precisa de série. Mas a janela curta já é um
 * padrão observável e útil: a campanha de 14/09 durou 38 horas.
 */

export interface Campanha {
  /** Data em que observamos a campanha no ar (ISO). */
  observadoEm: string
  origem: string
  destino: string
  /** Percentual máximo de bônus anunciado. */
  bonusMax: number
  /** Duração da janela de inscrição, em horas. Null quando não anunciada. */
  janelaHoras: number | null
  nota?: string
}

export const CAMPANHAS: Campanha[] = [
  {
    observadoEm: '2026-09-14',
    origem: 'Livelo',
    destino: 'Smiles',
    bonusMax: 80,
    janelaHoras: 38,
    nota: 'Cadastro das 10h de 14/09 às 23h59 de 15/09, com 15% de desconto adicional para voar GOL. Exigia cadastro na promoção antes de transferir.',
  },
]

/** Quantas campanhas já registramos. */
export function totalCampanhas(): number {
  return CAMPANHAS.length
}

/** Data da observação mais recente, por extenso. */
export function ultimaObservacao(): string {
  const d = [...CAMPANHAS].sort((a, b) => (a.observadoEm < b.observadoEm ? 1 : -1))[0]
  return new Date(d.observadoEm + 'T12:00:00').toLocaleDateString('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/** Maior percentual de bônus já observado na série. */
export function bonusMaximoObservado(): number {
  return Math.max(...CAMPANHAS.map((c) => c.bonusMax))
}

/**
 * Janela média de adesão, em horas, entre as campanhas que anunciaram prazo.
 * Diferente do intervalo, isto já diz algo com uma observação só: a duração de
 * cada campanha é medida direta, não depende de comparar duas datas.
 */
export function janelaMediaHoras(): number | null {
  const h = CAMPANHAS.map((c) => c.janelaHoras).filter((x): x is number => x !== null)
  if (!h.length) return null
  return Math.round(h.reduce((a, b) => a + b, 0) / h.length)
}

/**
 * Intervalo médio entre campanhas observadas, em dias. Devolve null enquanto
 * não houver pelo menos duas observações: com um ponto não existe intervalo,
 * e publicar um número aqui seria exatamente o chute que esta série veio
 * substituir.
 */
export function intervaloMedioDias(): number | null {
  if (CAMPANHAS.length < 2) return null
  const datas = CAMPANHAS.map((c) => new Date(c.observadoEm + 'T12:00:00').getTime()).sort()
  let soma = 0
  for (let i = 1; i < datas.length; i++) soma += (datas[i] - datas[i - 1]) / 86400000
  return Math.round(soma / (datas.length - 1))
}

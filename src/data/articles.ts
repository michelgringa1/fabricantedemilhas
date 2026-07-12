import type { Article } from './types'
import { acumular, ganharDinheiro, vender } from './pillars1'
import { cartao, programas, viajar } from './pillars2'
import { reviewFabrica } from './reviewFabrica'
import { rodrigoGoes, cursosComparador, melhorCurso, rendaExtra } from './comerciais'

export const ARTICLES: Article[] = [
  acumular,
  ganharDinheiro,
  vender,
  cartao,
  programas,
  viajar,
  cursosComparador,
  reviewFabrica,
  rodrigoGoes,
  melhorCurso,
  rendaExtra,
]

export const bySlug = new Map(ARTICLES.map((a) => [a.slug, a]))

export const TYPE_LABEL: Record<string, string> = {
  pillar: 'Guia completo',
  satelite: 'Artigo',
  review: 'Análise',
  comparador: 'Comparador',
  recurso: 'Recurso',
}

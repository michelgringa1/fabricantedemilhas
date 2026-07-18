/**
 * Controle dos lembretes de verificação editorial.
 *
 * As marcas `[VERIFICAR: ...]` continuam no CÓDIGO (nos arquivos de dados e nas
 * páginas) para a equipe saber o que ainda precisa de checagem. Mas elas NÃO
 * aparecem no site: são removidas na renderização, então nem entram no HTML que
 * o Google lê. Nada de esconder com CSS (o texto ficaria no DOM); aqui é corte
 * de verdade.
 *
 * ─── PARA REVISAR INTERNAMENTE ──────────────────────────────────────────
 * Vire `VERIFICAR_VISIVEL` para `true`, rode o preview, e todos os selos âmbar
 * voltam a aparecer na tela (inclusive a nota "checagens pendentes" no rodapé
 * dos artigos). Volte para `false` antes de publicar.
 */
export const VERIFICAR_VISIVEL = false

const RE_MARK = /<mark class="verificar">\s*\[VERIFICAR[^\]]*\]\s*<\/mark>/g
const RE_CRU = /\[VERIFICAR[^\]]*\]/g

/** Tira sobras de pontuação/espaço deixadas por uma marca removida no meio da frase. */
function faxina(s: string): string {
  return s
    .replace(/\(\s*\)/g, '') // parênteses que ficaram vazios
    .replace(/\s+([.,;:!?)])/g, '$1') // espaço antes de pontuação
    .replace(/\s{2,}/g, ' ') // espaços duplos
    .trim()
}

/**
 * Para strings HTML dos dados (p, ul, ol, callout), que já trazem o
 * `<mark class="verificar">` embutido. Com o interruptor ligado, devolve como
 * está; desligado, remove a marca e limpa a sobra.
 */
export function limparVerificar(html: string): string {
  if (VERIFICAR_VISIVEL) return html
  return faxina(html.replace(RE_MARK, '').replace(RE_CRU, ''))
}

/**
 * Para textos crus que trazem `[VERIFICAR]` sem o `<mark>` (células de tabela,
 * notas de tabela, itens de prós/contras). Com o interruptor ligado, embrulha
 * no `<mark>`; desligado, remove e limpa.
 */
export function marcarVerificar(text: string): string {
  if (VERIFICAR_VISIVEL) {
    return text.replace(RE_CRU, (m) => `<mark class="verificar">${m}</mark>`)
  }
  return faxina(text.replace(RE_CRU, ''))
}

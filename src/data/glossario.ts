export interface Termo {
  id: string
  termo: string
  definicao: string
}

/** Definições de 1–2 frases, citáveis por IA (schema DefinedTerm). Página neutra: sem link de afiliado. */
export const TERMOS: Termo[] = [
  {
    id: 'milhas-aereas',
    termo: 'Milhas aéreas',
    definicao:
      'Moeda dos programas de fidelidade das companhias aéreas, acumulada em voos ou por transferência de pontos de cartão de crédito. Servem para emitir passagens e outros resgates, e ainda têm mercado de compra e venda no Brasil.',
  },
  {
    id: 'pontos',
    termo: 'Pontos (de cartão)',
    definicao:
      'Unidade acumulada nos programas dos bancos e emissores a cada gasto no cartão de crédito. Pontos viram milhas quando transferidos para um programa aéreo, de preferência em campanha bonificada.',
  },
  {
    id: 'programa-de-fidelidade',
    termo: 'Programa de fidelidade',
    definicao:
      'Sistema de recompensas de uma empresa. No universo aéreo brasileiro, os principais são Smiles (GOL), LATAM Pass (LATAM) e Azul Fidelidade (Azul), além dos programas de pontos como Livelo e Esfera.',
  },
  {
    id: 'milheiro',
    termo: 'Milheiro',
    definicao:
      'Bloco de mil milhas, a unidade padrão de negociação do mercado. Preços de venda e custos de acúmulo são sempre expressos por milheiro (ex.: "milheiro a R$ 20").',
  },
  {
    id: 'cotacao-do-milheiro',
    termo: 'Cotação do milheiro',
    definicao:
      'Valor de mercado pago por mil milhas na venda, que varia por programa, prazo de recebimento e demanda. A Fabricante de Milhas publica uma tabela mensal de referência por programa.',
  },
  {
    id: 'transferencia-bonificada',
    termo: 'Transferência bonificada',
    definicao:
      'Campanha em que o programa de pontos oferece bônus (historicamente entre 60% e 120%) para transferir pontos a um programa aéreo. É a principal técnica de multiplicação de saldo do mercado brasileiro.',
  },
  {
    id: 'clube-de-fidelidade',
    termo: 'Clube de fidelidade (assinatura)',
    definicao:
      'Assinatura mensal que credita milhas ou pontos todo mês e costuma dar acesso a bônus maiores de transferência e promoções exclusivas. Vale a pena quando o benefício extra supera a mensalidade.',
  },
  {
    id: 'emissao',
    termo: 'Emissão',
    definicao:
      'Ato de trocar milhas por uma passagem aérea. A qualidade de uma emissão se mede pelo valor embutido do milheiro: preço da passagem em dinheiro dividido pelas milhas exigidas.',
  },
  {
    id: 'taxa-de-embarque',
    termo: 'Taxa de embarque',
    definicao:
      'Tarifa aeroportuária paga em dinheiro mesmo em passagens emitidas com milhas. É o motivo pelo qual "viajar de graça com milhas" significa, no rigor, pagar só as taxas.',
  },
  {
    id: 'cpm',
    termo: 'CPM (custo por milheiro)',
    definicao:
      'Quanto custa, em reais, "fabricar" mil milhas (somando gastos de cartão, assinaturas e compras de pontos). Lucra quem mantém o CPM abaixo da cotação de venda ou do valor de uso.',
  },
  {
    id: 'smiles',
    termo: 'Smiles',
    definicao:
      'Programa de fidelidade da GOL, um dos maiores do Brasil. Destaca-se pela malha doméstica, promoções frequentes e mercado líquido para venda de milhas.',
  },
  {
    id: 'latam-pass',
    termo: 'LATAM Pass',
    definicao:
      'Programa de fidelidade da LATAM. Ponto forte em malha internacional e parcerias; as cotações de emissão variam bastante conforme rota e antecedência.',
  },
  {
    id: 'azul-fidelidade',
    termo: 'Azul Fidelidade',
    definicao:
      'Programa de fidelidade da Azul (evolução do TudoAzul). Forte na cobertura de cidades médias brasileiras atendidas pela malha da companhia.',
  },
  {
    id: 'livelo',
    termo: 'Livelo',
    definicao:
      'Programa de pontos ligado a grandes bancos brasileiros. Funciona como reservatório flexível: acumula pontos do cartão e de compras e os transfere a programas aéreos, com campanhas de bônus frequentes.',
  },
  {
    id: 'esfera',
    termo: 'Esfera',
    definicao:
      'Programa de pontos do Santander, alternativa à Livelo como estoque flexível de pontos com campanhas de transferência bonificada para programas aéreos.',
  },
  {
    id: 'plataforma-de-venda',
    termo: 'Plataforma de venda de milhas',
    definicao:
      'Empresa que intermedeia a venda de milhas entre titulares e emissores, pagando conforme prazo escolhido. É contraparte privada: a solidez da plataforma é parte do risco da operação, como mostrou a crise 123milhas/HotMilhas em 2023.',
  },
  {
    id: 'bloqueio-de-conta',
    termo: 'Bloqueio de conta',
    definicao:
      'Sanção aplicada por programas de fidelidade a contas que violam o regulamento (tipicamente por comercialização de milhas), podendo incluir perda total do saldo.',
  },
  {
    id: 'sweet-spot',
    termo: 'Sweet spot',
    definicao:
      'Emissão em que as milhas entregam valor muito acima da média, tipicamente voos internacionais ou de classe executiva em tabelas promocionais. É o uso que maximiza o valor por milha do saldo.',
  },
]

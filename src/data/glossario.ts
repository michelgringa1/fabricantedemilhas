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
  {
    id: 'award-chart',
    termo: 'Award chart',
    definicao:
      'Tabela fixa que define quantas milhas custa cada trecho, por região ou distância. Programas com award chart dão previsibilidade; programas com preço dinâmico mudam o custo conforme a demanda do voo.',
  },
  {
    id: 'preco-dinamico',
    termo: 'Preço dinâmico',
    definicao:
      'Modelo em que o custo em milhas de uma passagem varia conforme demanda, data e ocupação, em vez de seguir tabela fixa. Tornou-se predominante nos programas brasileiros e explica a mesma rota custar valores diferentes a cada consulta.',
  },
  {
    id: 'taxa-de-servico',
    termo: 'Taxa de serviço',
    definicao:
      'Valor cobrado pelo programa para processar a emissão, separado da taxa de embarque. Nem todo programa cobra, e alguns isentam assinantes de clube.',
  },
  {
    id: 'remarcacao',
    termo: 'Remarcação',
    definicao:
      'Alteração de data ou horário de um bilhete já emitido, em geral sujeita a multa e à diferença de milhas. As regras variam por programa e por tipo de tarifa.',
  },
  {
    id: 'no-show',
    termo: 'No-show',
    definicao:
      'Não comparecimento ao voo sem cancelamento prévio. Costuma gerar perda do trecho e, em alguns programas, cancelamento automático dos trechos seguintes da mesma reserva.',
  },
  {
    id: 'status-elite',
    termo: 'Status elite',
    definicao:
      'Categoria superior dentro de um programa de fidelidade, conquistada por volume de voos ou de gastos. Dá benefícios como bagagem extra, embarque prioritário, sala VIP e bônus no acúmulo.',
  },
  {
    id: 'upgrade',
    termo: 'Upgrade',
    definicao:
      'Troca de uma passagem já emitida por uma cabine superior, usando milhas, dinheiro ou status. Nem toda tarifa aceita upgrade, e a disponibilidade costuma ser limitada.',
  },
  {
    id: 'codigo-compartilhado',
    termo: 'Código compartilhado (codeshare)',
    definicao:
      'Voo operado por uma companhia e vendido por outra sob o próprio código. Importa para milhas porque a companhia que opera nem sempre é a que credita os pontos.',
  },
  {
    id: 'alianca',
    termo: 'Aliança aérea',
    definicao:
      'Grupo de companhias que compartilham acordos de fidelidade, permitindo acumular e resgatar milhas entre elas. As três principais são Star Alliance, Oneworld e SkyTeam.',
  },
  {
    id: 'multitrecho',
    termo: 'Multitrecho',
    definicao:
      'Emissão que inclui mais de dois voos numa única reserva, em vez de ida e volta simples. Bem usada, reduz o custo total em milhas de um roteiro com várias cidades.',
  },
  {
    id: 'stopover',
    termo: 'Stopover',
    definicao:
      'Parada intencional de mais de 24 horas numa cidade de conexão, contada como parte da mesma emissão. Alguns programas permitem sem custo extra em milhas, o que transforma uma conexão em um destino a mais.',
  },
  {
    id: 'milhas-promocionais',
    termo: 'Milhas promocionais',
    definicao:
      'Milhas creditadas em campanhas específicas, em geral com validade mais curta que as milhas comuns. Vale conferir o prazo no extrato antes de planejar o uso.',
  },
  {
    id: 'portal-de-compras',
    termo: 'Portal de compras',
    definicao:
      'Site do programa de fidelidade que redireciona para lojas parceiras e credita pontos extras pela mesma compra. Só funciona se a navegação começar pelo portal, logado na conta.',
  },
  {
    id: 'validade-das-milhas',
    termo: 'Validade das milhas',
    definicao:
      'Prazo após o qual as milhas não usadas expiram. Varia por programa, pela origem da milha e pela categoria do cliente. Em setembro de 2026: LATAM Pass usa 36 meses para tudo; a Azul Fidelidade, no mínimo 24 meses; e a Smiles publica 16 prazos distintos, com 3 anos para milhas transferidas do banco e apenas 6 meses para as milhas de bônus de promoção.',
  },
  {
    id: 'expiracao',
    termo: 'Expiração',
    definicao:
      'Perda automática do saldo ao fim do prazo de validade. É o erro mais caro do acúmulo sem planejamento, porque não há recuperação depois do vencimento.',
  },
  {
    id: 'transferencia-entre-contas',
    termo: 'Transferência entre contas',
    definicao:
      'Envio de milhas de uma conta para outra dentro do mesmo programa, normalmente com taxa e limite anual. Não confundir com transferência bonificada, que parte de um programa de pontos para um programa aéreo.',
  },
  {
    id: 'compra-de-pontos',
    termo: 'Compra de pontos',
    definicao:
      'Aquisição direta de milhas ou pontos do próprio programa, com dinheiro. Só compensa quando o custo por milheiro fica abaixo do valor que você extrairá no resgate.',
  },
  {
    id: 'bonificacao',
    termo: 'Bonificação',
    definicao:
      'Percentual extra concedido sobre uma transferência ou compra de pontos. Uma bonificação de 100% dobra o saldo transferido e é o principal multiplicador do acúmulo no Brasil.',
  },
  {
    id: 'cashback',
    termo: 'Cashback',
    definicao:
      'Devolução de parte do valor da compra em dinheiro, em vez de pontos. Alguns programas deixam escolher entre cashback e pontuação, e a comparação depende do valor que você atribui ao milheiro.',
  },
  {
    id: 'milhas-mais-dinheiro',
    termo: 'Milhas + dinheiro',
    definicao:
      'Modalidade de resgate em que parte da passagem é paga em milhas e parte em reais. Costuma ter valor por milha pior que o resgate integral, mas resolve saldo insuficiente.',
  },
  {
    id: 'tarifa-award',
    termo: 'Tarifa award',
    definicao:
      'Passagem emitida com milhas, em oposição à tarifa paga em dinheiro. Tem regras próprias de remarcação, cancelamento e disponibilidade de assentos.',
  },
  {
    id: 'disponibilidade-de-assentos',
    termo: 'Disponibilidade de assentos',
    definicao:
      'Quantidade de lugares que a companhia libera para emissão com milhas em cada voo. É o que limita o resgate: milhas suficientes não garantem passagem se o voo não tiver assento award.',
  },
  {
    id: 'acumulo-por-voo',
    termo: 'Acúmulo por voo',
    definicao:
      'Milhas creditadas por voar, calculadas pela distância e pela classe tarifária. No Brasil rende bem menos que o acúmulo via cartão para a maioria das pessoas.',
  },
  {
    id: 'milheiro-de-compra',
    termo: 'Milheiro de compra',
    definicao:
      'Quanto custa adquirir mil milhas, seja comprando direto do programa ou via transferência bonificada. É a métrica que determina se uma promoção vale a pena.',
  },
  {
    id: 'spread',
    termo: 'Spread',
    definicao:
      'Diferença entre o preço que o mercado paga por um milheiro e o preço que cobra por ele. É de onde sai a margem das plataformas de compra e venda.',
  },
  {
    id: 'anuidade',
    termo: 'Anuidade',
    definicao:
      'Taxa anual cobrada pelo cartão de crédito, em geral parcelada. Entra na conta do acúmulo: um cartão só compensa se as milhas geradas valerem mais que a anuidade.',
  },
  {
    id: 'pontos-por-dolar',
    termo: 'Pontos por dólar',
    definicao:
      'Quantidade de pontos que o cartão credita a cada dólar gasto, a métrica padrão de comparação entre cartões no Brasil. Gastos em reais são convertidos pela cotação do dia da fatura.',
  },
  {
    id: 'categoria-do-cartao',
    termo: 'Categoria do cartão',
    definicao:
      'Faixa do cartão dentro da bandeira (Gold, Platinum, Infinite, Black), que define pontuação, anuidade e benefícios. Categoria mais alta nem sempre significa melhor custo-benefício em milhas.',
  },
  {
    id: 'clube-de-pontos',
    termo: 'Clube de pontos',
    definicao:
      'Assinatura mensal de um programa de pontos, como Livelo ou Esfera, que credita pontos todo mês e costuma dar bônus maiores nas transferências. Diferente do clube de milhas de uma companhia aérea.',
  },
  {
    id: 'extrato-de-milhas',
    termo: 'Extrato de milhas',
    definicao:
      'Registro das entradas e saídas do saldo, com data de crédito e de expiração de cada lote. É onde se confere o que vence primeiro e se planeja o uso.',
  },
  {
    id: 'conta-familia',
    termo: 'Conta família',
    definicao:
      'Recurso que permite somar milhas de familiares num único saldo para resgate. As regras de parentesco e o limite de membros variam por programa.',
  },
  {
    id: 'marketplace-de-milhas',
    termo: 'Marketplace de milhas',
    definicao:
      'Plataforma que conecta quem quer vender milhas a quem quer comprar passagem. O vendedor anuncia e aguarda a emissão, o que costuma pagar mais que a venda à vista, com prazo maior.',
  },
  {
    id: 'venda-a-vista',
    termo: 'Venda à vista',
    definicao:
      'Modalidade em que a plataforma compra o saldo e paga de imediato, assumindo o risco de revendê-lo. Paga menos que o marketplace, em troca de liquidez.',
  },
  {
    id: 'prazo-de-recebimento',
    termo: 'Prazo de recebimento',
    definicao:
      'Tempo entre a venda das milhas e o pagamento cair na conta. É a variável que mais mexe no preço por milheiro: quanto mais rápido você quer receber, menos a plataforma paga.',
  },
  {
    id: 'penhora-de-milhas',
    termo: 'Penhora de milhas',
    definicao:
      'Bloqueio judicial do saldo de milhas para pagamento de dívidas. Em 18 de agosto de 2026, a Terceira Turma do STJ decidiu por unanimidade que milhas com expressão econômica podem ser penhoradas e que a cláusula de intransferibilidade dos programas não impede a medida.',
  },
  {
    id: 'intransferibilidade',
    termo: 'Cláusula de intransferibilidade',
    definicao:
      'Regra dos regulamentos que declara as milhas pessoais e não transferíveis. Serve para impedir a comercialização, mas o STJ decidiu em 2026 que ela não bloqueia a penhora judicial do saldo.',
  },
  {
    id: 'milhas-corporativas',
    termo: 'Milhas corporativas',
    definicao:
      'Saldo acumulado em programas voltados a empresas, com regras próprias de acúmulo e resgate. Costumam permitir uso por qualquer colaborador, diferente das contas pessoais.',
  },
  {
    id: 'tarifa-promocional',
    termo: 'Tarifa promocional',
    definicao:
      'Emissão com custo em milhas abaixo do praticado normalmente, divulgada por tempo limitado. É onde nasce a maior parte das viagens que parecem boas demais para ser verdade.',
  },
  {
    id: 'bagagem-despachada',
    termo: 'Bagagem despachada',
    definicao:
      'Volume que vai no compartimento de carga, quase sempre cobrado à parte nas tarifas mais baratas. Entra na conta da emissão: passagem barata em milhas com bagagem cara pode não compensar.',
  },
  {
    id: 'taxa-de-conveniencia',
    termo: 'Taxa de conveniência',
    definicao:
      'Cobrança adicional de algumas plataformas para processar a emissão com milhas de terceiros. Deve entrar no cálculo do custo real da passagem.',
  },
  {
    id: 'milhas-bonus',
    termo: 'Milhas bônus',
    definicao:
      'Parcela de milhas creditada como prêmio numa campanha de transferência, separada das milhas que você efetivamente transferiu. Importa porque a validade costuma ser diferente: na Smiles, em setembro de 2026, o bônus expirava em 6 meses contra 3 anos das milhas transferidas.',
  },
]

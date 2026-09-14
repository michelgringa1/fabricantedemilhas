import type { Article } from './types'

export const cartao: Article = {
  slug: '/cartao-de-credito-para-milhas/',
  type: 'pillar',
  cluster: 'Cartões',
  kicker: 'Guia completo',
  h1: 'Cartão de crédito para acumular milhas: como escolher o certo',
  seoTitle: 'Cartão de Crédito para Milhas | Fabricante de Milhas',
  metaDescription:
    'Como escolher cartão de crédito para acumular milhas em 2026: pontos por dólar, anuidade, perfis de renda e os erros que anulam o acúmulo.',
  keyword: 'cartão de crédito para acumular milhas',
  answerFirst:
    'Segundo a análise da Fabricante de Milhas, o melhor cartão de crédito para acumular milhas é o que equilibra três fatores: pontos por dólar compatíveis com seu gasto, anuidade que a pontuação paga e programa de pontos flexível para transferências bonificadas. Não existe "melhor cartão" universal: existe o melhor para o seu perfil.',
  tldr: [
    'O critério nº 1 é pontos por dólar, mas só vale se a anuidade couber no seu volume de gasto.',
    'Prefira cartões que pontuam em programas flexíveis (transferíveis para várias aéreas).',
    'Concentre o gasto: um cartão forte rende mais que três medianos.',
    'Cartão sem anuidade pontua menos, mas pode ser o início certo para gasto baixo.',
    'Juros do rotativo destroem qualquer ganho com milhas. Pontue apenas o que pode pagar.',
  ],
  published: '2026-07-11',
  updated: '2026-09-14',
  blocks: [
    { t: 'h2', id: 'criterios', text: 'Os 4 critérios que realmente importam' },
    {
      t: 'ol',
      items: [
        '<strong><a href="/glossario-de-milhas/#pontos-por-dolar">Pontuação por dólar</a></strong>: quantos pontos cada dólar gasto gera. É a base de tudo.',
        '<strong><a href="/glossario-de-milhas/#anuidade">Anuidade</a> líquida</strong>: quanto o cartão custa depois de descontos e se a pontuação anual paga esse custo.',
        '<strong>Flexibilidade do programa</strong>: pontos que transferem para várias companhias (via Livelo, Esfera etc.) valem mais que pontos presos. Veja o <a href="/programas-de-milhas/">comparativo dos programas brasileiros</a>.',
        '<strong>Benefícios de viagem</strong>: salas VIP, seguros e upgrades contam, mas são desempate, não critério principal.',
      ],
    },
    {
      t: 'table',
      caption: 'Pontuação por dólar de cartões do mercado, apurado em 14 de setembro de 2026',
      head: ['Cartão', 'Pontos por dólar', 'A condição que quase ninguém lê'],
      rows: [
        ['<strong>Itaú Visa Infinite</strong>', '1,8 a 2,0', 'Só chega a 2,0 no nível 3 ou superior do Minhas Vantagens'],
        ['<strong>Itaú Uniclass</strong> (Plano Pontos+)', '2,0 a 2,5', '2,5 exige fatura fechada a partir de R$ 4 mil e adesão ao Minhas Vantagens'],
        ['<strong>Santander</strong> (Rewards)', '2,2', 'Pontuação base; sobe com bônus promocional temporário'],
        ['<strong>Nubank Ultravioleta</strong>', 'a partir de 2,2', 'Alternativa a 1,25% de cashback: são caminhos excludentes'],
        ['<strong>C6 Carbon</strong>', '2,0 a 3,5', '3,5 exige a partir de R$ 1 milhão investido no banco'],
        ['<strong>Itaú Personnalité The One</strong>', '3,0 nacional · 3,5 internacional', 'Exige relacionamento Personnalité'],
      ],
      note: 'Dados coletados pela Equipe Fabricante de Milhas em 14/09/2026, nos sites oficiais de cada emissor (itau.com.br, c6bank.com.br, santander.com.br e nubank.com.br). <strong>Pontuação, anuidade e condições de cartão mudam com frequência e sem aviso</strong>, e variam conforme o seu relacionamento com o banco. Trate esta tabela como retrato de uma data, não como oferta vigente: confirme na página oficial do emissor antes de decidir.',
    },
    {
      t: 'p',
      html: 'O padrão que a tabela revela é mais útil que qualquer número isolado: <strong>quase todo valor alto tem condição atrelada</strong>. Investimento mínimo, fatura mínima, nível de relacionamento. O número da vitrine raramente é o que cai na sua conta. Antes de trocar de cartão atrás de meio ponto a mais, leia a condição e veja se ela cabe na sua realidade.',
    },
    { t: 'h2', id: 'perfis', text: 'Qual cartão faz sentido para cada perfil de gasto' },
    {
      t: 'table',
      caption: 'Faixas de perfil (referência editorial: condições mudam; confirme com o emissor)',
      head: ['Perfil de gasto mensal', 'O que buscar', 'O que evitar'],
      rows: [
        ['Até R$ 2.000', 'Cartão sem anuidade que pontue algo; foco em acumular por parceiros e portais', 'Anuidade alta que o gasto não paga'],
        ['R$ 2.000 – R$ 8.000', 'Intermediário com boa pontuação e anuidade negociável', 'Pulverizar em vários cartões'],
        ['Acima de R$ 8.000', 'Premium com 2+ pontos por dólar e benefícios de viagem', 'Pagar anuidade cheia sem negociar'],
      ],
      note: 'Faixas de perfil são referência editorial, não recomendação de produto. Os nomes e as pontuações de cada emissor estão na tabela acima, com a data da apuração.',
    },
    { t: 'h2', id: 'sem-anuidade', text: 'Cartão sem anuidade vale a pena para milhas?' },
    {
      t: 'p',
      html: 'Para começar, sim. Cartões sem anuidade costumam pontuar menos (ou converter em cashback), mas eliminam o risco de pagar mais de tarifa do que se ganha em pontos. A migração para um cartão pago faz sentido quando a conta fecha: pontuação anual × valor do ponto > anuidade líquida. Para estimar o valor do ponto, use a nossa <a href="/cotacao-do-milheiro/">cotação do milheiro</a> do mês. Antes disso, é vaidade.',
    },
    { t: 'h2', id: 'erros', text: 'Erros que anulam o acúmulo' },
    {
      t: 'ul',
      items: [
        '<strong>Pagar juros para pontuar</strong>: o rotativo do cartão custa mais em um mês do que as milhas rendem no ano. Regra absoluta: só passe no cartão o que consegue pagar integral.',
        '<strong>Deixar pontos no programa do banco sem plano</strong>: pontos parados perdem campanhas de <a href="/como-acumular-milhas/#transferencia-bonificada">transferência bonificada</a> e podem expirar.',
        '<strong>Escolher pelo brinde de adesão</strong>: bônus de boas-vindas é bom, mas o que sustenta o acúmulo é a pontuação recorrente.',
        '<strong>Ignorar a cotação do dólar</strong>: pontuação é por dólar gasto; a conversão afeta diretamente seu custo por ponto. A <a href="/calculadora-de-milhas/">calculadora</a> mostra quantas milhas o seu gasto mensal gera.',
      ],
    },
    { t: 'cta' },
  ],
  faq: [
    {
      q: 'Qual o melhor cartão de crédito para milhas em 2026?',
      a: 'Depende do seu gasto mensal. Para gastos altos, cartões premium com 2+ pontos por dólar e anuidade negociada tendem a render mais; para gastos menores, um intermediário ou sem anuidade evita pagar tarifa maior que o benefício. Compare pontuação, anuidade líquida e flexibilidade do programa.',
    },
    {
      q: 'Cartão sem anuidade acumula milhas?',
      a: 'Alguns pontuam pouco, outros convertem gastos em cashback ou pontos próprios. É um bom ponto de partida para gasto baixo, mas quem quer volume de milhas em geral migra para um cartão com pontuação maior quando o gasto mensal justifica a anuidade.',
    },
    {
      q: 'Quantos pontos por dólar é uma boa pontuação?',
      a: 'Como referência de mercado: até 1 ponto por dólar é básico, entre 1,5 e 2 é competitivo e acima de 2 é território premium. O número isolado não basta: anuidade e flexibilidade de transferência do programa pesam tanto quanto.',
    },
    {
      q: 'Vale a pena ter mais de um cartão para milhas?',
      a: 'No começo, não: concentrar o gasto em um cartão forte maximiza pontuação e facilita atingir metas de bônus. Um segundo cartão faz sentido em casos específicos, como benefícios complementares ou pontuação extra em categorias que você usa muito.',
    },
  ],
  related: [
    { slug: '/como-acumular-milhas/', anchor: 'Guia completo de como acumular milhas' },
    { slug: '/programas-de-milhas/', anchor: 'Para qual programa transferir seus pontos' },
    { slug: '/glossario-de-milhas/', anchor: 'Entenda os termos: pontos, milhas e milheiro' },
  ],
  checks: [
  ],
}

export const programas: Article = {
  slug: '/programas-de-milhas/',
  type: 'pillar',
  cluster: 'Programas',
  kicker: 'Comparativo',
  h1: 'Programas de milhas no Brasil: qual é o melhor em 2026?',
  seoTitle: 'Melhor Programa de Milhas do Brasil | Fabricante de Milhas',
  metaDescription:
    'Smiles, LATAM Pass, Azul Fidelidade, Livelo e Esfera comparados: acúmulo, validade, clubes e uso. Qual programa de milhas rende mais no seu caso.',
  keyword: 'melhor programa de milhas Brasil',
  answerFirst:
    'Segundo a análise da Fabricante de Milhas, não existe um único melhor programa de milhas no Brasil: Smiles, LATAM Pass e Azul Fidelidade vencem em cenários diferentes de rota e uso, enquanto Livelo e Esfera funcionam como reservatórios flexíveis de pontos. A escolha certa depende de onde você voa e de como pretende usar ou vender o saldo.',
  tldr: [
    'Programas aéreos (Smiles, LATAM Pass, Azul Fidelidade) são o destino final das milhas.',
    'Programas de pontos (Livelo, Esfera) são o "estoque flexível". Transfira só com bônus.',
    'Compare: malha aérea que você usa, validade do saldo, clube e liquidez para venda.',
    'Diversificar demais pulveriza o saldo; concentre onde você realmente voa ou vende.',
  ],
  published: '2026-07-11',
  updated: '2026-09-14',
  blocks: [
    { t: 'h2', id: 'dois-tipos', text: 'Primeiro: existem dois tipos de programa' },
    {
      t: 'p',
      html: 'Confundir programa de pontos com programa de milhas custa dinheiro. <strong>Programas de pontos</strong> (Livelo, Esfera) acumulam a pontuação do cartão e de compras: são flexíveis, transferem para várias aéreas, mas seus pontos "presos" lá valem pouco para venda. <strong>Programas de milhas</strong> (Smiles, LATAM Pass, Azul Fidelidade) são o destino: é onde a milha vira passagem ou dinheiro.',
    },
    { t: 'h2', id: 'comparativo', text: 'Comparativo dos principais programas' },
    {
      t: 'table',
      caption: 'Programas aéreos: visão geral, apurado em 14 de setembro de 2026',
      head: ['Programa', 'Companhia', 'Pontos fortes', 'Pontos de atenção'],
      rows: [
        ['Smiles', 'GOL', 'Malha doméstica ampla, promoções frequentes, mercado líquido para venda', 'Milha de bônus vale só 6 meses: o que vem de promoção precisa de uso rápido'],
        ['LATAM Pass', 'LATAM', 'Malha internacional forte, parcerias amplas, bônus válido por 36 meses', 'Cotação de emissão varia muito entre datas: compare antes de resgatar'],
        ['Azul Fidelidade', 'Azul', 'Cobertura de cidades médias no Brasil', 'Ex-TudoAzul; o clube agora se chama Clube Azul'],
        ['Livelo', '— (pontos)', '14 programas parceiros de transferência (set/2026)', 'Ponto parado sem transferir rende pouco'],
        ['Esfera', '— (pontos)', '11 programas parceiros (set/2026)', 'Menos parceiros que a Livelo, mas tem TAP e Turkish'],
      ],
      note: 'Contagem de parceiros apurada pela Equipe Fabricante de Milhas em 14/09/2026, nas páginas oficiais de transferência de cada programa: 14 na Livelo, 11 na Esfera. A composição difere — a Esfera tem TAP Miles&Go, Turkish e IHG; a Livelo tem MileagePlus, British Airways, Etihad, Hilton, Dotz e Seedz. Regras, validades e clubes mudam com frequência: a tabela é revisada a cada atualização desta página.',
    },
    { t: 'h2', id: 'validade', text: 'Validade: a regra que decide para onde transferir' },
    {
      t: 'p',
      html: 'Validade não é detalhe de regulamento, é estratégia. O erro mais caro do acúmulo é deixar saldo expirar, e os três programas tratam o assunto de formas bem diferentes — especialmente no ponto que mais importa para quem transfere pontos do cartão: <strong>quanto tempo dura a milha de bônus</strong>.',
    },
    {
      t: 'table',
      caption: 'Validade por programa, apurado em 14 de setembro de 2026',
      head: ['Programa', 'Validade padrão', 'Milhas de bônus', 'Como estender'],
      rows: [
        [
          '<strong>Smiles</strong>',
          '3 anos (transferidas do banco); 6 anos se vieram de voo GOL',
          '<strong>6 meses</strong>',
          'Categoria elite (Ouro 4 anos, Diamante 10 anos), Clube, ou extensão paga de 30, 60 ou 90 dias',
        ],
        [
          '<strong>LATAM Pass</strong>',
          '36 meses (3 anos)',
          '<strong>36 meses</strong>',
          'Clube LATAM Pass; milhas expiradas podem ser renovadas em até 180 dias',
        ],
        [
          '<strong>Azul Fidelidade</strong>',
          'Mínimo de 24 meses',
          'Segue a regra geral do programa',
          'Clube Azul estende para 3 anos; com Cartão Azul Itaú Visa Infinite ativo, os pontos não expiram',
        ],
      ],
      note: 'Apurado nas páginas oficiais de cada programa em 14/09/2026 pela Equipe Fabricante de Milhas. A Smiles publica 16 prazos distintos conforme a origem da milha: os dois citados são os que atingem a maior parte de quem acumula por cartão.',
    },
    {
      t: 'p',
      html: 'A leitura prática: se você acumula via cartão e transfere com bônus, <strong>o LATAM Pass protege melhor a parte bonificada</strong> — 36 meses contra 6 meses da Smiles. Isso não faz da Smiles um programa pior; faz dela um programa que exige uso rápido do que veio de promoção. Transferir para a Smiles com bônus e deixar o saldo parado é, na prática, jogar fora a metade que a promoção deu.',
    },
    { t: 'h2', id: 'como-escolher', text: 'Como escolher o seu programa principal' },
    {
      t: 'ol',
      items: [
        '<strong>Onde você voa?</strong> A companhia que domina seu aeroporto define o programa mais útil.',
        '<strong>Vai usar ou vender?</strong> Para venda, liquidez e cotação do milheiro importam mais que malha.',
        '<strong>Validade</strong>: confira o prazo de expiração e o que o renova.',
        '<strong>Clube</strong>: assine apenas se o bônus extra de transferência e as promoções pagarem a mensalidade no seu volume.',
      ],
    },
    { t: 'h2', id: 'estrategia', text: 'A estratégia que recomendamos' },
    {
      t: 'p',
      html: 'Mantenha a pontuação do cartão em um programa de pontos flexível e <strong>só transfira em campanha bonificada</strong>, para o programa aéreo onde o saldo tem mais valor no seu caso, seja para <a href="/como-viajar-de-graca-com-milhas/">emitir passagens</a>, seja para <a href="/vender-milhas-aereas/">vender o milheiro</a>. Pontos parados no banco são valor dormindo; milhas transferidas sem bônus são valor queimado.',
    },
    { t: 'cta' },
  ],
  faq: [
    {
      q: 'Qual o melhor programa de milhas do Brasil?',
      a: 'Depende do uso: Smiles costuma se destacar em malha doméstica e liquidez de venda, LATAM Pass em voos internacionais e Azul Fidelidade na cobertura de cidades médias. Para quem acumula pelo cartão, o par "programa de pontos flexível + transferência bonificada" importa mais que a bandeira.',
    },
    {
      q: 'Livelo é programa de milhas?',
      a: 'Não. A Livelo é programa de pontos. Seus pontos viram milhas quando transferidos a um programa aéreo parceiro, de preferência em campanha com bônus. Deixar o saldo parado na Livelo sem estratégia de transferência desperdiça a principal vantagem do programa.',
    },
    {
      q: 'Milhas de qual programa valem mais na venda?',
      a: 'Em geral, programas com malha ampla e alta demanda de emissão têm cotação de milheiro mais líquida. A posição relativa muda mês a mês. Consulte nossa tabela mensal de cotação do milheiro antes de decidir para onde transferir.',
    },
    {
      q: 'Devo acumular em vários programas ao mesmo tempo?',
      a: 'Evite pulverizar. Saldo pequeno espalhado em três programas não emite passagem em nenhum. Concentre no programa que atende sua rota ou estratégia de venda, e use os demais apenas quando houver promoção claramente vantajosa.',
    },
  ],
  related: [
    { slug: '/como-acumular-milhas/', anchor: 'Como acumular milhas nesses programas' },
    { slug: '/vender-milhas-aereas/', anchor: 'Cotação e venda do milheiro por programa' },
    { slug: '/cartao-de-credito-para-milhas/', anchor: 'O cartão certo para alimentar seu programa' },
  ],
  checks: [
  ],
}

export const viajar: Article = {
  slug: '/como-viajar-de-graca-com-milhas/',
  type: 'pillar',
  cluster: 'Viajar',
  kicker: 'Guia completo',
  h1: 'Como viajar de graça com milhas (e o que "de graça" significa de verdade)',
  seoTitle: 'Como Viajar de Graça com Milhas | Fabricante de Milhas',
  metaDescription:
    'Como viajar de graça com milhas: passo a passo da emissão, quando emitir, taxas que ainda existem e como multiplicar o valor do seu saldo.',
  keyword: 'como viajar de graça com milhas',
  answerFirst:
    'Segundo a análise da Fabricante de Milhas, viajar "de graça" com milhas significa pagar a passagem com saldo acumulado no cartão e em promoções, restando apenas taxas de embarque. Com método, uma família emite voos que custariam milhares de reais por uma fração disso. O segredo está em quando e como emitir.',
  tldr: [
    '"De graça" é exagero: a taxa de embarque sai em dinheiro (R$ 96,29 numa ida e volta doméstica que simulamos).',
    'Emita com antecedência ou em promoções-relâmpago: os dois extremos concentram as melhores tabelas.',
    'Flexibilidade de datas e aeroportos vale mais que qualquer técnica avançada.',
    'Milhas valem mais em emissões caras (internacional, executiva). Evite queimar saldo em passagem barata.',
  ],
  published: '2026-07-11',
  updated: '2026-09-14',
  blocks: [
    { t: 'h2', id: 'de-graca', text: 'O que significa viajar "de graça" com milhas' },
    {
      t: 'p',
      html: 'Sejamos exatos: com milhas você não paga a <strong>tarifa</strong> da passagem, mas taxas de embarque e eventuais encargos continuam sendo cobrados em dinheiro. Numa emissão que a Equipe Fabricante de Milhas simulou em 14 de setembro de 2026 (GRU–REC, ida e volta em novembro), a taxa somou <strong>R$ 96,29 pelos dois trechos</strong>, cerca de R$ 48 por trecho doméstico. Internacionais variam bastante por aeroporto e costumam ser bem mais altas.',
    },
    {
      t: 'p',
      html: 'E aqui vale desfazer um exagero que circula no nicho, inclusive em versões anteriores deste guia: <strong>o desconto não é de 90%</strong>. Essa conta só fecha se você fingir que as milhas foram de graça. Na mesma simulação, a ida custava <strong>23.300 milhas ou R$ 466,45</strong> em dinheiro. Avaliando as milhas pela nossa <a href="/cotacao-do-milheiro/">cotação</a> de R$ 15 por milheiro, elas valiam R$ 349,50; somando os R$ 48 de taxa, a emissão saiu por R$ 397,50 contra R$ 466,45. Economia real: <strong>cerca de 15%</strong>.',
    },
    {
      t: 'p',
      html: 'Isso não torna a emissão ruim: torna a conta honesta. O ganho de verdade está em outro lugar. Naquela emissão, <strong>cada milheiro entregou R$ 17,95</strong> de valor, contra os R$ 15 que o mercado paga pelo mesmo milheiro. Usar rendeu cerca de 20% mais que vender, e é esse o número que deve guiar a decisão, não o desconto aparente sobre a tarifa cheia.',
    },
    { t: 'h2', id: 'passo-a-passo', text: 'Passo a passo da emissão' },
    {
      t: 'ol',
      items: [
        'Acumule no programa certo para a rota que você quer voar (veja o <a href="/programas-de-milhas/">comparativo de programas</a>).',
        'Pesquise a emissão em milhas E o preço em dinheiro: a razão entre os dois diz se a emissão vale a pena.',
        'Calcule o valor do milheiro embutido: preço em dinheiro ÷ milhas pedidas × 1.000. Abaixo da cotação de venda, venda as milhas e compre em dinheiro; acima, emita.',
        'Emita com os dados corretos de todos os passageiros. Alterações depois custam caro.',
        'Pague a taxa de embarque <strong>em dinheiro</strong>, de preferência num cartão que pontue: até a taxa vira milha. Nunca pague a taxa com milhas (veja o porquê abaixo).',
      ],
    },
    {
      t: 'table',
      caption: 'Quanto vale o seu saldo em dinheiro, pela nossa apuração de agosto de 2026',
      head: ['Saldo', 'Smiles', 'LATAM Pass', 'Azul Fidelidade'],
      rows: [
        ['5.000 milhas', 'R$ 75', 'R$ 115', 'R$ 75'],
        ['10.000 milhas', 'R$ 150', 'R$ 230', 'R$ 150'],
        ['20.000 milhas', 'R$ 300', 'R$ 460', 'R$ 300'],
        ['50.000 milhas', 'R$ 750', 'R$ 1.150', 'R$ 750'],
        ['100.000 milhas', 'R$ 1.500', 'R$ 2.300', 'R$ 1.500'],
      ],
      note: 'Calculado sobre o valor de referência da nossa <a href="/cotacao-do-milheiro/">cotação do milheiro</a> de agosto de 2026 (R$ 15 no Smiles e no Azul, R$ 23 no LATAM Pass). É quanto o mercado paga pelo saldo, não quanto ele economiza numa emissão.',
    },
    {
      t: 'p',
      html: 'Esta tabela existe para você ter um <strong>piso de comparação</strong>. Antes de emitir, olhe o preço da passagem em dinheiro e compare com a coluna do seu programa: se a emissão economiza <strong>menos</strong> do que o saldo valeria vendido, emitir está destruindo valor. Se economiza mais, emitir é o melhor uso. A <a href="/calculadora-de-milhas/">calculadora</a> faz essa conta com o seu número.',
    },
    {
      t: 'callout',
      tone: 'warn',
      title: 'Nunca pague a taxa de embarque com milhas',
      html: 'Os programas oferecem essa opção e ela é sempre ruim. Na emissão que simulamos em 14/09/2026, a Smiles cobrava R$ 96,29 de taxa e aceitava pagá-la de cinco formas. Convertendo cada uma em valor por milheiro: <strong>7.600 milhas equivalem a R$ 12,67</strong>; 5.400 milhas + R$ 24 a R$ 13,39; 4.100 milhas + R$ 48 a R$ 11,78; e 2.700 milhas + R$ 72 a apenas <strong>R$ 9,00</strong>. Todas abaixo dos R$ 15 que o mercado paga pelo milheiro e muito abaixo dos R$ 17,95 que a mesma milha entrega na passagem. Pague a taxa em dinheiro e guarde a milha para o bilhete.',
    },
    { t: 'h2', id: 'quando-emitir', text: 'Quando emitir: os dois momentos de ouro' },
    {
      t: 'p',
      html: 'O dia da semana muda tudo, e dá para medir. Na busca que fizemos em 14/09/2026 para GRU–REC, o mesmo trecho variou de <strong>22.600 milhas na segunda-feira a 41.300 na quinta</strong> da mesma semana — <strong>83% de diferença</strong> sem mudar nada além da data. Mover a viagem em um ou dois dias costuma render mais que qualquer outra técnica de economia.',
    },
    {
      t: 'table',
      caption: 'GRU–REC em novembro de 2026: o mesmo trecho, dia a dia',
      head: ['Dia', 'Custo em milhas'],
      rows: [
        ['Sexta, 13/11', '35.900'],
        ['Domingo, 15/11', '23.100'],
        ['<strong>Segunda, 16/11</strong>', '<strong>22.600</strong>'],
        ['Terça, 17/11', '23.100'],
        ['Quarta, 18/11', '40.700'],
        ['Quinta, 19/11', '41.300'],
      ],
      note: 'Busca feita pela Equipe Fabricante de Milhas em 14/09/2026, econômica, 1 adulto, tarifa para assinantes do Clube Smiles. Preços de emissão mudam diariamente: o padrão que se repete é a diferença entre meio e fim de semana, não os números exatos.',
    },
    {
      t: 'p',
      html: 'As melhores tabelas aparecem em dois extremos: <strong>bem antecipado</strong> (assentos promocionais liberados na abertura do calendário) e <strong>em promoções-relâmpago</strong>, quando programas baixam o custo de rotas específicas por horas ou dias. O meio do caminho (busca de última hora sem promoção) é onde as milhas valem menos.',
    },
    { t: 'h2', id: 'multiplicar', text: 'Como fazer o saldo render mais' },
    {
      t: 'ul',
      items: [
        '<strong>Seja flexível</strong>: mudar a data em 2–3 dias ou usar aeroporto alternativo frequentemente corta o custo em milhas pela metade.',
        '<strong>Reserve o saldo para emissões caras</strong>: internacional e classe executiva costumam entregar mais valor por milha que voo doméstico barato.',
        '<strong>Compare programas parceiros</strong>: a mesma rota pode custar menos milhas emitida por um programa parceiro do que pelo programa da própria companhia.',
        '<strong>Monitore promoções</strong>: as melhores oportunidades duram horas. Quem acompanha canais e alertas emite; quem não acompanha paga tabela cheia.',
      ],
    },
    { t: 'h2', id: 'executiva', text: 'E voar de executiva com milhas?' },
    {
      t: 'p',
      html: 'É o uso mais eficiente do saldo em termos de valor por milha: bilhetes de executiva que custariam dezenas de milhares de reais saem por um volume de milhas proporcionalmente menor. Exige mais saldo e mais flexibilidade. É o objetivo natural de quem já domina o acúmulo. Comece pelo básico, mas saiba que é para lá que o jogo evolui.',
    },
    { t: 'cta' },
  ],
  faq: [
    {
      q: 'Viajar com milhas é realmente de graça?',
      a: 'Não é de graça, e o desconto é menor do que se costuma dizer. A tarifa sai do saldo de milhas, mas a taxa de embarque é paga em dinheiro: numa emissão GRU–REC que simulamos em setembro de 2026, foram R$ 96,29 de taxa na ida e volta. E se você valorizar suas milhas pelo preço de mercado, a economia real naquele trecho foi de cerca de 15%, não de 90%. O ganho verdadeiro é outro: a milha usada na passagem rendeu R$ 17,95 por milheiro contra os R$ 15 que o mercado paga por ela.',
    },
    {
      q: 'Com quantas milhas consigo viajar?',
      a: 'Trechos domésticos promocionais aparecem por valores a partir de poucos milhares de milhas; internacionais pedem dezenas de milhares. Os números mudam diariamente por rota, data e programa. A flexibilidade de datas reduz drasticamente o custo.',
    },
    {
      q: 'É melhor usar milhas ou vender e comprar a passagem?',
      a: 'Faça a conta do milheiro embutido: preço em dinheiro dividido pelas milhas pedidas, vezes mil. Se o resultado ficar abaixo da cotação de venda do milheiro, vale mais vender as milhas e comprar em dinheiro; se ficar acima, a emissão vence.',
    },
    {
      q: 'Milhas servem para hotel, carro e outros gastos de viagem?',
      a: 'Muitos programas permitem, mas o valor por milha nessas trocas costuma ser bem pior que em passagens. Como regra editorial: milha rende mais em avião. Use em hotel ou carro apenas quando houver promoção específica ou saldo perto de expirar.',
    },
  ],
  related: [
    { slug: '/como-acumular-milhas/', anchor: 'Acumule as milhas da sua próxima viagem' },
    { slug: '/programas-de-milhas/', anchor: 'Qual programa tem a melhor malha para você' },
    { slug: '/como-ganhar-dinheiro-com-milhas/', anchor: 'Usar ou vender? A conta completa' },
  ],
  checks: [
  ],
}

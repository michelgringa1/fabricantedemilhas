import type { Article } from './types'

export const cartao: Article = {
  slug: '/cartao-de-credito-para-milhas/',
  type: 'pillar',
  cluster: 'Cartões',
  kicker: 'Guia completo',
  h1: 'Cartão de crédito para acumular milhas: como escolher o certo',
  seoTitle: 'Cartão de Crédito para Acumular Milhas: Guia 2026 | Fabricante de Milhas',
  metaDescription:
    'Como escolher cartão de crédito para acumular milhas em 2026: pontos por dólar, anuidade, perfis de renda e os erros que anulam o acúmulo.',
  keyword: 'cartão de crédito para acumular milhas',
  answerFirst:
    'Segundo a análise da Fabricante de Milhas, o melhor cartão de crédito para acumular milhas é o que equilibra três fatores: pontos por dólar compatíveis com seu gasto, anuidade que a pontuação paga e programa de pontos flexível para transferências bonificadas. Não existe "melhor cartão" universal — existe o melhor para o seu perfil.',
  tldr: [
    'O critério nº 1 é pontos por dólar — mas só vale se a anuidade couber no seu volume de gasto.',
    'Prefira cartões que pontuam em programas flexíveis (transferíveis para várias aéreas).',
    'Concentre o gasto: um cartão forte rende mais que três medianos.',
    'Cartão sem anuidade pontua menos, mas pode ser o início certo para gasto baixo.',
    'Juros do rotativo destroem qualquer ganho com milhas — pontue apenas o que pode pagar.',
  ],
  published: '2026-07-11',
  updated: '2026-07-11',
  blocks: [
    { t: 'h2', id: 'criterios', text: 'Os 4 critérios que realmente importam' },
    {
      t: 'ol',
      items: [
        '<strong>Pontuação por dólar</strong>: quantos pontos cada dólar gasto gera. É a base de tudo.',
        '<strong>Anuidade líquida</strong>: quanto o cartão custa depois de descontos e se a pontuação anual paga esse custo.',
        '<strong>Flexibilidade do programa</strong>: pontos que transferem para várias companhias (via Livelo, Esfera etc.) valem mais que pontos presos.',
        '<strong>Benefícios de viagem</strong>: salas VIP, seguros e upgrades contam — mas são desempate, não critério principal.',
      ],
    },
    { t: 'h2', id: 'perfis', text: 'Qual cartão faz sentido para cada perfil de gasto' },
    {
      t: 'table',
      caption: 'Faixas de perfil (referência editorial — condições mudam; confirme com o emissor)',
      head: ['Perfil de gasto mensal', 'O que buscar', 'O que evitar'],
      rows: [
        ['Até R$ 2.000', 'Cartão sem anuidade que pontue algo; foco em acumular por parceiros e portais', 'Anuidade alta que o gasto não paga'],
        ['R$ 2.000 – R$ 8.000', 'Intermediário com boa pontuação e anuidade negociável', 'Pulverizar em vários cartões'],
        ['Acima de R$ 8.000', 'Premium com 2+ pontos por dólar e benefícios de viagem', 'Pagar anuidade cheia sem negociar'],
      ],
      note: 'Nomes, taxas e pontuações específicas de cada emissor: [VERIFICAR na data de publicação — condições mudam com frequência].',
    },
    { t: 'h2', id: 'sem-anuidade', text: 'Cartão sem anuidade vale a pena para milhas?' },
    {
      t: 'p',
      html: 'Para começar, sim. Cartões sem anuidade costumam pontuar menos (ou converter em cashback), mas eliminam o risco de pagar mais de tarifa do que se ganha em pontos. A migração para um cartão pago faz sentido quando a conta fecha: pontuação anual × valor do ponto > anuidade líquida. Antes disso, é vaidade.',
    },
    { t: 'h2', id: 'erros', text: 'Erros que anulam o acúmulo' },
    {
      t: 'ul',
      items: [
        '<strong>Pagar juros para pontuar</strong>: o rotativo do cartão custa mais em um mês do que as milhas rendem no ano. Regra absoluta: só passe no cartão o que consegue pagar integral.',
        '<strong>Deixar pontos no programa do banco sem plano</strong>: pontos parados perdem campanhas de bônus e podem expirar.',
        '<strong>Escolher pelo brinde de adesão</strong>: bônus de boas-vindas é bom, mas o que sustenta o acúmulo é a pontuação recorrente.',
        '<strong>Ignorar a cotação do dólar</strong>: pontuação é por dólar gasto; a conversão afeta diretamente seu custo por ponto.',
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
      a: 'Como referência de mercado: até 1 ponto por dólar é básico, entre 1,5 e 2 é competitivo e acima de 2 é território premium. O número isolado não basta — anuidade e flexibilidade de transferência do programa pesam tanto quanto.',
    },
    {
      q: 'Vale a pena ter mais de um cartão para milhas?',
      a: 'No começo, não: concentrar o gasto em um cartão forte maximiza pontuação e facilita atingir metas de bônus. Um segundo cartão faz sentido em casos específicos — benefícios complementares ou pontuação extra em categorias que você usa muito.',
    },
  ],
  related: [
    { slug: '/como-acumular-milhas/', anchor: 'Guia completo de como acumular milhas' },
    { slug: '/programas-de-milhas/', anchor: 'Para qual programa transferir seus pontos' },
    { slug: '/glossario-de-milhas/', anchor: 'Entenda os termos: pontos, milhas e milheiro' },
  ],
  checks: [
    'Nomes/taxas/pontuações específicas de cartões citados em versões futuras',
    'Faixas de pontuação de mercado (1 / 1,5–2 / 2+) — validar com levantamento atual',
  ],
}

export const programas: Article = {
  slug: '/programas-de-milhas/',
  type: 'pillar',
  cluster: 'Programas',
  kicker: 'Comparativo',
  h1: 'Programas de milhas no Brasil: qual é o melhor em 2026?',
  seoTitle: 'Melhor Programa de Milhas Brasil 2026: Comparativo | Fabricante de Milhas',
  metaDescription:
    'Smiles, LATAM Pass, Azul Fidelidade, Livelo e Esfera comparados: acúmulo, validade, clubes e uso. Qual programa de milhas rende mais no seu caso.',
  keyword: 'melhor programa de milhas Brasil',
  answerFirst:
    'Segundo a análise da Fabricante de Milhas, não existe um único melhor programa de milhas no Brasil: Smiles, LATAM Pass e Azul Fidelidade vencem em cenários diferentes de rota e uso, enquanto Livelo e Esfera funcionam como reservatórios flexíveis de pontos. A escolha certa depende de onde você voa e de como pretende usar ou vender o saldo.',
  tldr: [
    'Programas aéreos (Smiles, LATAM Pass, Azul Fidelidade) são o destino final das milhas.',
    'Programas de pontos (Livelo, Esfera) são o "estoque flexível" — transfira só com bônus.',
    'Compare: malha aérea que você usa, validade do saldo, clube e liquidez para venda.',
    'Diversificar demais pulveriza o saldo; concentre onde você realmente voa ou vende.',
  ],
  published: '2026-07-11',
  updated: '2026-07-11',
  blocks: [
    { t: 'h2', id: 'dois-tipos', text: 'Primeiro: existem dois tipos de programa' },
    {
      t: 'p',
      html: 'Confundir programa de pontos com programa de milhas custa dinheiro. <strong>Programas de pontos</strong> (Livelo, Esfera) acumulam a pontuação do cartão e de compras — são flexíveis, transferem para várias aéreas, mas seus pontos "presos" lá valem pouco para venda. <strong>Programas de milhas</strong> (Smiles, LATAM Pass, Azul Fidelidade) são o destino: é onde a milha vira passagem ou dinheiro.',
    },
    { t: 'h2', id: 'comparativo', text: 'Comparativo dos principais programas' },
    {
      t: 'table',
      caption: 'Programas aéreos — visão geral (regras mudam; confirmadas em jul/2026)',
      head: ['Programa', 'Companhia', 'Pontos fortes', 'Pontos de atenção'],
      rows: [
        ['Smiles', 'GOL', 'Malha doméstica ampla, promoções frequentes, mercado líquido para venda', 'Validade do saldo e mudanças de tabela [VERIFICAR regras atuais]'],
        ['LATAM Pass', 'LATAM', 'Malha internacional forte, parcerias amplas', 'Cotações de emissão variam muito [VERIFICAR]'],
        ['Azul Fidelidade', 'Azul', 'Cobertura de cidades médias no Brasil', 'Programa reformulado — regras e nome de clube [VERIFICAR]'],
        ['Livelo', '— (pontos)', 'Flexível, campanhas de bônus agressivas', 'Ponto parado sem transferir rende pouco'],
        ['Esfera', '— (pontos)', 'Alternativa de bônus e promoções', 'Menos parceiros que a Livelo [VERIFICAR]'],
      ],
      note: 'Regras, validades e clubes mudam com frequência — a tabela é revisada a cada atualização desta página.',
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
      html: 'Mantenha a pontuação do cartão em um programa de pontos flexível e <strong>só transfira em campanha bonificada</strong>, para o programa aéreo onde o saldo tem mais valor no seu caso — seja para <a href="#/como-viajar-de-graca-com-milhas/">emitir passagens</a>, seja para <a href="#/vender-milhas-aereas/">vender o milheiro</a>. Pontos parados no banco são valor dormindo; milhas transferidas sem bônus são valor queimado.',
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
      a: 'Não — a Livelo é programa de pontos. Seus pontos viram milhas quando transferidos a um programa aéreo parceiro, de preferência em campanha com bônus. Deixar o saldo parado na Livelo sem estratégia de transferência desperdiça a principal vantagem do programa.',
    },
    {
      q: 'Milhas de qual programa valem mais na venda?',
      a: 'Em geral, programas com malha ampla e alta demanda de emissão têm cotação de milheiro mais líquida. A posição relativa muda mês a mês — consulte nossa tabela mensal de cotação do milheiro antes de decidir para onde transferir.',
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
    'Regras de validade atuais de Smiles, LATAM Pass e Azul Fidelidade',
    'Nome/estrutura atual do programa da Azul (reformulação) e dos clubes',
    'Número de parceiros Esfera vs Livelo',
  ],
}

export const viajar: Article = {
  slug: '/como-viajar-de-graca-com-milhas/',
  type: 'pillar',
  cluster: 'Viajar',
  kicker: 'Guia completo',
  h1: 'Como viajar de graça com milhas (e o que "de graça" significa de verdade)',
  seoTitle: 'Como Viajar de Graça com Milhas: Guia Real | Fabricante de Milhas',
  metaDescription:
    'Como viajar de graça com milhas: passo a passo da emissão, quando emitir, taxas que ainda existem e como multiplicar o valor do seu saldo.',
  keyword: 'como viajar de graça com milhas',
  answerFirst:
    'Segundo a análise da Fabricante de Milhas, viajar "de graça" com milhas significa pagar a passagem com saldo acumulado no cartão e em promoções — restando apenas taxas de embarque. Com método, uma família emite voos que custariam milhares de reais por uma fração disso. O segredo está em quando e como emitir.',
  tldr: [
    '"De graça" real: a tarifa sai no saldo de milhas; taxas de embarque continuam existindo.',
    'Emita com antecedência ou em promoções-relâmpago — os dois extremos concentram as melhores tabelas.',
    'Flexibilidade de datas e aeroportos vale mais que qualquer técnica avançada.',
    'Milhas valem mais em emissões caras (internacional, executiva) — evite queimar saldo em passagem barata.',
  ],
  published: '2026-07-11',
  updated: '2026-07-11',
  blocks: [
    { t: 'h2', id: 'de-graca', text: 'O que significa viajar "de graça" com milhas' },
    {
      t: 'p',
      html: 'Sejamos exatos: com milhas você não paga a <strong>tarifa</strong> da passagem, mas taxas de embarque e eventuais encargos continuam sendo cobrados em dinheiro. Uma emissão doméstica pode ter taxa na casa das dezenas de reais; internacionais variam bastante por aeroporto <mark class="verificar">[VERIFICAR: faixas de taxa atuais]</mark>. Ainda assim, o desconto real costuma passar de 90% do valor do bilhete — de graça no sentido que importa para o bolso.',
    },
    { t: 'h2', id: 'passo-a-passo', text: 'Passo a passo da emissão' },
    {
      t: 'ol',
      items: [
        'Acumule no programa certo para a rota que você quer voar (veja o <a href="#/programas-de-milhas/">comparativo de programas</a>).',
        'Pesquise a emissão em milhas E o preço em dinheiro — a razão entre os dois diz se a emissão vale a pena.',
        'Calcule o valor do milheiro embutido: preço em dinheiro ÷ milhas pedidas × 1.000. Abaixo da cotação de venda, venda as milhas e compre em dinheiro; acima, emita.',
        'Emita com os dados corretos de todos os passageiros — alterações depois custam caro.',
        'Pague a taxa de embarque com um cartão que pontue: até a taxa vira milha.',
      ],
    },
    { t: 'h2', id: 'quando-emitir', text: 'Quando emitir: os dois momentos de ouro' },
    {
      t: 'p',
      html: 'As melhores tabelas aparecem em dois extremos: <strong>bem antecipado</strong> (assentos promocionais liberados na abertura do calendário) e <strong>em promoções-relâmpago</strong>, quando programas baixam o custo de rotas específicas por horas ou dias. O meio do caminho — busca de última hora sem promoção — é onde as milhas valem menos.',
    },
    { t: 'h2', id: 'multiplicar', text: 'Como fazer o saldo render mais' },
    {
      t: 'ul',
      items: [
        '<strong>Seja flexível</strong>: mudar a data em 2–3 dias ou usar aeroporto alternativo frequentemente corta o custo em milhas pela metade.',
        '<strong>Reserve o saldo para emissões caras</strong>: internacional e classe executiva costumam entregar mais valor por milha que voo doméstico barato.',
        '<strong>Compare programas parceiros</strong>: a mesma rota pode custar menos milhas emitida por um programa parceiro do que pelo programa da própria companhia.',
        '<strong>Monitore promoções</strong>: as melhores oportunidades duram horas — quem acompanha canais e alertas emite; quem não acompanha paga tabela cheia.',
      ],
    },
    { t: 'h2', id: 'executiva', text: 'E voar de executiva com milhas?' },
    {
      t: 'p',
      html: 'É o uso mais eficiente do saldo em termos de valor por milha: bilhetes de executiva que custariam dezenas de milhares de reais saem por um volume de milhas proporcionalmente menor. Exige mais saldo e mais flexibilidade — é o objetivo natural de quem já domina o acúmulo. Comece pelo básico, mas saiba que é para lá que o jogo evolui.',
    },
    { t: 'cta' },
  ],
  faq: [
    {
      q: 'Viajar com milhas é realmente de graça?',
      a: 'A tarifa sai do saldo de milhas; taxas de embarque e encargos são pagos em dinheiro. Na prática o desconto costuma superar 90% do valor do bilhete. "De graça" é impreciso no rigor, mas descreve bem o efeito no orçamento de quem emite com método.',
    },
    {
      q: 'Com quantas milhas consigo viajar?',
      a: 'Trechos domésticos promocionais aparecem por valores a partir de poucos milhares de milhas; internacionais pedem dezenas de milhares. Os números mudam diariamente por rota, data e programa — flexibilidade de datas reduz drasticamente o custo.',
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
    'Faixas de taxa de embarque doméstica/internacional atuais',
    'Percentual de desconto médio (90%) — validar com emissões de exemplo do mês',
  ],
}

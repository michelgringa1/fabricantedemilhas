import { Seo, breadcrumbLd, ORG_ID, BASE_URL } from '@/lib/seo'
import { PageHero } from '@/components/blocks'
import { CONTACT_EMAIL } from '@/data/site'
import type { ReactNode } from 'react'

function Shell({ title, slug, children }: { title: string; slug: string; children: ReactNode }) {
  return (
    <>
      <PageHero trail={[[title, slug]]} chip="Institucional" title={title} />
      <div className="bg-paper">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <div className="article-body">{children}</div>
        </div>
      </div>
    </>
  )
}

export function Sobre() {
  return (
    <>
      <Seo
        title="Sobre a Fabricante de Milhas: Quem Somos e Como Trabalhamos"
        description="A Fabricante de Milhas é uma publicação sobre milhas aéreas: quem somos, o que fazemos, o que não fazemos e como ganhamos dinheiro."
        slug="/sobre/"
        jsonLd={[
          { '@type': 'AboutPage', name: 'Sobre a Fabricante de Milhas', url: BASE_URL + '/sobre/', mainEntity: { '@id': ORG_ID } },
          breadcrumbLd([['Sobre', '/sobre/']]),
        ]}
      />
      <Shell title="Sobre a Fabricante de Milhas" slug="/sobre/">
        <p>
          A <strong>Fabricante de Milhas</strong> é uma publicação sobre milhas aéreas no
          Brasil. Produzimos guias práticos, análises de cursos e dados de referência, escritos pela{' '}
          <strong>Equipe Fabricante de Milhas</strong>, nossa redação editorial, e revisados por humanos antes de
          qualquer publicação.
        </p>
        <h2 id="o-que-fazemos">O que fazemos</h2>
        <ul>
          <li>Guias gratuitos de acúmulo, venda e uso de milhas, atualizados periodicamente;</li>
          <li>Análises completas de cursos de milhas, com prós e contras reais e <a href="#/metodologia/">metodologia pública</a>;</li>
          <li>Dados próprios, como a tabela mensal de referência da cotação do milheiro.</li>
        </ul>
        <h2 id="o-que-nao-fazemos">O que NÃO fazemos</h2>
        <ul>
          <li><strong>Não vendemos curso próprio</strong>: avaliamos cursos de terceiros, em terceira pessoa;</li>
          <li><strong>Não prometemos ganho garantido</strong>: resultados com milhas variam conforme dedicação, capital e mercado;</li>
          <li><strong>Não gerenciamos milhas de leitores</strong> nem pedimos senhas ou dados de programas de fidelidade;</li>
          <li><strong>Não temos parceria com bancos</strong>, companhias aéreas ou programas de fidelidade.</li>
        </ul>
        <h2 id="como-ganhamos">Como ganhamos dinheiro</h2>
        <p>
          Por afiliação: quando você compra um curso pelos nossos links, recebemos comissão sem custo extra para
          você. O aviso geral fica no rodapé do site, e a comissão não altera a nota: os contras
          ficam no texto, inclusive dos produtos que recomendamos. Detalhes na{' '}
          <a href="#/divulgacao-de-afiliados/">divulgação de afiliados</a>.
        </p>
        <h2 id="contato">Contato</h2>
        <p>
          Fale com a equipe: <a href={'mailto:' + CONTACT_EMAIL}>{CONTACT_EMAIL}</a> ou pela página de{' '}
          <a href="#/contato/">contato</a>.
        </p>
      </Shell>
    </>
  )
}

export function Metodologia() {
  return (
    <>
      <Seo
        title="Metodologia de Avaliação de Cursos | Fabricante de Milhas"
        description="Como a Fabricante de Milhas avalia cursos de milhas: 6 critérios com pesos públicos, processo de análise, independência editorial e política de atualização."
        slug="/metodologia/"
        jsonLd={[breadcrumbLd([['Metodologia', '/metodologia/']])]}
      />
      <Shell title="Nossa metodologia de avaliação" slug="/metodologia/">
        <p>
          Toda nota publicada pela Fabricante de Milhas sai do mesmo processo, com critérios e pesos públicos.
          Esta página existe para você conferir a régua e nos cobrar por ela.
        </p>
        <h2 id="criterios">Os 6 critérios e seus pesos</h2>
        <ul>
          <li><strong>Conteúdo e didática (25%)</strong>: cobertura do básico ao avançado, organização, clareza e profundidade das aulas.</li>
          <li><strong>Custo-benefício (20%)</strong>: preço em relação à entrega, formas de pagamento, comparação com o mercado.</li>
          <li><strong>Suporte e comunidade (15%)</strong>: canais de dúvida, monitorias, ritmo do grupo de promoções ao longo do tempo.</li>
          <li><strong>Reputação e confiança (20%)</strong>: Reclame Aqui, empresa registrada, histórico público do produtor, consistência entre promessa e entrega.</li>
          <li><strong>Garantia e transparência (10%)</strong>: política de reembolso, clareza das condições, ausência de letra miúda enganosa.</li>
          <li><strong>Atualização (10%)</strong>: frequência de novas aulas e adaptação a mudanças de regras do mercado.</li>
        </ul>
        <h2 id="processo">O processo, passo a passo</h2>
        <ol>
          <li>Levantamento de dados públicos: página oficial, preços, garantia, empresa (CNPJ), Reclame Aqui e imprensa;</li>
          <li>Análise do conteúdo e da estrutura do curso;</li>
          <li>Leitura de padrões de elogio e reclamação de alunos (sem expor nomes);</li>
          <li>Redação da análise com prós e contras reais (contras genéricos não contam);</li>
          <li><strong>Validação humana de todos os fatos</strong> (preço, garantia, números) antes de publicar;</li>
          <li>Revisão da página a cada 3–6 meses, com data de atualização visível.</li>
        </ol>
        <h2 id="independencia">Comissão não compra nota</h2>
        <p>
          Somos remunerados por afiliação, como detalhado na <a href="#/divulgacao-de-afiliados/">página de divulgação</a> (link no rodapé). A comissão não compra
          nota: avaliamos com a mesma régua produtos com e sem programa de afiliados, e publicamos os contras
          dos cursos que recomendamos. Se um produto piora, a nota desce na revisão seguinte.
        </p>
        <h2 id="erros">Achou um erro?</h2>
        <p>
          Dados de mercado mudam rápido. Se encontrar informação desatualizada, escreva para{' '}
          <a href={'mailto:' + CONTACT_EMAIL}>{CONTACT_EMAIL}</a>. Corrigimos e registramos a atualização.
        </p>
      </Shell>
    </>
  )
}

export function Divulgacao() {
  return (
    <>
      <Seo
        title="Divulgação de Afiliados | Fabricante de Milhas"
        description="Transparência total: como funcionam os links de afiliado da Fabricante de Milhas, o que ganhamos e o que isso muda (e não muda) nas nossas análises."
        slug="/divulgacao-de-afiliados/"
        jsonLd={[breadcrumbLd([['Divulgação de afiliados', '/divulgacao-de-afiliados/']])]}
      />
      <Shell title="Divulgação de afiliados" slug="/divulgacao-de-afiliados/">
        <p>
          A Fabricante de Milhas participa de programas de afiliados. Em termos simples:{' '}
          <strong>alguns links deste site são links de afiliado</strong>: se você clicar e comprar, recebemos
          uma comissão paga pelo produtor, <strong>sem custo extra para você</strong>.
        </p>
        <h2 id="onde">Onde há links de afiliado</h2>
        <ul>
          <li>Nas análises e comparadores de cursos (ex.: análise do Fábrica de Milhas);</li>
          <li>No CTA padrão ao fim de artigos de conteúdo, sempre identificado;</li>
          <li>Nunca em páginas institucionais, políticas ou no glossário.</li>
        </ul>
        <p>
          Todo link de afiliado é marcado tecnicamente com <code>rel="sponsored nofollow"</code>, e o aviso
          geral fica no rodapé de todas as páginas do site.
        </p>
        <h2 id="o-que-muda">O que isso muda nas análises, e o que não muda</h2>
        <p>
          A comissão financia o site; ela <strong>não define nota nem esconde contras</strong>. Nossa{' '}
          <a href="#/metodologia/">metodologia é pública</a>, os contras dos produtos recomendados ficam no
          texto, e reportamos dados desfavoráveis (como reputação no Reclame Aqui) mesmo quando somos afiliados
          do produto analisado.
        </p>
        <h2 id="promessas">Sobre promessas de ganho</h2>
        <p>
          Não prometemos, e não permitimos que nossas páginas prometam, renda garantida com milhas.
          Resultados variam conforme dedicação, capital disponível e condições de mercado. Qualquer promessa
          citada de páginas de vendas de terceiros é reportada como promessa deles, não como fato nosso.
        </p>
        <p>
          Dúvidas sobre esta política: <a href={'mailto:' + CONTACT_EMAIL}>{CONTACT_EMAIL}</a>.
        </p>
      </Shell>
    </>
  )
}

export function Contato() {
  return (
    <>
      <Seo
        title="Contato | Fabricante de Milhas"
        description="Fale com a Equipe Fabricante de Milhas: dúvidas sobre guias, correções de dados, sugestões de pauta e parcerias editoriais."
        slug="/contato/"
        jsonLd={[
          { '@type': 'ContactPage', name: 'Contato: Fabricante de Milhas', url: BASE_URL + '/contato/', mainEntity: { '@id': ORG_ID } },
          breadcrumbLd([['Contato', '/contato/']]),
        ]}
      />
      <Shell title="Contato" slug="/contato/">
        <p>
          Fale com a Equipe Fabricante de Milhas. Respondemos dúvidas sobre os guias, corrigimos dados
          desatualizados e recebemos sugestões de pauta.
        </p>
        <ul>
          <li>
            <strong>E-mail:</strong> <a href={'mailto:' + CONTACT_EMAIL}>{CONTACT_EMAIL}</a>
          </li>
          <li>
            <strong>Correções:</strong> encontrou preço, regra ou cotação desatualizada? Aponte a página e a
            informação, e atualizamos e registramos a data.
          </li>
          <li>
            <strong>Parcerias:</strong> avaliamos apenas parcerias compatíveis com nossa{' '}
            <a href="#/metodologia/">metodologia</a> e com a <a href="#/divulgacao-de-afiliados/">política de divulgação</a>.
          </li>
        </ul>
        <p>
          <strong>Importante:</strong> nunca pedimos senhas, códigos ou acesso às suas contas de programas de
          fidelidade. Se alguém pedir em nosso nome, é golpe.
        </p>
      </Shell>
    </>
  )
}

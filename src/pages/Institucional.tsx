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
        description="A Fabricante de Milhas é uma publicação sobre milhas aéreas: quem somos, o que fazemos, como preparamos o conteúdo e como o site se mantém."
        slug="/sobre/"
        jsonLd={[
          { '@type': 'AboutPage', name: 'Sobre a Fabricante de Milhas', url: BASE_URL + '/sobre/', mainEntity: { '@id': ORG_ID } },
          breadcrumbLd([['Sobre', '/sobre/']]),
        ]}
      />
      <Shell title="Sobre a Fabricante de Milhas" slug="/sobre/">
        <p>
          A <strong>Fabricante de Milhas</strong> é uma publicação sobre milhas aéreas no
          Brasil. Produzimos guias práticos, páginas sobre o curso Fábrica de Milhas e dados de referência,
          escritos pela <strong>Equipe Fabricante de Milhas</strong>, nossa redação editorial.
        </p>
        <h2 id="o-que-fazemos">O que fazemos</h2>
        <ul>
          <li>Guias gratuitos de acúmulo, venda e uso de milhas, atualizados periodicamente;</li>
          <li>Páginas completas sobre o curso Fábrica de Milhas e sobre o Rodrigo Góes, com preço, garantia e níveis;</li>
          <li>Dados próprios, como a tabela de referência da cotação do milheiro e o registro de campanhas de bônus.</li>
        </ul>
        <h2 id="como-preparamos">Como preparamos o conteúdo</h2>
        <ul>
          <li>Preço, garantia, níveis e números vêm da página oficial de cada curso, lida na data indicada em cada página;</li>
          <li>Falamos sobre o Rodrigo Góes sempre em terceira pessoa: este não é o site oficial dele nem de nenhum programa de fidelidade;</li>
          <li>As páginas se baseiam em fontes oficiais e públicas, não em relatos pessoais como aluno;</li>
          <li>Resultados com milhas variam conforme dedicação, capital e mercado, e nenhum ganho é garantido;</li>
          <li>Não gerenciamos milhas de leitores nem pedimos senhas ou dados de programas de fidelidade.</li>
        </ul>
        <h2 id="como-ganhamos">Como ganhamos dinheiro</h2>
        <p>
          Por afiliação: quando você compra um curso pelos nossos links, recebemos comissão sem custo extra para
          você. O aviso geral fica no rodapé do site. Detalhes na{' '}
          <a href="/divulgacao-de-afiliados/">divulgação de afiliados</a>.
        </p>
        <h2 id="contato">Contato</h2>
        <p>
          Fale com a equipe: <a href={'mailto:' + CONTACT_EMAIL}>{CONTACT_EMAIL}</a> ou pela página de{' '}
          <a href="/contato/">contato</a>.
        </p>
      </Shell>
    </>
  )
}

export function Metodologia() {
  return (
    <>
      <Seo
        title="Como Preparamos os Conteúdos | Fabricante de Milhas"
        description="Como a Fabricante de Milhas prepara guias e páginas de cursos: fontes oficiais lidas na hora, datas de leitura, revisão periódica e correções."
        slug="/metodologia/"
        jsonLd={[breadcrumbLd([['Metodologia', '/metodologia/']])]}
      />
      <Shell title="Como preparamos os conteúdos" slug="/metodologia/">
        <p>
          Toda página da Fabricante de Milhas segue o mesmo processo, com fontes identificadas e datas de leitura.
          Esta página existe para você conferir como trabalhamos e nos cobrar por isso.
        </p>
        <h2 id="o-que-olhamos">O que olhamos em cada curso</h2>
        <ul>
          <li><strong>Conteúdo e didática</strong>: cobertura do básico ao avançado, organização e clareza das aulas;</li>
          <li><strong>Preço e formas de pagamento</strong>: valores à vista e parcelados na página oficial;</li>
          <li><strong>Suporte e comunidade</strong>: canais de dúvida, monitorias e grupo de promoções;</li>
          <li><strong>Produtor e empresa</strong>: empresa registrada, histórico público e presença na imprensa;</li>
          <li><strong>Garantia</strong>: política de reembolso e condições;</li>
          <li><strong>Atualização</strong>: frequência de novas aulas e adaptação às mudanças do mercado.</li>
        </ul>
        <h2 id="processo">O processo, passo a passo</h2>
        <ol>
          <li>Leitura da página oficial: preço, garantia, conteúdo, bônus e empresa (CNPJ), com a data da leitura;</li>
          <li>Pesquisa de imprensa e de canais oficiais do produtor;</li>
          <li>Redação da página em terceira pessoa, com os destaques do curso e para quem ele é ideal;</li>
          <li>Conferência de cada número contra a fonte, antes de publicar;</li>
          <li>Revisão da página a cada 3 a 6 meses, com data de atualização visível.</li>
        </ol>
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
          <li>Nas páginas do curso Fábrica de Milhas e do Rodrigo Góes, nos botões de inscrição e nos links para o canal e o Instagram dele;</li>
          <li>No CTA padrão ao fim de artigos de conteúdo, sempre identificado;</li>
          <li>Nunca em páginas institucionais, políticas ou no glossário.</li>
        </ul>
        <p>
          Todo link de afiliado é marcado tecnicamente com <code>rel="sponsored nofollow"</code>, e o aviso
          geral fica no rodapé de todas as páginas do site.
        </p>
        <h2 id="o-que-muda">Para que serve a comissão</h2>
        <p>
          A comissão ajuda a manter o site e a produzir guias gratuitos, e não muda o preço que você paga.
        </p>
        <h2 id="promessas">Sobre promessas de ganho</h2>
        <p>
          Não prometemos, e não permitimos que nossas páginas prometam, renda garantida com milhas.
          Resultados variam conforme dedicação, capital disponível e condições de mercado. Resultados
          de alunos citados por terceiros são deles, não garantia nossa.
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
            <strong>Parcerias:</strong> avaliamos apenas parcerias compatíveis com a nossa{' '}
            <a href="/metodologia/">forma de trabalhar</a> e com a <a href="/divulgacao-de-afiliados/">política de divulgação</a>.
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

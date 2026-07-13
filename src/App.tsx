import { useEffect, useRef } from 'react'
import { useRoute } from '@/lib/router'
import { trackPageview } from '@/lib/analytics'
import { bySlug } from '@/data/articles'
import { Header, Footer } from '@/components/layout'
import { Home } from '@/pages/Home'
import { ArticlePage } from '@/pages/ArticlePage'
import { Glossario } from '@/pages/Glossario'
import { Blog, NotFound } from '@/pages/Blog'
import { Sobre, Metodologia, Divulgacao, Contato } from '@/pages/Institucional'
import { Calculadora } from '@/pages/Calculadora'

function Page({ path }: { path: string }) {
  if (path === '/') return <Home />
  if (path === '/blog/') return <Blog />
  if (path === '/glossario-de-milhas/') return <Glossario />
  if (path === '/calculadora-de-milhas/') return <Calculadora />
  if (path === '/sobre/') return <Sobre />
  if (path === '/metodologia/') return <Metodologia />
  if (path === '/divulgacao-de-afiliados/') return <Divulgacao />
  if (path === '/contato/') return <Contato />
  const article = bySlug.get(path)
  if (article) return <ArticlePage article={article} />
  return <NotFound />
}

export default function App() {
  const { path } = useRoute()

  // O snippet do <head> já registra o page_view inicial; aqui cobrimos
  // as navegações internas (troca de hash) pulando o primeiro render.
  const firstRender = useRef(true)
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    trackPageview(path)
  }, [path])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Page path={path} />
      </main>
      <Footer />
    </div>
  )
}

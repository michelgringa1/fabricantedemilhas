import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// POR QUE createRoot E NAO hydrateRoot
//
// O site e pre-renderizado, entao hydrateRoot parece a escolha obvia: reaproveitaria
// o HTML em vez de remontar tudo. Foi testado em 15/09/2026 e NAO funciona aqui.
//
// O motivo esta em scripts/prerender.mjs: o pre-render nao usa renderToString do
// React: ele abre a rota num Chrome headless e salva o DOM com --dump-dom. Isso
// captura o DOM DEPOIS que o app rodou e os efeitos aconteceram, que nao e o
// mesmo que o React espera encontrar ao hidratar. Resultado medido: React error
// #418 (falha de hidratacao) em TODAS as paginas, varias vezes por pagina. O
// React se recupera e o DOM final fica identico, byte a byte, ao pre-renderizado,
// mas o console fica cheio de erro e o ganho nao e verificavel.
//
// O LCP alto (~5,5s na home) e real e continua em aberto. A solucao nao e trocar
// esta linha: exige SSR de verdade (renderToString), o que hoje esbarra nos
// componentes que usam document/window direto — a razao pela qual o pre-render
// via navegador foi escolhido. Ver findings/performance.md.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

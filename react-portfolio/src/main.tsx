import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// fonts come from npm (fontsource) so they load with the site instead of from Google Fonts
import '@fontsource-variable/bricolage-grotesque'
import '@fontsource-variable/manrope'
import './styles/global.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

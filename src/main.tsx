import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import Dashboard from './Dashboard.tsx'
import Router from './Router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
  </StrictMode>,
)

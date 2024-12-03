import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'             // creating routing function
import { BrowserRouter } from 'react-router-dom'
import './index.css'

import Router from './Router.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { PortfolioApp } from './PortfolioApp'
import './index.css'

import '@fontsource/outfit'
import '@fontsource/roboto'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PortfolioApp />
  </React.StrictMode>,
)

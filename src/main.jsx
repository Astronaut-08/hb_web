import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpeedInsights>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SpeedInsights>
  </StrictMode>,
)

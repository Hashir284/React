import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BioProvider } from '../index.jsx'

createRoot(document.getElementById('root')).render(
  <BioProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </BioProvider>
)

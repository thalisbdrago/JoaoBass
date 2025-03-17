import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import Sobre from './pages/Sobre.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Sobre />
    <App />
  </StrictMode>,
)

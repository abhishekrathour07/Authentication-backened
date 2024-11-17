import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import { Toaster, toast } from 'sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <App />
    <Toaster position="bottom-right" />
  </StrictMode>,
)

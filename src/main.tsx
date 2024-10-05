import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Navigation from './components/navigation.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="bg-gray-900" >
    <App />
    <Navigation/>
    </div>
  </StrictMode>,
)

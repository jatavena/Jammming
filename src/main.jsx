import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div id="hero">
      <h1>jammming</h1>
      <h2>The incredible playlist machine</h2>
    </div>
    <div id="App">
      <App />
    </div>
  </StrictMode>,
)

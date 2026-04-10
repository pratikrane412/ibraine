import React from 'react'
import ReactDOM from 'react-dom/client' // Fixes: ReactDOM is not defined
import { BrowserRouter } from 'react-router-dom' // Fixes: context of a <Router>
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
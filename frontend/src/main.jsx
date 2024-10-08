import { StrictMode } from 'react'
import ReactDOM  from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<AuthProvider>
  <div >
  <App/>
  </div>
</AuthProvider>
</BrowserRouter>
)

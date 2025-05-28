import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'


  document.addEventListener("contextmenu", e => e.preventDefault());
  document.onkeydown = e => {
    if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey)) return false;
  };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

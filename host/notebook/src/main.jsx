import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalPropsProvider } from './assets/GlobalProps';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalPropsProvider>
      <App />
    </GlobalPropsProvider>
  </StrictMode>,
)

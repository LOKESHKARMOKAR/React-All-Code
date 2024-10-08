import { createRoot } from 'react-dom/client'
import contextProvider from './context/appContext.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
    <contextProvider>
          <App />
    </contextProvider>
  
  
  
)

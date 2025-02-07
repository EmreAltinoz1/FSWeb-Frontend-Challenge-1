import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider, ThemeContext } from './context/ThemeContext'; // ThemeContext'i import ettik
import { LanguageProvider } from './context/LanguageContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider>
    <LanguageProvider>
      {/* <DataProvider>
        <ToastContainer /> */}
        <App />
      {/* </DataProvider> */}
    </LanguageProvider>
  </ThemeProvider>
</StrictMode>
)

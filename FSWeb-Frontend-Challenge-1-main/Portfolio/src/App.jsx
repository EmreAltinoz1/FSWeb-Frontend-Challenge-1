import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { LanguageContext } from './context/LanguageContext';
import Footer from './components/footer';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar'
import { ThemeProvider } from "./context/ThemeContext";
import Skills from './components/Skills';
import Profile from './components/Profile';
import './index.css';
function App() {
  const [theme, setTheme] = useState('light'); // Tema ayarı
  const [language, setLanguage] = useState('en'); // Dil ayarı

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <div className={`app ${theme}`}>
          {/* Ortak bileşenler */}
          <ThemeProvider>
            <Navbar />
            <HeroSection />
            <Skills />
            <Contact />
            <Profile />
            <Projects />
          <Footer />
          </ThemeProvider>

        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

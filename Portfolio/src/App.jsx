import { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import { LanguageContext } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/footer';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('light'); // Tema ayarı
  const [language, setLanguage] = useState('en'); // Dil ayarı

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <div className={`app ${theme}`}>
          {/* Ortak bileşenler */}
          <Header />
          
          {/* İçerik */}
          <main>
            <HeroSection />
            <Projects />
            <AboutMe />
            <Contact />
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

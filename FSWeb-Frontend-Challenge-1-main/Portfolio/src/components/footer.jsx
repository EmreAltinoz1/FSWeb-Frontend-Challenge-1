import { useState, useEffect, useContext, useMemo } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { ThemeContext } from '../context/ThemeContext';
import en from '../data/dataEn.json';
import tr from '../data/dataTr.json';

const SocialLink = ({ href, text, color }) => {
  const { theme } = useContext(ThemeContext);

  const colorClass = color === 'green' ? (theme === 'dark' ? 'text-green-400' : 'text-green-600')
                   : color === 'blue' ? (theme === 'dark' ? 'text-blue-400' : 'text-blue-600')
                   : (theme === 'dark' ? 'text-white' : 'text-gray-600'); 

  return (
    <a href={href} className={`text-xl ${colorClass} hover:underline`}>
      {text}
    </a>
  );
};

const Footer = () => {
  const { language } = useContext(LanguageContext);

  
  const { theme } = useContext(ThemeContext);
  const translations = useMemo(() => (language === "en" ? en : tr), [language]);

  const socialLinks = [
    { href: '#', text: 'Personal Blog', color: 'white' },
    { href: '#', text: 'Github', color: 'green' },
    { href: '#', text: 'Linkedin', color: 'blue' },
  ];

  
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1500) {
        setShowScrollToTopButton(true); 
      } else {
        setShowScrollToTopButton(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToTop = () => {
    const currentPosition = window.pageYOffset; 
    const targetPosition = 0; 
    const distance = currentPosition - targetPosition;
    const duration = 500; 
    let startTime = null;

    const animateScroll = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOut(timeElapsed, currentPosition, -distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll); 
      }
    };

    const easeInOut = (t, b, c, d) => {
      const easing = (t /= d / 2) < 1
        ? (c / 2) * t * t + b
        : (-c / 2) * (--t * (t - 2) - 1) + b;
      return easing;
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <div className={`flex justify-around gap-96 items-center h-96 px-12 border-t ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50 '}`}>
      <div className="space-y-4">
        <h1 className={`text-4xl w-3/4 font-semibold mb-10 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {translations.fotterTitle}
        </h1>
        <p className="text-red-600 flex items-center gap-2">
          <p>{translations.darkMode}</p>
          <span className="text-yellow-400 text-xl">👉</span>
          <a
            href="mailto:almilasucode@gmail.com"
            className={`underline text-2xl ${theme === 'dark' ? 'text-red-500' : 'text-red-500'}`}
          >
            emrealtinoz210gmail.com
          </a>
        </p>
      </div>

      <div className="flex gap-6 sm:-ml-72">
        {socialLinks.map((link) => (
          <SocialLink key={link.href} {...link} />
        ))}
      </div>

      
      {showScrollToTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 w-20 right-10 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition-all"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Footer;

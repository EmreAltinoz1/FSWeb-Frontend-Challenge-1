import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';


const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center space-x-4">
      <div className="relative inline-block w-12 h-6">
        <input
          type="checkbox"
          id="toggle"
          className="hidden"
          checked={theme === 'dark'}
          onChange={toggleTheme}
        />
        <label
          htmlFor="toggle"
          className={`block w-full h-full rounded-full cursor-pointer ${
            theme === 'dark' ? 'bg-blue-800' : 'bg-blue-800'
          }`}
        ></label>
        <span
          className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-yellow-400 transition-transform transform ${
            theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
          }`}
        ></span>
      </div>
      <span className={`${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'} font-medium`}>
        {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
      </span>
    </div>
  );
};

const LanguageToggle = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button
      onClick={toggleLanguage}
      className="font-medium hover:underline"
    >
      {language === 'tr' ? (
        <>
          <span className="text-blue-500">İNGİLİZCE'YE</span> GEÇ
        </>
      ) : (
        <>
          <span className="text-blue-500">Translate</span> to Turkish
        </>
      )}
    </button>
  );
};

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      <div className="container mx-auto flex justify-end items-center">
        <ThemeToggle />
        <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mx-4`}>|</span>
        <LanguageToggle />
      </div>
    </header>
  );
};

export default Header;
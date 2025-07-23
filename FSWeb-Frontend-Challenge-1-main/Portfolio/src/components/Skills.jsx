import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';  
import { LanguageContext } from '../context/LanguageContext'; 
import en from '../data/dataEn.json';  
import tr from '../data/dataTr.json';  
// import Slider from 'react-slick';

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  const translations = language === 'en' ? en : tr;

  const skillsData = [
    { title: "JavaScript", description: translations.react },
    { title: "React.js", description: translations.redux },
    { title: "Node.js", description: translations.axios },
  ];

  return (
    <div className={`py-12 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-4xl font-bold mb-12 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          {translations.skills}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="md:text-left">
              <h3 className={`text-2xl font-semibold mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-800'}`}>
                {skill.title}
              </h3>
              <p className={`text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

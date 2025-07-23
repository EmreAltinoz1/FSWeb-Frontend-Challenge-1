import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from '../context/LanguageContext';
import en from '../data/dataEn.json';
import tr from '../data/dataTr.json';
import projects from '../data/projects.json';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 


const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute -ml-7 top-1/2 -left-8 transform -translate-y-1/2 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-110"
    onClick={onClick}
  >
    <span className="text-2xl -mt-2 font-semibold">‹</span>
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute -mr-7 top-1/2 -right-8 transform -translate-y-1/2 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-700 hover:scale-110"
    onClick={onClick}
  >
    <span className="text-2xl -mt-2 font-semibold">›</span>
  </button>
);

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const translations = language === 'en' ? en : tr;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:3,
    slidesToScroll: 3,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };
  
  
  
  return (
    <div className={`mb-20 flex justify-stretch ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4 py-8">
        <h2 className={`text-3xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          {translations.projects}
        </h2>
        <div className="relative ">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div key={index} className="p-4 ">
                <div
                  className={`rounded-lg shadow-md overflow-hidden h-full flex flex-col min-h-[400px]  ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}
                >
                  <img
                    src={project.image || '/Project-Portfolio.jpg'}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex-grow flex flex-col min-h-[400px]">
                    <h3
                      className={`text-2xl font-semibold mb-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-800'}`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-base mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      {translations.projectsTitle}
                    </p>
                    <p
                      className={`text-base mb-4 flex-grow ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      {project.description[language]} 
                    </p>
                    <div className="flex space-x-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-blue-500 text-white px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex justify-between items-center">
                      <a
                        href={project.githubLink && project.githubLink !== "#" ? project.githubLink : "https://github.com/yourdefaultlink"}
                        className="text-blue-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                      <a
                        href={project.viewLink && project.viewLink !== "#" ? project.viewLink : "https://yourviewlink.com"}
                        className={`text-gray-500 hover:underline ${theme === 'dark' ? 'text-gray-300' : 'text-gray-500'}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {translations.projectsViewLink}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );

}

export default Projects;

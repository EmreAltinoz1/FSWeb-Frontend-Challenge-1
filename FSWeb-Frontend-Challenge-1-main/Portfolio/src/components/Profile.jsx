import React, { useContext } from "react";
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import en from '../data/dataEn.json';
import tr from '../data/dataTr.json';

const Profile = () => {
    const { theme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    const translations = language === "en" ? en : tr;

    const profileData = [
        { label: translations.birthDate, value: "14.10.1999" },
        { label: translations.CityofResidence, value: "Hatay" },
        { label: translations.educationalStatus, value: "Namık Kemal University - Computer Programming" },
        { label: translations.preferredRole, value: "Frontend, UI" },
    ];

    return (
        <div className={`py-10 mb-10 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
            <div className="container mx-auto px-6 lg:px-10 flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10">
                <div className={`w-full lg:w-1/2 shadow-lg rounded-lg p-6 ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
                    <h3 className="text-2xl font-semibold text-blue-600 mb-4">Profile</h3>
                    <dl className="divide-y divide-gray-300">
                        {profileData.map((item, index) => (
                            <div key={index} className="flex justify-between py-3">
                                <dt className="text-sm font-medium text-gray-500">{item.label}</dt>
                                <dd className="text-sm font-semibold">{item.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
                <div className={`w-full lg:w-1/2 shadow-lg rounded-lg p-6 ${theme === 'dark' ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-gray-900'}`}>
    <h3 className="text-2xl font-semibold text-blue-600 mb-4">{translations.aboutMe}</h3>
    <p className={`text-sm ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{translations.aboutMeTitle}</p>
    <p className={`text-sm mt-4 ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>{translations.aboutMeTitlev}</p>
</div>

            </div>
        </div>
    );
};

export default Profile;

import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function LanguageSwitcher() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button onClick={toggleLanguage} className="p-2 bg-gray-700 text-white rounded">
      {language === "tr" ? "EN" : "TR"}
    </button>
  );
}

export default LanguageSwitcher;

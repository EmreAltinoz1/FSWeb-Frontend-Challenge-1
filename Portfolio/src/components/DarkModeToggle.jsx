import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function DarkModeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="p-2 bg-gray-700 text-white rounded">
      {theme === "light" ? "🌙 Karanlık Mod" : "☀️ Aydınlık Mod"}
    </button>
  );
}

export default DarkModeToggle;

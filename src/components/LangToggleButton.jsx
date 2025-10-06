import React from "react";
import Button from "./Button";
import { IoLanguageOutline } from "react-icons/io5";
import { useLanguage } from "../context/LanguageContext";

const LangToggleButton = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button 
      onClick={toggleLanguage} 
      className="text-xs px-2.5 py-1 flex items-center gap-2"
    >
      <IoLanguageOutline />
      <span>{language === "en" ? "FR" : "EN"}</span>
    </Button>
  );
};

export default LangToggleButton;
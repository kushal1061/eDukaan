import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguagePopup.css'; // Import the CSS file

const LanguageSelectionPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { i18n } = useTranslation();
  
//   useEffect(() => {
//     // Check if language has been selected before
//     // const hasSelectedLanguage = localStorage.getItem('languageSelected');
    
//     // if (!hasSelectedLanguage) {
//     //   setIsOpen(true);
//     // }
//   }, []);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी (Hindi)' },
    { code: 'ta', name: 'தமிழ் (Tamil)' },
    { code: 'gu', name: 'ગુજરાતી (Gujarati)' },
    { code: 'mr', name: 'मराठी (Marathi)' }
  ];

  const selectLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('languageSelected', 'true');
    localStorage.setItem('selectedLanguage', langCode);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="language-popup-overlay">
      <div className="language-popup-container">
        <div className="language-popup-header">
          <h3 className="language-popup-title">Select Your Language</h3>
          <p className="language-popup-subtitle">भाषा चुनें | ભાષા પસંદ કરો | भाषा निवडा | மொழியைத் தேர்ந்தெடுக்கவும்</p>
        </div>
        
        <div className="language-options">
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang.code)}
              className="language-option"
            >
              <span>{lang.name}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5l7 7-7 7" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          ))}
        </div>
        
        <div className="language-popup-footer">
          You can change the language later from the settings
        </div>
      </div>
    </div>
  );
};

export default LanguageSelectionPopup;
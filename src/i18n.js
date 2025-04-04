import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi) // Load translation files
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Initialize i18next for React
  .init({
    fallbackLng: 'en', // Default language
    debug: true, // Enable debugging in development mode
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;

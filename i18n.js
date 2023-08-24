import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import { NativeModules, Platform } from 'react-native';
import enTranslation from './locales/en.json';
import hiTranslation from './locales/hi.json'; // Add Hindi translations
import teTranslation from './locales/te.json'; // Add Telugu translations

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb) => cb(Localization.locale.split('-')[0]),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: enTranslation,
      },
      hi: {
        translation: hiTranslation, // Add Hindi translations
      },
      te: {
        translation: teTranslation, // Add Telugu translations
      },
      // ... Add more language translations here
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

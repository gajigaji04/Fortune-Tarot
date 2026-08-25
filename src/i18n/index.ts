import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ko from "../locales/ko/translation.json";
import ja from "../locales/ja/translation.json";
import zh from "../locales/zh/translation.json";
import en from "../locales/en/translation.json";

export const LANGUAGE_STORAGE_KEY = "the-arcana:lang";

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ko: { translation: ko },
      ja: { translation: ja },
      zh: { translation: zh },
      en: { translation: en },
    },
    fallbackLng: "ko",
    supportedLngs: ["ko", "ja", "zh", "en"],
    nonExplicitSupportedLngs: true,
    load: "languageOnly",
    detection: {
      order: ["localStorage", "navigator"],
      lookupLocalStorage: LANGUAGE_STORAGE_KEY,
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;

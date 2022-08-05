import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { EnTrans, EsTrans, FrTrans } from "../assets/i18n";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: EnTrans,
      },
      es: {
        translation: EsTrans,
      },
      fr: {
        translation: FrTrans,
      },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "es", "fr"],

    interpolation: {
      escapeValue: false,
    },
  });

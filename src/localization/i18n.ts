import { initReactI18next } from 'react-i18next'

import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import { SystemService } from '@/services/system.service'

import enTranslations from './dictionaries/en.json'
import trTranslations from './dictionaries/tr.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translations'
    returnNull: false
    returnEmptyString: false
  }
}

const language = SystemService.getLanguage()

const detectionOptions = {
  order: ['path'],
  lookupFromPathIndex: 0,
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      tr: { translations: { ...trTranslations } },
      en: { translations: { ...enTranslations } },
    },
    lng: language,
    fallbackLng: language,
    debug: false,
    detection: detectionOptions,
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
    react: {
      bindI18n: 'languageChanged',
      useSuspense: true,
    },
    returnNull: false,
  })

export default i18n

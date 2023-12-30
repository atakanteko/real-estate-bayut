import { Locale } from 'antd/lib/locale'
import arAR from 'antd/lib/locale/ar_EG'
import enUS from 'antd/lib/locale/en_US'
import trTR from 'antd/lib/locale/tr_TR'

import dayjs from 'dayjs'
import { changeLanguage, t } from 'i18next'

import { LanguageTypes } from '@/types'

import 'dayjs/locale/tr'
import 'dayjs/locale/en'
import 'dayjs/locale/ar-sa'

const handleLanguage = async (key: LanguageTypes): Promise<void> => {
  await changeLanguage(key)
}

const translate = (key: string): string => {
  return t(key)
}

const setAntdLanguage = (
  language: LanguageTypes,
  seti18nLocale: (e: Locale) => void,
) => {
  const antdLocaleMap = {
    tr: trTR,
    en: enUS,
    sa: arAR,
  }

  if (language in antdLocaleMap) {
    seti18nLocale(antdLocaleMap[language])
  }
}

const setDayjsLocale = (lng: LanguageTypes = 'tr') => {
  const dayjsLocaleMap = {
    tr: 'tr',
    en: 'en',
    sa: 'ar-sa',
  }

  if (lng in dayjsLocaleMap) {
    dayjs.locale(dayjsLocaleMap[lng])
  }
}

export const i18n = {
  handleLanguage,
  setAntdLanguage,
  translate,
  setDayjsLocale,
}

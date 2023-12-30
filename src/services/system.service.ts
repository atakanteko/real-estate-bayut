import { LocalStorageKeys } from '@/constants'
import { ISystemState, LanguageTypes, SystemKeys } from '@/types'

import { LocalStorageService } from './localStorage.service'

export const defaultSystemConfig: ISystemState = {
  language: 'tr',
} as const

/**
 * Updates the values of default system parameters
 * @type TSystemKeys
 * @param {string} value - Gets the default system parameters
 */

const updateSystemConfig = (key: SystemKeys, value: string | number) => {
  const oldLocalData = LocalStorageService.getLocalStorageItem(
    LocalStorageKeys.System,
  )
  let newLocalData
  if (oldLocalData) {
    newLocalData = {
      ...oldLocalData,
      [key]: value,
    }
  } else {
    newLocalData = {
      ...defaultSystemConfig,
      [key]: value,
    }
  }

  return LocalStorageService.updateLocalStorageItem(
    LocalStorageKeys.System,
    newLocalData,
  )
}

/**
 * Contains the default settings of the application. If there is any default parameter, it should be added here.
 * It currently includes language, theme, direction and version.
 * It comes from the @interface ISystemState file defined in the interfaces to the system.
 * @returns defaultSystemConfig
 */

const getLocalSystemConfig = (): ISystemState => {
  const localData = LocalStorageService.getLocalStorageItem(
    LocalStorageKeys.System,
  )
  let result = { ...defaultSystemConfig }

  if (localData) {
    result = { ...localData }

  } else {
    LocalStorageService.setLocalStorageItem(LocalStorageKeys.System, result)
  }

  return result
}

/**
 * Returns the language from the default system parameters
 * @returns language
 */

const getLanguage = (): LanguageTypes => {
  const localData = LocalStorageService.getLocalStorageItem(
    LocalStorageKeys.System,
  )
  const result: ISystemState = localData ? localData : defaultSystemConfig
  return result.language
}

export const SystemService = {
  getLocalSystemConfig,
  getLanguage,
  updateSystemConfig,
}

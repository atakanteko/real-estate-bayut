import { AES, enc } from 'crypto-js'
import log from 'loglevel'

import { LocalStorageKeys } from '@/constants'

/**
 * Generated keys can be processed. If you want to add a new key, follow the keys received in the parameter.
 * @param {string} key - System, Auth etc.
 * @enum LocalStorageKeys
 */

const secretKey = 'R$zK9qX3#vC7uTmP'

const setLocalStorageItem = <T = object>(key: LocalStorageKeys, value: T) => {
  const encryptedValue = AES.encrypt(
    JSON.stringify(value),
    secretKey,
  ).toString()
  return localStorage.setItem(key, encryptedValue)
}

/**
 * Used to update the values of existing keys generated
 * @enum LocalStorageKeys
 */

const updateLocalStorageItem = (
  key: LocalStorageKeys,
  value: null | object,
) => {
  const oldEncryptedData: string | null = localStorage.getItem(key)

  if (oldEncryptedData != null && value !== null) {
    const decryptedValue = AES.decrypt(oldEncryptedData, secretKey).toString(
      enc.Utf8,
    )

    try {
      const oldData = JSON.parse(decryptedValue)
      const newData = {
        ...oldData,
        ...(value as Record<string, unknown>),
      }

      setLocalStorageItem(key, newData)
    } catch (error) {
      log.error('JSON Parse Error:', error)
    }
  }
}

/**
 * Retrieves the desired key already created in the localStorage.
 * @enum LocalStorageKeys
 * @returns System, Auth in values
 */

const getLocalStorageItem = (key: LocalStorageKeys) => {
  const encryptedValue = localStorage.getItem(key)
  if (encryptedValue) {
    const decryptedValue = AES.decrypt(encryptedValue, secretKey).toString(
      enc.Utf8,
    )

    try {
      const parsedValue = JSON.parse(decryptedValue)
      return parsedValue
    } catch (error) {
      return null
    }
  }
  return null
}

/**
 * Specifically deletes generated key.
 * @enum LocalStorageKeys
 */

const deleteLocalStorageItem = (key: LocalStorageKeys) => {
  return localStorage.removeItem(key)
}

/**
 * Clears all localStorage data.
 * @enum LocalStorageKeys
 */

const clearFromLocalStorage = () => {
  return localStorage.clear()
}

export const LocalStorageService = {
  setLocalStorageItem,
  updateLocalStorageItem,
  getLocalStorageItem,
  deleteLocalStorageItem,
  clearFromLocalStorage,
}

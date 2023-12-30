import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { SystemService } from '@/services/system.service'
import { ISystemState, LanguageTypes } from '@/types'
import { i18n } from "@/utils/helpers/internationalization"

const initialState: ISystemState = SystemService.getLocalSystemConfig()

const systemSlices = createSlice({
  name: 'SYSTEM',
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<LanguageTypes>) {
      state.language = action.payload
      SystemService.updateSystemConfig('language', action.payload)
      void i18n.handleLanguage(action.payload)
    },
  },
})

export const SystemActions = systemSlices.actions

export default systemSlices.reducer

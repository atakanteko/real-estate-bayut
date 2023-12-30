import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import store from '@/store/config/store.config'
import { RootState } from '@/store/rootReducer'

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

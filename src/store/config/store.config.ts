import { configureStore } from '@reduxjs/toolkit'

import { apiSlice } from "@/api/api";

import rootReducer from '../rootReducer';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([apiSlice.middleware]),
    devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>

export default store
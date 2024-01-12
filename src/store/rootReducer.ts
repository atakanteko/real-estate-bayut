import { combineReducers, Reducer, UnknownAction } from 'redux'

import { apiSlice } from '@/api/api'
import { filterSlice, propertySlice, systemSlice } from '@/features'

import { IStore } from './IStore'

const appReducer: Reducer<IStore> = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    system: systemSlice,
    filter: filterSlice,
    property: propertySlice
})

const rootReducer = (
    state: IStore | undefined,
    action: UnknownAction,
) => {
    return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
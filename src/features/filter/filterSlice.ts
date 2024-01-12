import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FiltersTypeSpace } from '@/types/filter'

const initialState: FiltersTypeSpace.IFilterState = {
    filterName: {
        locationExternalIDs: '5002,6020'
    }
}

const filterSlice = createSlice({
    name: 'FILTER',
    initialState,
    reducers: {
        resetFilter: (state) => {
            state.filterName = {}
        },
        updateFilter: (state, action: PayloadAction<FiltersTypeSpace.FilterUpdatePayloadType>) => {
            state.filterName[action.payload.name] = action.payload.value
        }
    },
})

export const FilterActions = filterSlice.actions

export default filterSlice.reducer

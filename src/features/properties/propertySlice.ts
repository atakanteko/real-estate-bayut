import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PropertiesTypeSpace } from '@/types/properties'


const initialState: PropertiesTypeSpace.IPropertyState = {
    propertyList: {} as PropertiesTypeSpace.PropertyItem[]
}

const propertySlices = createSlice({
    name: 'PROPERTY',
    initialState,
    reducers: {
        updatePropertList: (state, action: PayloadAction<PropertiesTypeSpace.PropertyItem[]>) => {
            state.propertyList = action.payload
        }
    },
})

export const propertyActions = propertySlices.actions

export default propertySlices.reducer

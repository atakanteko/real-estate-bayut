import { createSelector } from 'reselect'

import { IStore } from '@/store/IStore'
import { PropertiesTypeSpace } from '@/types/properties'


const getPropertyList = createSelector(
    (state: IStore) => state.property,
    (property: PropertiesTypeSpace.IPropertyState) => property.propertyList,
)

export { getPropertyList }

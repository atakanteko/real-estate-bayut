import { createSelector } from 'reselect'

import { IStore } from '@/store/IStore'
import { FiltersTypeSpace } from '@/types'


const getFilterParams = createSelector(
    (state: IStore) => state.filter,
    (filter: FiltersTypeSpace.IFilterState) => filter.filterName,
)

export { getFilterParams }

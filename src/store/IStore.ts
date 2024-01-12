import { apiSlice } from "@/api/api";
import { ISystemState } from "@/types";
import { FiltersTypeSpace } from "@/types/filter";
import { PropertiesTypeSpace } from "@/types/properties";

type ApiSlice = ReturnType<typeof apiSlice.reducer>


export interface IStore {
    api: ApiSlice
    system: ISystemState
    filter: FiltersTypeSpace.IFilterState
    property: PropertiesTypeSpace.IPropertyState
}
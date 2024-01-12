import { FiltersTypeSpace } from "@/types";
import { PropertiesTypeSpace } from "@/types/properties";
import { objectToQueryString } from "@/utils/helpers";

import { apiSlice } from "../api";
import { propertyEndpoints } from "./properties.endpoints";

const propertiesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        propertyList: builder.query<PropertiesTypeSpace.ApiResponse<PropertiesTypeSpace.PropertyItem[]>, FiltersTypeSpace.QueryNames>({
            query: (params) => {
                return {
                    url: `${propertyEndpoints.list}${objectToQueryString({ ...params })}`
                }
            }
        })
    })
})

export const {
    usePropertyListQuery
} = propertiesApi

export default propertiesApi
import { PropertiesTypeSpace, PropertyItemType } from "@/types/properties";
import { ObjectToQueryString } from "@/utils/helpers";

import { apiSlice } from "../api";
import { propertyEndpoints } from "./properties.endpoints";
const propertiesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        propertyList: builder.query<PropertyItemType, PropertiesTypeSpace.PropertyListArgument>({
            query: (params) => {
                return {
                    url: `${propertyEndpoints.list}${ObjectToQueryString(params)}`
                }
            }
        })
    })
})

export const {
    usePropertyListQuery
} = propertiesApi
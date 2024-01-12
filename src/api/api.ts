import { createApi } from "@reduxjs/toolkit/query/react";

import { axiosBaseQuery } from "@/httpClient/baseFetch";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://bayut.p.rapidapi.com',
    }),
    endpoints: () => ({}),
});

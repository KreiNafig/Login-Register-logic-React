import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const productSlice = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/products' }),
    tagTypes: [],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ''
        }),
        getProduct: builder.query({
            query: (productId) => `/${productId}`
        })
    })
})

export const { useGetProductsQuery, useGetProductQuery } = productSlice
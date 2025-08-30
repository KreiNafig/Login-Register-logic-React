import {configureStore} from '@reduxjs/toolkit'
import { count } from './slices/counterSlice'
import { postsApi } from './slices/apiSlice'
import { productSlice } from './slices/productSlice'

export const store = configureStore({
    reducer: {
        counter: count,
        [postsApi.reducerPath]: postsApi.reducer,
        [productSlice.reducerPath]: productSlice.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware).concat(productSlice.middleware),
})
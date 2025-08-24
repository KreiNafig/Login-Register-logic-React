import {configureStore} from '@reduxjs/toolkit'
import { count } from './slices/counterSlice'
import { postsApi } from './slices/apiSlice'

export const store = configureStore({
    reducer: {
        counter: count,
        [postsApi.reducerPath]: postsApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
})
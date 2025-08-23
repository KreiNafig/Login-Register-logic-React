import {configureStore} from '@reduxjs/toolkit'
import { count } from './slices/counterSlice'
import { posts } from './slices/postSlice'

export const store = configureStore({
    reducer: {
        counter: count,
        post: posts,
    }
})
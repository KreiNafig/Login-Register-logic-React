import {configureStore} from '@reduxjs/toolkit'
import { count } from './slices/counterSlice'

export const store = configureStore({
    reducer: {
        counter: count
    }
})
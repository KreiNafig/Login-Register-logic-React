import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
}

const counter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => { state.count += 1 },
        decrement: (state) => { state.count -= 1 },
        reset: (state) => { state.count = 0 }
    }
})

export const { increment, decrement, reset } = counter.actions;

export const count = counter.reducer
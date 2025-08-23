import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from '../fetch/api'

export const fetchPosts = createAsyncThunk('posts/fetchPosts' ,async () => {
    const data = await api.get('')
    return data
})

export const deletePost = createAsyncThunk('posts/deletePost', async (id) => {
    await api.delete(`/${id}`)
    return id
})

export const createPost = createAsyncThunk('posts/createPost', async (obj) => {
    const data = await api.post('',obj)
    return data
})


const initialState = {
    posts: [],
    loading: false,
    status: 'idle',
    error: null,
}

const post = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
   extraReducers: (builder) => {
    builder
        .addCase(fetchPosts.pending, (state) => {
            state.loading = true;
            state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.status = 'fulfilled';
            state.posts = action.payload
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.status = 'failed';
            state.error = action.payload
        })
        .addCase(deletePost.fulfilled, (state, action) => {
            state.posts = state.posts.filter((e) => e.id !== action.payload)
        })
        .addCase(createPost.fulfilled, (state, action) => {
            state.posts.push(action.payload)
        })
   }
})


export const posts = post.reducer
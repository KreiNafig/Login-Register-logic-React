import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from '../fetch/api'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, {rejectWithValue}) => {
    try {
        const data = await api.get('')
        return data
    } catch(error) {
        return rejectWithValue(error.message)
    }
})

export const deletePost = createAsyncThunk('posts/deletePost', async (id, {rejectWithValue}) => {
    try {
    await api.delete(`/${id}`)
    return id
    } catch(error) {
        return rejectWithValue(error.message)
    }
})

export const createPost = createAsyncThunk('posts/createPost', async (obj, {rejectWithValue}) => {
    try {
    const data = await api.post('',obj)
    return data
    } catch(error) {
        return rejectWithValue(error.message)
    }
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
        .addCase(deletePost.pending, (state) => {
            state.loading = true;
            state.status = 'loading'
        })
        .addCase(createPost.pending, (state) => {
            state.loading = true;
            state.status = 'loading';
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false;
            state.status = 'fulfilled';
            state.posts = action.payload;
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false;
            state.status = 'failed';
            state.posts = []
            state.error = action.payload
        })
        .addCase(deletePost.fulfilled, (state, action) => {
            state.loading = false;
            state.status = 'fulfilled';
            state.posts = state.posts.filter((e) => e.id !== action.payload)
        })
        .addCase(createPost.fulfilled, (state, action) => {
            state.loading = false;
            state.status = 'fulfilled';
            state.posts.push(action.payload)
        })
        .addCase(deletePost.rejected, (state, action) => {
            state.loading = false;
            state.status = 'failed';
            state.posts = []
            state.error = action.payload
        })
        .addCase(createPost.rejected, (state, action) => {
            state.loading = false;
            state.status = 'failed';
            state.posts = []
            state.error = action.payload
        })
   }
})


export const posts = post.reducer
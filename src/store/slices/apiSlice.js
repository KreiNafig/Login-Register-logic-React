import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
    reducerPath: "posts",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    tagTypes: ['Post'],
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts',
            providesTags: (result = [], error, arg) => [
                'Post',
                ...result.map((e) => ({type: 'Post', id: e.id})),
            ]
        }),
        getPost: builder.query({
            query: (postId) => `/posts/${postId}`,
            providesTags: (result, error, arg) => [{type: 'Post', id: arg}]
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `/posts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, arg) => [
                {type: 'Post', id: arg},
                "Post",
            ]
        }),
        addPost: builder.mutation({
            query: (data) => ({
                url: '/posts',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: (result, error, arg) => ["Post"]
        })
    })
})

export const { useGetPostsQuery, useGetPostQuery, useDeletePostMutation, useAddPostMutation } = postsApi
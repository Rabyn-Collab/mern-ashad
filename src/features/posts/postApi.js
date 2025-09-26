import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://60f3af443cb0870017a8a007.mockapi.io' }),


  endpoints: (builder) => ({

    getPost: builder.query({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'GET'
      }),
      providesTags: ['Post']
    }),

    getPosts: builder.query({
      query: () => ({
        url: '/posts',
        method: 'GET'
      }),
      providesTags: ['Post']
    }),

    createPost: builder.mutation({
      query: (data) => ({
        url: '/posts',
        body: data,
        method: 'POST'
      }),
      invalidatesTags: ['Post']
    }),

    removePost: builder.mutation({
      query: (id) => ({
        url: `/posts/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Post']
    }),

    updatePost: builder.mutation({
      query: (q) => ({
        url: `/posts/${q.id}`,
        body: q.data,
        method: 'PUT'
      }),
      invalidatesTags: ['Post']
    }),



  })




});

export const { useGetPostsQuery, useGetPostQuery, useCreatePostMutation, useRemovePostMutation, useUpdatePostMutation } = postApi;
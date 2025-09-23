import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://60f3af443cb0870017a8a007.mockapi.io' }),


  endpoints: (builder) => ({

    getPosts: builder.query({
      query: () => ({
        url: '/posts',
        method: 'GET'
      })
    }),

    createPost: builder.mutation({
      query: (data) => ({
        url: '/posts',
        body: data,
        method: 'POST'
      })
    })




  })




});

export const { useGetPostsQuery, useCreatePostMutation } = postApi;
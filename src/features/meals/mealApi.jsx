import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const mealApi = createApi({
  reducerPath: 'mealApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/api/json/v1/1' }),

  endpoints: (builder) => ({

    getCategories: builder.query({
      query: () => ({
        url: '/categories.php',
        method: "GET"
      })

    }),

    filterByCategory: builder.query({
      query: (category) => ({
        url: '/filter.php',
        params: {
          c: category
        }

      })
    }),












  })





});


export const { useGetCategoriesQuery, useFilterByCategoryQuery } = mealApi;
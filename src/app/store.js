import { configureStore } from "@reduxjs/toolkit";
import { cocktailApi } from "../features/cocktails/cocktailApi";




export const store = configureStore({
  reducer: {
    cocktailApi: cocktailApi.reducer
  },

  //caching , invalidation, Polling
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      cocktailApi.middleware
    ]),
});
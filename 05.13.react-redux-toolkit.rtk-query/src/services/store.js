import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { customersApi } from "./customersApi";
import favsReducer from "./favsSlice"
const store = configureStore({
  reducer: {
    favs:favsReducer,
    [customersApi.reducerPath]: customersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customersApi.middleware),
});

setupListeners(store.dispatch)
export default store;
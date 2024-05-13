import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const customersApi = createApi({
  reducerPath: "customersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://northwind.vercel.app/api/" }),
  endpoints: (builder) => ({
    //endpoints
    getAllCustomers: builder.query({
      query: () => `suppliers`,
    }),
  }),
});

//auto-generate hook (use + endpoint + Query)
export const {useGetAllCustomersQuery}=customersApi


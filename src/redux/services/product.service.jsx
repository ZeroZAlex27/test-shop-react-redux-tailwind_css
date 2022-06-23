import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "../http";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
    tagTypes: ["Products"],
    endpoints: (builder) => ({
        createProduct: builder.mutation({
            query(body) {
                return {
                    url: `/product`,
                    method: "POST",
                    body,
                };
            },
            invalidatesTags: ["Products"],
        }),
        getAllProducts: builder.query({
            query: () => ({
                url: "/product",
            }),
            providesTags: () => ["Products"],
        }),
        updateProduct: builder.mutation({
            query(body) {
                return {
                    url: `/product/${body.id}`,
                    method: "PUT",
                    body,
                };
            },
            invalidatesTags: ["Products"],
        }),
        deleteProduct: builder.mutation({
            query(body) {
                return {
                    url: `/product/${body.id}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["Products"],
        }),
    }),
});

export const {
    useCreateProductMutation,
    useGetAllProductsQuery,
    useUpdateProductMutation,
    useDeleteProductMutation,
} = productsApi;

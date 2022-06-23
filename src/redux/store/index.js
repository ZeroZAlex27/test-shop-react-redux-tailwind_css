import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../services/product.service";

const reducer = {
    [productsApi.reducerPath]: productsApi.reducer,
};

const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
    devTools: true,
});

export default store;

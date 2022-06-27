import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../services/product.service";
import modalsReducer from "../slices/modalsSlice";

const reducer = {
    modals: modalsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
};

const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
    devTools: true,
});

export default store;

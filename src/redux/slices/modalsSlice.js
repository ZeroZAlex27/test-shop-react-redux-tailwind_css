import { createSlice } from "@reduxjs/toolkit";

const modalsSlice = createSlice({
    name: "modals",
    initialState: {
        createModalVisible: null,
        updateModalVisible: null,
        productId: null,
    },
    reducers: {
        setCreateModalVisible(state, action) {
            state.createModalVisible = action.payload;
        },
        setUpdateModalVisible(state, action) {
            state.updateModalVisible = action.payload;
        },
        setProductId(state, action) {
            state.productId = action.payload;
        },
    },
});

export const { setCreateModalVisible, setUpdateModalVisible, setProductId } = modalsSlice.actions;

export default modalsSlice.reducer;

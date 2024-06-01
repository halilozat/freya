/** dependencies */
import { createSlice } from '@reduxjs/toolkit';

/** types */
import {ProductsInitialState} from "@/store/slices/productsSlice/types";

/** thunks */
import {fetchProductsThunk} from "@/store/slices/productsSlice/thunks";

const initialState: ProductsInitialState = {
    products: [],
    status: 'idle',
    error: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductsThunk.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProductsThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export default productsSlice.reducer;

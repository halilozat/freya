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
    reducers: {
        toggleFavorite: (state, action) => {
            return {
                ...state,
                products: state.products.map(item => {
                    if (item.id === action.payload) {
                        // images dizisini regex ile filtreleme
                        const filteredImages = item.images.filter(image => image.replace(/\\\"/g, '\"'));

                        return {
                            ...item,
                            isFavorited: !item.isFavorited,
                            images: filteredImages
                        };
                    }
                    return item;
                })
            };
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProductsThunk.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload.map(item => ({
                    ...item,
                    isFavorited: false
                }));
            })
            .addCase(fetchProductsThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export const { toggleFavorite } = productsSlice.actions;
export default productsSlice.reducer;

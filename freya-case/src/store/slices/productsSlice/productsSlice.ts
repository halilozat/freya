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
        setProducts: (state, action) => {
            return {
                ...state,
                products: action.payload
            };
        },
        toggleFavorite: (state, action) => {
            const mappedProducts = state.products.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        isFavorited: !item.isFavorited,
                        createdTime: Date.now(),
                    };
                }
                return item;
            })

            // degisen state'i ls'te de degistir
            localStorage.setItem('storedProducts', JSON.stringify(mappedProducts))

            return {
                ...state,
                products: mappedProducts
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
                    isFavorited: false,
                    // @ts-ignore
                    createdTime: Date.now(item.creationAt),
                    // yanlis gonderilen urlleri duzenleme
                    images: item.images.map(item => item.replace(/[\[\]"]/g, '')),
                }));
            })
            .addCase(fetchProductsThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Something went wrong';
            });
    },
});

export const { toggleFavorite, setProducts } = productsSlice.actions;
export default productsSlice.reducer;

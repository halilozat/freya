/** dependencies */
import { createAsyncThunk } from '@reduxjs/toolkit';

/** services */
import {getProducts} from "@/services/products";

export const fetchProductsThunk = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const response = await getProducts()
        return response.data;
    }catch (err){
        console.log(err)
        return []
    }
});
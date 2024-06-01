import { createAsyncThunk } from '@reduxjs/toolkit';
import {getProducts} from "@/services/products";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    try {
        const response = await getProducts()
        return response.data;
    }catch (err){
        console.log(err)
        return []
    }
});
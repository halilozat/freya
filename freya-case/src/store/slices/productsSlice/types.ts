/** types */
import {Product} from "@/services/types";

export interface ProductsInitialState {
    products: Product[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}
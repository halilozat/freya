/** api */
import api from "@/services/api";

/** types */
import {Product} from "@/services/types";

export const getProducts = async () => api.get<Product[]>('/products')

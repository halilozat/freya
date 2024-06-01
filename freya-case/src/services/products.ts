/** api */
import api from "./api.js";

/** types */
import {Product} from "@/services/types";

export const getProducts = async () => api.get<Product[]>('/products')

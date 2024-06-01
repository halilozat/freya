/** dependencies */
import {useAppDispatch, useAppSelector} from "@/store";

/** store */
import {fetchProductsThunk} from "@/store/slices/productsSlice";

function useProducts() {
    const dispatch = useAppDispatch();

    const products = useAppSelector(
        state => state.products.products,
    );

    const fetchProducts = () => dispatch(fetchProductsThunk());

    return {
        products,
        fetchProducts
    }
}

export default useProducts;
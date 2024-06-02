/** dependencies */
import {useAppDispatch, useAppSelector} from "@/store";

/** store */
import {fetchProductsThunk} from "@/store/slices/productsSlice";
import {toggleFavorite} from "@/store/slices/productsSlice/productsSlice";

function useProducts() {
    const dispatch = useAppDispatch();

    const products = useAppSelector(
        state => state.products.products,
    );

    const fetchProducts = () => dispatch(fetchProductsThunk());

    const toggleFavorited = (productId: number) => {
        dispatch(toggleFavorite(productId))
    }

    return {
        products,
        fetchProducts,
        toggleFavorited
    }
}

export default useProducts;
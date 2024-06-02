/** dependencies */
import {useAppDispatch, useAppSelector} from "@/store";

/** store */
import {fetchProductsThunk} from "@/store/slices/productsSlice";
import {setProducts, toggleFavorite} from "@/store/slices/productsSlice/productsSlice";
import {getProducts} from "@/services/products";

function useProducts() {
    const dispatch = useAppDispatch();

    const products = useAppSelector(
        state => state.products.products,
    );

    const status = useAppSelector(
        state => state.products.status,
    );

    const fetchProducts = () => {
        const storedProducts = localStorage.getItem('storedProducts')
        console.log(storedProducts)
        if (storedProducts && JSON.parse(storedProducts).length){
            dispatch(setProducts(JSON.parse(storedProducts)))
        }else {
            dispatch(fetchProductsThunk());
        }
    }

    const toggleFavorited = (productId: number) => {
        dispatch(toggleFavorite(productId))
    }

    return {
        products,
        status,
        fetchProducts,
        toggleFavorited
    }
}

export default useProducts;
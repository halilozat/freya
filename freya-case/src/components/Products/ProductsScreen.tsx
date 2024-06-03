"use client"
/** dependencies */
import {useEffect, useState} from 'react';

/** hooks */
import useProducts from "@/hooks/useProducts/useProducts";

/** styles */
import styles from '@/styles/Products.module.css';

/** components */
import Tabs from "@/components/Tabs";
import Filter from "@/components/Filter";
import ProductCard from "@/components/Products/ProductCard";
import { Loader } from "@/components/Loader";
import { Empty } from "@/components/Empty";

const Products = () => {
    const { products, status, fetchProducts } = useProducts()

    const [activeTab, setActiveTab] = useState('recommendations');
    const [sortOption, setSortOption] = useState('');

    const sortedProducts = [...products].sort((a, b) => {
        if (sortOption === 'ascending') {
            return a.price - b.price;
        } else if (sortOption === 'descending') {
            return b.price - a.price;
        }else {
            return activeTab === 'recommendations'
                ? Number(b.creationAt) - Number(a.creationAt)
                : b.createdTime - a.createdTime
        }
    });

    const filteredProducts = activeTab === 'recommendations'
        ? sortedProducts
        : sortedProducts.filter(product => product.isFavorited);

    const handleAddToCart = (productId: number) => {
        // Sepete ekle işlevi burada tanımlanacak
    };



    useEffect(() => {
        fetchProducts()
    }, []);

    if (status === 'loading'){
        return (
            <Loader />
        )
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className={styles.filter}>
                    <Filter sortOption={sortOption} setSortOption={setSortOption} />
                </div>
            </div>
            {
                !filteredProducts.length
                    ? <Empty />
                    : <div className={styles.productList}>
                        {
                            filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    title={product.title}
                                    price={product.price}
                                    image={product.images[0]}
                                    onAddToCart={() => handleAddToCart(product.id)}
                                    fav={product.isFavorited}
                                    id={product.id}
                                />
                            ))
                        }
                    </div>
            }
        </div>
    );
};

export default Products;

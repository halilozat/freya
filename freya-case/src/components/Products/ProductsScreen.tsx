"use client"
import {useEffect, useState} from 'react';
import useProducts from "@/hooks/useProducts/useProducts";
import styles from '../../styles/Products.module.css';
import Tabs from "@/components/Tabs";
import Filter from "@/components/Filter";
import ProductCard from "@/components/Products/ProductCard";

const Products = () => {
    const { products, fetchProducts } = useProducts()

    const [activeTab, setActiveTab] = useState('recommendations');
    const [sortOption, setSortOption] = useState('');

    const sortedProducts = [...products].sort((a, b) => {
        if (sortOption === 'ascending') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });
    console.log(products)
    const filteredProducts = activeTab === 'recommendations'
        ? sortedProducts
        : sortedProducts.filter(product => product.isFavorited);

    const handleAddToCart = (productId: number) => {
        // Sepete ekle işlevi burada tanımlanacak
    };

    useEffect(() => {
        fetchProducts()
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className={styles.filter}>
                    <Filter sortOption={sortOption} setSortOption={setSortOption} />
                </div>
            </div>
            <div className={styles.productList}>
                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.images[0]}
                        onAddToCart={() => handleAddToCart(product.id)}
                        fav={product.isFavorited}
                        id={product.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;

import React from 'react';
import styles from '../../styles/ProductCard.module.css';

interface ProductCardProps {
    title: string;
    price: number;
    image: string;
    onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, onAddToCart }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.details}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.priceAndButton}>
                    <p className={styles.price}>${price}</p>
                    <button className={styles.button} onClick={onAddToCart}>Sepete Ekle</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

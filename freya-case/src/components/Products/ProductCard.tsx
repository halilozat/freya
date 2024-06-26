/** dependencies */
import React from 'react';
import Image from 'next/image';

/** styles */
import styles from '@/styles/ProductCard.module.css';

/** assets */
import HeartIcon from '@/assets/HeartIcon.svg'
import EmptyHeartIcon from '@/assets/EmptyHeartIcon.svg'

/** hooks */
import useProducts from "@/hooks/useProducts/useProducts";

interface ProductCardProps {
    title: string;
    price: number;
    image: string;
    onAddToCart: () => void;
    fav: boolean;
    id: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, onAddToCart, fav, id }) => {
    const { toggleFavorited } = useProducts();

    const handleToggle = (productId: number) => {
        toggleFavorited(productId)
    }

    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.details}>
                <div className={styles.title}>{title}</div>
                <div className={styles.priceAndButton}>
                    <div className={styles.price}>{price}₺</div>
                    <button className={styles.button}>Sepete Ekle</button>
                </div>
            </div>
            <div className={styles.heartIcon} onClick={() => handleToggle(id)}>
                {
                    fav
                        ? <Image
                            priority
                            src={HeartIcon}
                            alt="HeartIcon"
                        />
                        : <Image
                            priority
                            src={EmptyHeartIcon}
                            alt="EmptyHeartIcon"
                        />
                }
            </div>
        </div>
    );
};

export default ProductCard;

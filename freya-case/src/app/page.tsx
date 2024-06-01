'use client'
import { useEffect } from "react";
import styles from "./page.module.css";
import useProducts from "@/hooks/useProducts/useProducts";

export default function Home() {
    const { fetchProducts, products } = useProducts()

    useEffect(() => {
        fetchProducts()
    }, []);


  return (
      <div className={styles.main}>
          {products.length}
      </div>
  );
}

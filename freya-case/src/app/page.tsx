import styles from '../styles/Home.module.css';
import ChatScreen from "@/components/Chat/ChatScreen";
import ProductScreen from "@/components/Products/ProductsScreen";

const Home = () => {
    return (
        <main className={styles.container}>
            <div className={styles.chat}>
                <ChatScreen />
            </div>
            <div className={styles.products}>
                <ProductScreen />
            </div>
        </main>
    );
};

export default Home;

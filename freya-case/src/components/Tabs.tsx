import {Dispatch, SetStateAction, useState} from 'react';
import styles from '../styles/Products.module.css';

interface Props {
    activeTab: string
    setActiveTab: Dispatch<SetStateAction<string>>
}

const Tabs = ({ activeTab, setActiveTab }: Props) => {
    return (
        <div className={styles.tabs}>
            <button
                className={`${styles.tab} ${activeTab === 'recommendations' ? styles.active : ''}`}
                onClick={() => setActiveTab('recommendations')}
            >
                Oneriler
            </button>
            <button
                className={`${styles.tab} ${activeTab === 'favorites' ? styles.active : ''}`}
                onClick={() => setActiveTab('favorites')}
            >
                Favoriler
            </button>
        </div>
    );
};

export default Tabs;

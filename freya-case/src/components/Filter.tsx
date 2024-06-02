import {Dispatch, SetStateAction} from "react";
import styles from '../styles/Filter.module.css'

interface Props {
    sortOption: string
    setSortOption: Dispatch<SetStateAction<string>>
}

const Filter = ({ sortOption, setSortOption }: Props) => {
    return (
        <div>
            <select
                className={styles.filter}
                id="filter"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
            >
                <option className={styles.option} disabled>Filtrele</option>
                <option className={styles.option} value="ascending">Artan</option>
                <option className={styles.option} value="descending">Azalan</option>
            </select>
        </div>
    );
};

export default Filter;

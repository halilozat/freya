import styles from '../styles/Loader.module.css'

interface Props {
    text?: string
}

export function Loader({text}: Props) {

    return (
        <div className={styles.loader}>
            <div className={styles.loaderCircle}></div>
            <div className={styles.loaderText}>{ text }</div>
        </div>
    )
}
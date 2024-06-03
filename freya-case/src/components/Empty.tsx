/** styles */
import styles from '@/styles/Empty.module.css'

export function Empty() {

    return (
        <div className={styles.empty}>
            <div className={styles.emptyText}>
                Görüntülenecek Ürün Bulunmamaktadır!
            </div>
        </div>
    )
}
import styles from './ViewAllButton.module.css';

export default function ViewAllButton() {
    return (
        <div className={styles.viewAllButton}>
            <span className={styles.allText}>Все &gt;</span>
        </div>
    )
}
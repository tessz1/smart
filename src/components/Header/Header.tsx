import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
                <div className={styles.logoDot}></div>
                <span className={styles.logoText}>SmartFit</span>
            </div>

            <div className={styles.headerRight}>
                <span className={styles.icon}>🔔</span>
            </div>
        </div>
    );
}
import styles from "./WorkoutFinished.module.css";
import { Check, Home, RotateCcw } from "lucide-react";

export default function WorkoutFinished() {
    return (
        <div className={styles.page}>
            <div className={styles.glowOne}></div>
            <div className={styles.glowTwo}></div>

            <div className={styles.card}>
                <div className={styles.successCircle}>
                    <Check size={42} strokeWidth={3} />
                </div>

                <h1 className={styles.title}>Тренировка завершена</h1>
                <p className={styles.subtitle}>
                    Сегодня ты стал сильнее 💪
                </p>

                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <span className={styles.value}>4</span>
                        <span className={styles.label}>Упр.</span>
                    </div>

                    <div className={styles.stat}>
                        <span className={styles.value}>28:45</span>
                        <span className={styles.label}>Время</span>
                    </div>

                    <div className={styles.stat}>
                        <span className={styles.value}>256</span>
                        <span className={styles.label}>Ккал</span>
                    </div>
                </div>

                <div className={styles.achievement}>
                    <div className={styles.achievementTitle}>
                        🔥 Серия: 5 дней подряд
                    </div>
                    <div className={styles.achievementText}>
                        Отличный темп. Не сбавляй!
                    </div>
                </div>

                <button className={styles.primaryBtn}>
                    <Home size={18} />
                    На главную
                </button>

                <button className={styles.secondaryBtn}>
                    <RotateCcw size={18} />
                    Повторить
                </button>
            </div>
        </div>
    );
}
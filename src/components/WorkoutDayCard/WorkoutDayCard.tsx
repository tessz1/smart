import styles from './WorkoutDayCard.module.css';

interface WorkoutDayCardProps {
    title: string;
    day: string;
}

export default function WorkoutDayCard({ title, day }: WorkoutDayCardProps) {
    return (
        <div className={styles.workoutCard}>
            <div className={styles.workoutTitle}>{title}</div>
            <span className={styles.workoutDay}>{day}</span>
        </div>
    );
}
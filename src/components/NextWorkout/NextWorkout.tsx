import styles from './NextWorkout.module.css';
import WorkoutDayCard from '../WorkoutDayCard/WorkoutDayCard';
import ViewAllButton from '../ViewAllButton/ViewAllButton';
import type { workout } from '../../interface/workout';

export default function NextWorkout() {
    const workouts: workout[] = [
        {
            id: 1,
            title: "Спина + Бицепс",
            day: "Завтра",
        },
        {
            id: 2,
            title: "Ноги",
            day: "Чт, 23 мая",
        },
        {
            id: 3,
            title: "Плечи + Пресс",
            day: "Пт, 24 мая",
        },
    ];

    return (
        <>
            <div>
                <div className={styles.sectionNextDay}>
                    <div className={styles.eventNext}>Ближайшие</div>
                    <ViewAllButton />
                </div>
            </div>
            <div className={styles.workoutsContainer}>
                <div className={styles.workoutList}>
                    {workouts.map((workout) => (
                        <WorkoutDayCard
                            key={workout.id}
                            title={workout.title}
                            day={workout.day}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
import styles from './TodayWorkoutSection.module.css';

interface DataUsers {
    name: string,
    bodyParts: string,
    exercises: number,
    minute: number,
    calories: number,
}

export default function TodayWorkoutSection() {
    const dataUsers: DataUsers[] = [{
        name: 'Олег',
        bodyParts: 'Грудь + Трицепс',
        exercises: 4,
        minute: 60,
        calories: 550
    }]

    return (
        <>
            <div className={styles.greeting}>
                <h1>
                    Привет, {dataUsers[0].name}!
                </h1>
                <p>Готов к новой тренировке?</p>
            </div>
            <div className={styles.todaySection}>
                <div>
                    {dataUsers.map((users, index) => (
                        <div key={index}>
                            <div className={styles.sectionInToday}>
                                <div>Сегодня</div>
                                <div className={styles.bodyParts}>
                                    {users.bodyParts.split('+').map((part, i, arr) => (
                                        <div key={i}>
                                            {part.trim()}
                                            {i < arr.length - 1 && ' +'}
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.classSections}>
                                    <div className={styles.sections}>
                                        <div className={styles.nameBlock}>
                                            {users.exercises}
                                        </div>
                                        <span className={styles.by}>упражнения</span>
                                    </div>
                                    <div className={styles.sections}>
                                        <div className={styles.nameBlock}>
                                            ~{users.minute}
                                        </div>
                                        <span className={styles.by}>минут</span>
                                    </div>
                                    <div className={styles.sections}>
                                        <div className={styles.nameBlock}>
                                            {users.calories}
                                        </div>
                                        <span className={styles.by}>ккал</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
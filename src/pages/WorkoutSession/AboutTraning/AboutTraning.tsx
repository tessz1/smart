import styles from './AboutTraning.module.css'
import type { Exercise } from '../../../interface/workout'
import { CircleCheckBig, MapPinned, Dumbbell, ClockFading } from 'lucide-react'

interface Props {
    data: Exercise
    currentSet: number
}

export default function AboutTraning({ data, currentSet }: Props) {
    // const exercise = dat

    return (
        <div className={styles.container}>
            <div>
                <div className={styles.row}>
                    <div className={styles.name_exercise}>
                        {data.name}
                    </div>

                    <div className={styles.sets_counter}>
                        {currentSet}/{data.sets}
                    </div>
                </div>

                <div className={styles.sub}>
                    {`${data.sets} подхода по ${data.reps} повторений`}
                </div>

                <div className={styles.info}>
                    {/* Зона */}
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <MapPinned color="#AC6CDF" />
                            <span>Зона</span>
                        </div>

                        <div className={styles.value}>
                            {data.zone}
                        </div>
                    </div>

                    <div className={styles.stripe} />

                    {/* Оборудование */}
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <Dumbbell color="#AC6CDF" />
                            <span>Оборудование</span>
                        </div>

                        <div className={styles.value}>
                            {data.equipment}
                        </div>
                    </div>

                    <div className={styles.stripe} />

                    {/* Отдых */}
                    <div className={styles.row}>
                        <div className={styles.left}>
                            <ClockFading color="#AC6CDF" />
                            <span>Отдых</span>
                        </div>

                        <div className={styles.value}>
                            {data.rest}
                        </div>
                    </div>
                </div>

                <div className={styles.advice_block}>
                    <div className={styles.advice_title}>
                        <CircleCheckBig color="#AC6CDF" />
                        Совет
                    </div>

                    <div className={styles.advice_text}>
                        {data.advice}
                    </div>
                </div>
            </div>
        </div>
    )
}
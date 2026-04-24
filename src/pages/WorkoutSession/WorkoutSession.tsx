import styles from './WorkoutSession.module.css';
import { Ellipsis, ChevronLeft, Check, ArrowLeft } from "lucide-react";
import type { WorkoutDay } from "../../interface/workout";
import mainImage from '../../assets/main.jpg';
import { useState } from 'react';
import AboutTraning from "../WorkoutSession/AboutTraning/AboutTraning";
import CircleTimer from "../WorkoutSession/CircleTimer/CircleTimer";

interface Props {
    data: WorkoutDay[];
}

export default function WorkoutSession({ data }: Props) {
    const [mode, setMode] = useState<string>('ready');
    const [currentSet, setCurrentSet] = useState<number>(1);
    const [duration, setDuration] = useState(59);
    const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0)
    const isRunning = mode === 'rest';

    const currentWorkout = data[0];
    const currentExercise = currentWorkout.exercises[currentExerciseIndex]
    const totalSets = currentExercise.sets
    const resetButtonForTest = () => {
        setCurrentExerciseIndex(0)
        setCurrentSet(1)
        setMode("ready")
    };

    const statusMode = () => {
        if (mode === 'ready') {
            if (currentSet === totalSets) {
                setCurrentExerciseIndex(prev => prev + 1)
                setCurrentSet(1)
            } else {
                setCurrentSet(prev => prev + 1)
            }
            setMode('rest');
        } else if (mode === 'rest') {
            setMode('ready');
        }
    };
    const onComplete = () => {
        setMode('ready');
    };

    return (
        <div className={styles.main_container}>
            <div className={styles.header}>
                <ChevronLeft className={styles.back_button} />

                <div className={styles.name_item}>
                    {currentWorkout.title}
                </div>

                <Ellipsis size={36} color="white" />
            </div>

            <img
                src={mainImage}
                alt="Main"
                className={styles.img_photo}
            />

            <AboutTraning
                data={currentExercise}
                currentSet={currentSet}
            />

            <div className={styles.timerRow}>
                <div className={styles.contrainer_description}>
                    <button className={styles.arrow_left}>
                        <ArrowLeft
                            className={styles.circleButton}
                            size={20}
                        />
                    </button>

                    <div className={styles.description_button}>
                        Пропустить
                    </div>
                </div>

                <CircleTimer
                    isRunning={isRunning}
                    duration={duration}
                    onComplete={onComplete}
                />

                <div className={styles.contrainer_description}>
                    <button
                        onClick={statusMode}
                        className={styles.circleButton}
                    >
                        <Check size={20} />
                    </button>

                    <div className={styles.description_button}>
                        {mode === 'ready' ? 'Готово' : 'Отдых'}
                    </div>
                </div>
            </div>

            <button onClick={resetButtonForTest}>
                Test Button for RESET
            </button>
        </div>
    );
}
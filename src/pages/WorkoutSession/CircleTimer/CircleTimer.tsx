import { useEffect, useState } from "react";
import styles from './CircleTimer.module.css'

interface Props {
    isRunning: boolean;
    duration: number
    onComplete: any
}
export default function CircleTimer({ isRunning, duration, onComplete }: Props) {
    const [time, setTime] = useState<number>(0);
    useEffect(() => {
        if (isRunning === true) {
            setTime(duration)
            const interval = setInterval(() => {
                setTime(prev => {
                    if (prev <= 0) {
                        onComplete()
                        return 0
                    } else return prev - 1
                }
                )
            }, 1000)
            return () => {
                clearInterval(interval)
            }
        }
    }, [isRunning]);


    const r = 70;
    const size = 180;
    const center = size / 2;
    let progress = time / duration
    let circumference = 2 * Math.PI * r
    let offset = circumference * (1 - progress)
    const formatedTime = time.toString().padStart(2, '0')
    // offset=C⋅(1−progress) formula for circle

    return (
        <div className={styles.container}>
            <div style={{ position: "relative", width: size, height: size }}>
                <svg
                    width={size}
                    height={size}
                    style={{ transform: "rotate(-90deg)" }}
                >
                    <circle
                        cx={center}
                        cy={center}
                        r={r}
                        stroke="#2a2a2a"
                        strokeWidth="5"
                        fill="none"
                    />

                    <circle
                        cx={center}
                        cy={center}
                        r={r}
                        stroke="#a855f7"
                        strokeWidth="5"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        style={{ transition: "stroke-dashoffset 1s linear" }}
                    />
                </svg>
                <div className={styles.holdTime}>
                    Отдых
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: "55%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "bold"
                    }}
                >
                    {`00:${formatedTime}`}
                </div>
            </div>
        </div>
    );

}

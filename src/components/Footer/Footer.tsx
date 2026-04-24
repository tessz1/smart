import { House, Dumbbell, MapPin, ChartNoAxesColumnIncreasing, User } from "lucide-react"
import { useState } from "react"
import styles from "./Footer.module.css"

const navItems = [
    { id: "home", label: "Главная", icon: House },
    { id: "workouts", label: "Тренировки", icon: Dumbbell },
    { id: "location", label: "Локация", icon: MapPin },
    { id: "stats", label: "Статистика", icon: ChartNoAxesColumnIncreasing },
    { id: "profile", label: "Профиль", icon: User },
]

export default function Footer() {
    const [active, setActive] = useState("home")

    return (
        <div className={styles.mainContainer}>
            <div className={styles.icons}>
                {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = active === item.id
                    return (
                        <div
                            key={item.id}
                            className={`${styles.item} ${isActive ? styles.active : ""}`}
                            onClick={() => setActive(item.id)}
                        >
                            <Icon size={22} />
                            <span>{item.label}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
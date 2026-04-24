import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import TodayWorkoutSection from './components/TodayWorkoutSection/TodayWorkoutSection'
import NextWorkout from './components/NextWorkout/NextWorkout'
import Footer from './components/Footer/Footer'
import WorkoutSession from './pages/WorkoutSession/WorkoutSession'
import type { WorkoutDay } from '../src/interface/workout';
function App() {
  const data: WorkoutDay[] = [
    {
      "id": 1,
      "title": "День ног",
      "day": "Понедельник",
      "muscles": ["ноги", "ягодицы"],
      "exercises": [
        {
          "id": 1,
          "name": "Приседания",
          "sets": 4,
          "reps": 12,
          "rest": 60,
          "zone": "Ноги",
          "equipment": "Собственный вес",
          "advice": "Держи спину ровно и следи за коленями.",
          "muscles": ["ноги", "ягодицы"],
          "type": "bodyweight",
          "difficulty": "beginner"
        },
        {
          "id": 2,
          "name": "Выпады",
          "sets": 3,
          "reps": 12,
          "rest": 45,
          "zone": "Ноги",
          "equipment": "Собственный вес",
          "advice": "Шагай достаточно широко и держи корпус прямо.",
          "muscles": ["ноги", "ягодицы"],
          "type": "bodyweight",
          "difficulty": "beginner"
        },
        {
          "id": 3,
          "name": "Ягодичный мост",
          "sets": 3,
          "reps": 15,
          "rest": 45,
          "zone": "Ягодицы",
          "equipment": "Коврик",
          "advice": "Сжимай ягодицы в верхней точке движения.",
          "muscles": ["ягодицы", "ноги"],
          "type": "bodyweight",
          "difficulty": "beginner"
        },
        {
          "id": 4,
          "name": "Подъём на носки",
          "sets": 4,
          "reps": 20,
          "rest": 30,
          "zone": "Икры",
          "equipment": "Собственный вес",
          "advice": "Поднимайся максимально высоко и контролируй опускание.",
          "muscles": ["икры"],
          "type": "bodyweight",
          "difficulty": "beginner"
        }
      ]
    },
    {
      "id": 2,
      "title": "Грудь + Плечи",
      "day": "Среда",
      "muscles": ["грудь", "плечи"],
      "exercises": [
        {
          "id": 5,
          "name": "Отжимания",
          "sets": 4,
          "reps": 15,
          "rest": 60,
          "zone": "Грудь",
          "equipment": "Собственный вес",
          "advice": "Держи корпус ровным и не разводи локти слишком широко.",
          "muscles": ["грудь", "трицепс", "плечи"],
          "type": "bodyweight",
          "difficulty": "beginner"
        },
        {
          "id": 6,
          "name": "Жим гантелей сидя",
          "sets": 4,
          "reps": 10,
          "rest": 75,
          "zone": "Плечи",
          "equipment": "Гантели",
          "advice": "Не прогибай поясницу и двигайся плавно.",
          "muscles": ["плечи", "трицепс"],
          "type": "dumbbell",
          "difficulty": "intermediate"
        },
        {
          "id": 7,
          "name": "Разведения в стороны",
          "sets": 3,
          "reps": 12,
          "rest": 45,
          "zone": "Плечи",
          "equipment": "Гантели",
          "advice": "Поднимай руки до уровня плеч без рывков.",
          "muscles": ["плечи"],
          "type": "dumbbell",
          "difficulty": "beginner"
        },
        {
          "id": 8,
          "name": "Жим лёжа",
          "sets": 3,
          "reps": 10,
          "rest": 90,
          "zone": "Грудь",
          "equipment": "Штанга",
          "advice": "Контролируй движение вниз и не отрывай таз.",
          "muscles": ["грудь", "трицепс", "плечи"],
          "type": "barbell",
          "difficulty": "intermediate"
        }
      ]
    }
  ]
  return (
    <div className='main-style'>
      <WorkoutSession data={data} />
      {/* <Header />
      <TodayWorkoutSection />
      <NextWorkout />
    */}    <Footer />
    </div>
  )
}

export default App

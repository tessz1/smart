export interface Workout {
    id: number;
    title: string;
    day: string;
}

type Gender =
    | "male"
    | "female";

interface Social {
    whatsApp?: string;
    vk?: string;
    telegram?: string;
    max?: string;
}

export interface User {
    id: number;
    gender: Gender;

    firstName: string;
    middleName?: string;
    lastName: string;

    email: string;
    phone: string;

    social: Social;

    loginCount: number;
    membershipCard: string;
}

export type Muscle =
    | "грудь"
    | "спина"
    | "ноги"
    | "ягодицы"
    | "плечи"
    | "бицепс"
    | "трицепс"
    | "пресс"
    | "икры"
    | "предплечья";

export type ExerciseType =
    | "bodyweight"
    | "dumbbell"
    | "barbell"
    | "machine"
    | "cable"
    | "cardio";

export type Difficulty =
    | "beginner"
    | "intermediate"
    | "advanced";

export interface Exercise {
    id: number;
    name: string;

    sets: number;
    reps: number;
    rest: number;

    zone: string;
    equipment: string;
    advice: string;

    muscles: Muscle[];

    type: ExerciseType;
    difficulty: Difficulty;
}

export interface WorkoutDay {
    id: number;
    title: string;
    day: string;
    muscles: Muscle[];
    exercises: Exercise[];
}


export interface WorkoutHistoryItem {
    id: number;
    workoutId: number;
    workoutTitle: string;
    date: string;
    duration: number;
    calories: number;
    completedExercises: number;
}
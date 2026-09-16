import { Dumbbell, Heart, Gauge } from "lucide-react";

const workouts = [
    {
        id: 1,
        name: "Upper Body",
        type: "Strength",
        description: "Build strength and control with focused upper body work.",
        icon: Dumbbell,
        iconClass: "upper-activity-icon",
        exercises: "6 exercises",
        time: "1h 15m",

        exerciseList: [
            {
                id: 1,
                name: "Bench Press",
                muscleGroup: "Chest, Shoulders",
                sets: 4,
                reps: 8
            },

            {
                id: 2,
                name: "Pull Ups",
                muscleGroup: "Back",
                sets: 4,
                reps: 8
            },

            {
                id: 3,
                name: "Shoulder Press",
                muscleGroup: "Shoulders",
                sets: 3,
                reps: 10
            },

            {
                id: 4,
                name: "Seated Cable Row",
                muscleGroup: "Back",
                sets: 3,
                reps: 10
            },

            {
                id: 5,
                name: "Lateral Raise",
                muscleGroup: "Shoulders",
                sets: 3,
                reps: 12
            },

            {
                id: 6,
                name: "Tricep Pushdowns",
                muscleGroup: "Triceps",
                sets: 3,
                reps: 12
            }
        ]
    },
    {
        id: 2,
        name: "Lower Body",
        type: "Strength",
        description: "Build strength and control with focused upper body work.",
        icon: Dumbbell,
        iconClass: "lower-activity-icon",
        exercises: "6 exercises",
        time: "1h 5m",

        exerciseList: [
            {
                id: 1,
                name: "Barbell Squat",
                muscleGroup: "Quads, Glutes, Hamstrings",
                sets: 4,
                reps: 5
            },

            {
                id: 2,
                name: "Romanian DeadLift",
                muscleGroup: "Hamstrings, Back",
                sets: 3,
                reps: 8
                
            }
        ]
    },
    {
        id: 3,
        name: "Cardio",
        icon: Heart,
        iconClass: "cardio-activity-icon",
        runType: "Recovery Run",
        time: "45m"
    },
    {
        id: 4,
        name: "Core & Abs",
        icon: Gauge,
        iconClass: "core-activity-icon",
        exercises: "6 exercises",
        time: "20m"
    }
];

export default workouts;
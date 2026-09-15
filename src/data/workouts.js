import { Dumbbell, Heart, Gauge } from "lucide-react";

const workouts = [
    {
        id: 1,
        name: "Upper Body",
        icon: Dumbbell,
        iconClass: "upper-activity-icon",
        exercises: "6 exercises",
        time: "1h 15m",

        exerciseList: [
            {
                id: 1,
                name: "Bench Press",
                sets: 4,
                reps: 8
            },

            {
                id: 2,
                name: "Pull Ups",
                sets: 4,
                reps: 8
            },

            {
                id: 3,
                name: "Shoulder Press",
                sets: 3,
                reps: 10
            },

            {
                id: 4,
                name: "Seated Cable Row",
                sets: 3,
                reps: 10
            },

            {
                id: 5,
                name: "Lateral Raise",
                sets: 3,
                reps: 12
            },

            {
                id: 6,
                name: "Tricep Pushdowns",
                sets: 3,
                reps: 12
            }
        ]
    },
    {
        id: 2,
        name: "Lower Body",
        icon: Dumbbell,
        iconClass: "lower-activity-icon",
        exercises: "6 exercises",
        time: "1h 5m"
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
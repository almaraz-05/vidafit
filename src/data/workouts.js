import { Dumbbell, Heart, Gauge } from "lucide-react";

const workouts = [
    {
        id: 1,
        name: "Upper Body",
        icon: Dumbbell,
        iconClass: "upper-activity-icon",
        exercises: "6 exercises",
        time: "1h 15m"
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
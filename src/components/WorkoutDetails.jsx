import { useParams, Link } from "react-router-dom";
import workouts from "../data/workouts";
import { ChevronLeft } from "lucide-react";
import "./WorkoutDetails.css";

function WorkoutDetails() {
    const { workoutId } = useParams();
    const workout = workouts.find((workout) => workout.id === Number(workoutId));

    if (!workout) {
        return <h1>Workout not found</h1>
    }

    return (
        <main>

            <Link to="/workouts" className="back-to-workouts">
                <ChevronLeft />
                Back to Workouts
            </Link>




            <h1>Workout Details</h1>
            <p>{workout.name}</p>
            <p>{workout.exercises}</p>
            <p>{workout.time}</p>


            {workout.exerciseList.map((exercise) => (
                <div key={exercise.id}>
                    <h3>{exercise.name}</h3>
                    <p>{exercise.sets} sets x {exercise.reps} reps</p>
                </div>
            ))}
        </main>
    );
}

export default WorkoutDetails;
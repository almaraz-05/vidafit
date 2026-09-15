import { useParams } from "react-router-dom";
import workouts from "../data/workouts";

function WorkoutDetails() {
    const { workoutId } = useParams();
    const workout = workouts.find((workout) => workout.id === Number(workoutId));

    if (!workout) {
        return <h1>Workout not found</h1>
    }

    return (
        <main>
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
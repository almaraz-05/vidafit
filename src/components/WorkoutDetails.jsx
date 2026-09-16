import { useParams, Link } from "react-router-dom";
import workouts from "../data/workouts";
import { ChevronLeft, Dumbbell } from "lucide-react";
import "./WorkoutDetails.css";

function WorkoutDetails() {
    const { workoutId } = useParams();
    const workout = workouts.find((workout) => workout.id === Number(workoutId));

    if (!workout) {
        return <h1>Workout not found</h1>
    }

    return (
        <main className="workout-details">

            <Link to="/workouts" className="back-to-workouts">
                <ChevronLeft size={36} strokeWidth={1.5}/>
                Back to Workouts
            </Link>

            <div className="workout-details-header">
                <div className="workout-details-header-icon">
                    <Dumbbell />
                </div>

                <div className="workout-details-header-content">
                    <p>{workout.type}</p>
                    <h1>{workout.name}</h1>
                    <p>{workout.description}</p>
                </div>
            </div>




            {/* <h1>Workout Details</h1>
            <p>{workout.name}</p>
            <p>{workout.exercises}</p>
            <p>{workout.time}</p> */}


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
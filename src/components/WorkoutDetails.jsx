import { useParams } from "react-router-dom";

function WorkoutDetails() {
    const { workoutId } = useParams();

    return (
        <main>
            <h1>Workout Details</h1>
            <p>{workoutId}</p>
        </main>
    );
}

export default WorkoutDetails;
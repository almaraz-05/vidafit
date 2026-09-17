import { useParams, Link } from "react-router-dom";
import workouts from "../data/workouts";
import { ChevronLeft, ChevronRight, Dumbbell, Clock, Play } from "lucide-react";
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
                <ChevronLeft size={36} strokeWidth={1.5} />
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

            <div className="workout-details-stats">
                <div className="workout-stat">
                    <Dumbbell />
                    <div className="workout-stat-info">
                        <p>{workout.exerciseList.length}</p>
                        <span>Exercises</span>
                    </div>
                </div>

                <div className="workout-stat">
                    <Clock />
                    <div className="workout-stat-info">
                        <p>~{workout.time}</p>
                        <span>Estimated Time</span>
                    </div>
                </div>
            </div>


            <section className="workout-details-exercises">
                <div className="workout-details-exercises-header">
                    <h2>Exercises</h2>
                    <button>Edit</button>
                </div>

                <div className="workout-details-exercises-list">

                    {workout.exerciseList.map((exercise) => (
                        <div className="workout-details-exercise-card" key={exercise.id}>
                            <div className="exercise-card-number">
                                {exercise.id}
                            </div>
                            <div className="exercise-card-info">
                                <h3>{exercise.name}</h3>
                                <p>{exercise.muscleGroup}</p>
                            </div>

                            {workout.type === "Strength" && (
                                <div className="exercise-card-sets">
                                    <p>{exercise.sets} x {exercise.reps}</p>
                                    <span>sets x reps</span>
                                </div>
                            )}

                            {workout.type === "Cardio" && (
                                <div className="exercise-card-sets">
                                    <p>{exercise.duration}</p>
                                    <span>duration</span>
                                </div>

                            )}

                            <ChevronRight className="exercise-card-chevron" />
                        </div>
                    ))}

                </div>

                <button className="start-workout-button">
                    <Play className="start-workout-plus" />
                    Start Workout
                </button>


            </section>



        </main>
    );
}

export default WorkoutDetails;
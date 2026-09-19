import { useParams, Link } from "react-router-dom";
import workouts from "../data/workouts";
import "./ActiveWorkout.css";
import { Dumbbell, ChevronLeft, ChevronDown, ChevronUp, Check, Pause } from "lucide-react";

function ActiveWorkout() {

    const { workoutId } = useParams();
    const workout = workouts.find((workout) => workout.id === Number(workoutId));
    const WorkoutIcon = workout.icon;

    if (!workout) {
        return <h1>Workout not found</h1>
    }
    return (
        <main className="active-workout-details">

            <Link to={`/workouts/${workoutId}`} className="back-to-workout-details">
                <ChevronLeft size={36} strokeWidth={1.5} />
                Exit Workout
            </Link>

            <div className="active-workout-details-header">
                <div className="workout-details-header-icon">
                    <WorkoutIcon size={50}/>
                </div>

                <div className="workout-details-header-content">
                    <p>{workout.type}</p>
                    <h1>{workout.name}</h1>
                    <p>{workout.exerciseList.length} exercises </p>
                </div>
            </div>

            <div className="time-pause-resume-card">
                <div className="workout-time">
                    <h2>00:12</h2>
                    <p>WORKOUT TIME</p>
                </div>

                <div className="pause-resume-button">
                        <Pause />
                        <p>Pause</p>
                </div>
            </div>



            <section className="workout-details-exercises">
                <div className="workout-details-exercises-list">

                    {workout.exerciseList.map((exercise) => (
                        <button className="workout-details-exercise-card" key={exercise.id}>
                            <div className="exercise-card-number">
                                {exercise.id}
                            </div>
                            <div className="exercise-card-info">
                                <h3>{exercise.name}</h3>
                                <p>{exercise.muscleGroup}</p>
                            </div>

                            {workout.type === "Strength" && (
                                <div className="exercise-card-sets">
                                    <p>{exercise.sets} sets </p>
                                    <span>{exercise.reps} reps</span>
                                </div>
                            ) }

                            {workout.type === "Cardio" && (
                                <div className="exercise-card-sets">
                                    <p>{exercise.duration}</p>
                                    <span>duration</span>
                                </div>

                            )}

                            <ChevronDown className="exercise-card-chevron" />
                        </button>
                    ))}

                </div>

                <button className="finish-workout-button" >
                    <Check className="finsih-workout-check" />
                    Finish Workout
                </button>


            </section>



        </main>







    );
}

export default ActiveWorkout
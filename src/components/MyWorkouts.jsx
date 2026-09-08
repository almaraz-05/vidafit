import "./MyWorkouts.css";
import workouts from "../data/workouts";
import { Dumbbell, Heart, Gauge, Ellipsis, Plus } from "lucide-react";
function MyWorkouts() {


    return (
        <section className="my-workouts">
            <div className="my-workouts-header">
                <h2>My Workouts</h2>
                <button className="my-workouts-edit">Edit</button>
            </div>


            {/* .map() our workouts wrapped within a div for the full content*/}
            <div className=" my-workouts-content">
                {workouts.map((workout) => {
                    const Icon = workout.icon;

                    return (

                        <div className="my-workouts-card" key={workout.name}>
                            
                            <div className={`my-workouts-icon ${workout.iconClass}`} > 
                                <Icon />
                            </div>
                            


                            <div className="my-workouts-info">
                                <h3>{workout.name}</h3>
                                <p>{workout.exercises || workout.runType} • {workout.time}</p>
                            </div>





                            <button className="my-workouts-ellipsis">
                                <Ellipsis />
                            </button>
                        </div>




                        

                    );

                })}

                <button className="add-workout-card">
                    <Plus /> 
                    <span>Add New Workout</span>
                </button>

                

            </div>
        </section>


    );

}

export default MyWorkouts;
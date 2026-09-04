import "./MyWorkouts.css";
import { Dumbbell, Heart, Gauge, Ellipsis, Plus } from "lucide-react";
function MyWorkouts() {

    const activities = [
        { name: "Upper Body", icon: Dumbbell, iconClass: "upper-activity-icon", exercises: "6 exercises", time: "1h 15m" },
        { name: "Lower Body", icon: Dumbbell, iconClass: "lower-activity-icon", exercises: "6 exercises", time: "1h 5m"},
        { name: "Cardio", icon: Heart, iconClass: "cardio-activity-icon", runType: "Recovery Run", time: "45m"},
        { name: "Core & Abs", icon: Gauge, iconClass: "core-activity-icon", exercises: "6 exercises", time: "20m" }
    ];

    return (
        <section className="my-workouts">
            <div className="my-workouts-header">
                <h2>My Workouts</h2>
                <button className="my-workouts-edit">Edit</button>
            </div>


            {/* .map() our workouts wrapped within a div for the full content*/}
            <div className=" my-workouts-content">
                {activities.map((activity) => {
                    const Icon = activity.icon;

                    return (

                        <div className="my-workouts-card" key={activity.name}>
                            
                            <div className={`my-workouts-icon ${activity.iconClass}`} > 
                                <Icon />
                            </div>
                            


                            <div className="my-workouts-info">
                                <h3>{activity.name}</h3>
                                <p>{activity.exercises || activity.runType} • {activity.time}</p>
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
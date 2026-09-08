import { ChevronRight, Dumbbell, Heart } from "lucide-react";
import "./RecentActivity.css";
import workouts from "../data/workouts";

function RecentActivity() {

    return (
        <section className="recent-activity">
            <div className="recent-activity-header">
                <h2>Recent Activity</h2>
                <button className="recent-activity-see-all">See all</button>
            </div>

            {workouts.map((workout) => {
                const Icon = workout.icon;

                return (
                    <button className="recent-activity-card" key={workout.name}>
                        <div className={`recent-activity-icon ${workout.iconClass}`}>
                            <Icon />
                        </div>


                        <div className="recent-activity-info">
                            <h3>{workout.name}</h3>
                            <p>{workout.date} • {workout.exercises || workout.distance} • {workout.time}</p>
                        </div>

                        <div className="recent-activity-chevron">
                            <ChevronRight />
                        </div>
                    </button>
                );
            })}


        </section>
    );
}

export default RecentActivity;
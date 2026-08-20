import { ChevronRight, Dumbbell, Heart } from "lucide-react";
import "./RecentActivity.css";

function RecentActivity() {

    const activities = [
        { name: "Upper",  icon: Dumbbell, iconClass: "upper-activtiy-icon",  date: "Today",     exercises: "6 exercises", time: "1hr 15min" },
        { name: "Lower",  icon: Dumbbell, iconClass: "lower-activity-icon",  date: "August 17", exercises: "5 exercises", time: "1 hr 5 min" },
        { name: "Cardio", icon: Heart,    iconClass: "cardio-activity-icon", date: "August 15", distance: "4 miles", time: "42 min" }
    ];

    return (
        <section className="recent-activity">
            <div className="recent-activity-header">
                <h2>Recent Activity</h2>
                <button className="recent-activity-see-all">See all</button>
            </div>

            {activities.map((activity) => {
                const Icon = activity.icon;

                return (
                    <button className="recent-activity-card" key={activity.name}>
                        <div className={`recent-activity-icon ${activity.iconClass}`}>
                            <Icon />
                        </div>


                        <div className="recent-activity-info">
                            <h3>{activity.name}</h3>
                            <p>{activity.date} • {activity.exercises || activity.distance} • {activity.time}</p>
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
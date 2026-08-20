import { ChevronRight } from "lucide-react";
import "./RecentActivity.css";

function RecentActivity() {

    const activities = [
        { name: "Upper", date: "Today", exercises: "6 exercises", time: "1hr 15min" },
        { name: "Lower", date: "August 17", exercises: "5 exercises", time: "1 hr 5 min" },
        { name: "Cardio", date: "August 15", distance: "4 miles", time: "42 min" }
    ];

    return (
        <section className="recent-activity">
            <div className="recent-activity-header">
                <h2>Recent Activity</h2>
                <button className="recent-activity-see-all">See all</button>
            </div>

            {activities.map((activity) => (
                <div className="recent-activity-card" key={activity.name}>
                    <div className="recent-activity-icon"></div>

                    <div className="recent-activity-info"></div>

                    <div className="recent-activity-chevron">
                        <ChevronRight />
                    </div>
                </div>


            ))}


        </section>
    );
}

export default RecentActivity;
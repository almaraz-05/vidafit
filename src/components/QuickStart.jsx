import "./QuickStart.css";
import { Dumbbell, Heart, PersonStanding, Plus } from "lucide-react";

function QuickStart() {

    const exercise = [
        { name: "Strength", icon: Dumbbell, iconClass: "strength-icon"},
        { name: "Cardio", icon: Heart, iconClass: "cardio-icon" },
        { name: "Mobility", icon: PersonStanding, iconClass: "mobility-icon" },
        { name: "Other", icon: Plus, iconClass: "other-icon" }
    ];

    return (
        <section className="quick-start">
            <div className="quick-start-header">
                <h2>Quick Start</h2>
                <button className="quick-start-see-all">See all</button>
            </div>

            <div className="quick-start-exercise">
                {exercise.map((exercise) => {
                    const Icon = exercise.icon;

                    return (
                        <button className="quick-start-card" key={exercise.name}>
                            <Icon className={exercise.iconClass}/>
                            <span>{exercise.name}</span>
                        </button>
                    );
                })}
            </div>

        </section>



    );
}
export default QuickStart;

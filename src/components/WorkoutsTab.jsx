
import { useState } from "react";
import "./WorkoutsTab.css";

function WorkoutTab() {

    const tabs = [
        "My Workouts",
        "Templates", 
        "Favorites",
        "History"
    ];

    const [activeTab, setActiveTab] = useState("My Workouts");

    return (
        <div className="workouts-tab">
            {tabs.map((tab) => (
                <button className={tab === activeTab ? "workouts-tab-button active" : "workouts-tab-button"} key={tab} onClick={() => setActiveTab(tab)}>
                    <p>{tab}</p>
                </button>
            ))}
        </div>
    );
}
export default WorkoutTab;
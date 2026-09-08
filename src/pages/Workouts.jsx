import { Filter, Plus } from "lucide-react";
import { useState } from "react";
import "./Workouts.css";

import WorkoutTab from "../components/WorkoutsTab";
import MyWorkouts from "../components/MyWorkouts";
import Templates from "../components/Templates";
import Favorites from "../components/Favorites";
import History from "../components/History";


function Workouts() {

    const [activeTab, setActiveTab] = useState("My Workouts");

    return (
        <main className="workouts">
            <header className="workouts-header">
                <div className="workouts-header-left">
                    <h1>Workouts</h1>
                    <p>Build consistency. See results.</p>
                </div>

                <div className="workouts-header-right">
                    <button className="workouts-header-filter">
                        <Filter />
                    </button>

                    <button className="workouts-header-plus">
                        <Plus />
                    </button>
                </div>
            </header>

            <WorkoutTab 
                activeTab={activeTab}
                setActiveTab={setActiveTab}    
            />

            {activeTab === "My Workouts" && <MyWorkouts />}
            {activeTab === "Templates" && <Templates />}
            {activeTab === "Favorites" && <Favorites />}
            {activeTab === "History" && <History />}








        </main>

    );
}

export default Workouts;
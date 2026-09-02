import { Filter, Plus } from "lucide-react";
import "./Workouts.css";
import WorkoutTab from "../components/WorkoutsTab";
import MyWorkouts from "../components/MyWorkouts";

function Workouts() {
    return (
        <main className="workouts">
            <section className="workouts-header">
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
            </section>

            <WorkoutTab />
            <MyWorkouts />







        </main>

    );
}

export default Workouts;
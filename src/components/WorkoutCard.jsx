import "./WorkoutCard.css";
import { Dumbbell } from "lucide-react";

function WorkoutCard() {
    return (
        <div className="workout-card">

            <div className="workout-card-top">

                <div className="workout-card-left">

                    <div className="workout-card-info">
                        <div className="workout-card-icon">
                            <Dumbbell />
                        </div>

                        <div className="workout-card-content">
                            <p className="workout-card-label">Today's Plan</p>
                            <h3 className="workout-card-title">Upper Body</h3>
                            <p className="workout-card-details">
                                6 exercises • ~60 min
                            </p>
                        </div>
                    </div>

                    <button className="workout-card-button">
                        Start Workout
                    </button>

                </div>

                <div className="workout-card-image">
                    
                </div>

            </div>

        </div>
    );
}

export default WorkoutCard;
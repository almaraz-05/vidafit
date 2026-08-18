import "./QuickStart.css";

function QuickStart() {

    const exercise = [
        {name: "Strength", icon: "🏋️"},
        {name: "Cardio", icon: "🏃"},
        {name: "Mobility", icon: "🧘"},
        {name: "Other", icon: "+"}
    ];

    return (
        <section className="quick-start">
            <div className="quick-start-header">
                <h2>Quick Start</h2>
                <button className="quick-start-see-all">See all</button>
            </div>
            
            <div className="quick-start-exercise"> 
                {exercise.map((exercise) => (
                    <button className="quick-start-card">
                        <span>{exercise.icon}</span>
                        <p>{exercise.name}</p>
                    </button>
                ))}


            </div>
            
        </section>



    );
}
export default QuickStart;
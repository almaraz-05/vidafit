import "./WeeklyOverview.css"

function WeeklyOverview() {

    // create array of objects for days of the week
    const days = [
        { day: "Mon", workout: "Upper", completed: true },
        { day: "Tue", workout: "Lower", completed: false },
        { day: "Wed", workout: "Rest", completed: true },
        { day: "Thu", workout: "Cardio", completed: false },
        { day: "Fri", workout: "Upper", completed: true },
        { day: "Sat", workout: "Lower", completed: true },
        { day: "Sun", workout: "Rest", completed: true },

    ];



    return (
        <section className="weekly-overview">
            <div className="weekly-overview-header">
                <h2>This Week</h2>
                <button className="view-calendar">View calendar</button>
            </div>

            <div className="weekly-overview-days">
                {days.map((item) => (
                    <div className="weekly-day" key={item.day}>
                        <p>{item.day}</p>

                        <div className={`weekly-day-status ${item.completed ? "completed" : ""} `}>
                            {item.completed ? "✓" : " "}
                        </div>

                        <p>{item.workout}</p>
                    </div>

                ))}

            </div>

        </section>

    );

}

export default WeeklyOverview; 
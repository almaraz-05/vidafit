import "./WorkoutsTab.css";

function WorkoutTab({activeTab, setActiveTab }) {

    const tabs = [
        "My Workouts",
        "Templates", 
        "Favorites",
        "History"
    ];


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
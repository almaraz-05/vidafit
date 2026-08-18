import "./Home.css";
import WorkoutCard from "../components/WorkoutCard";
import WeeklyOverview from "../components/WeeklyOverview";
function Home() {
    return (
        <main className="home">
            <section className="home-greeting">
                <h2>Good evening!</h2>
                <p>Ready to move?</p>
            </section>
            <WorkoutCard />
            <WeeklyOverview />

        </main>

    );

}
export default Home;

import "./Home.css";
import WorkoutCard from "../components/WorkoutCard";
import WeeklyOverview from "../components/WeeklyOverview";
import QuickStart from "../components/QuickStart";
function Home() {
    return (
        <main className="home">
            <section className="home-greeting">
                <h2>Good evening!</h2>
                <p>Ready to move?</p>
            </section>
            <WorkoutCard />
            <WeeklyOverview />
            <QuickStart />

        </main>

    );

}
export default Home;

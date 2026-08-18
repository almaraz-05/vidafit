import "./Home.css";
import WorkoutCard from "../components/WorkoutCard";
function Home() {
    return (
        <main className="home">
            <section className="home-greeting">
                <h2>Good evening!</h2>
                <p>Ready to move?</p>
            </section>
            <WorkoutCard />

        </main>

    );

}
export default Home;

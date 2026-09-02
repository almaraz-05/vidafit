import "./Home.css";
import WorkoutCard from "../components/WorkoutCard";
import WeeklyOverview from "../components/WeeklyOverview";
import QuickStart from "../components/QuickStart";
import RecentActivity from "../components/RecentActivity";
import Header from "../components/Header";

function Home() {
    return (

        

        <main className="home">

            <Header />
            <section className="home-greeting">
                <h2>Good evening!</h2>
                <p>Ready to move?</p>
            </section>
            <WorkoutCard />
            <WeeklyOverview />
            <QuickStart />
            <RecentActivity />

        </main>

    );

}
export default Home;

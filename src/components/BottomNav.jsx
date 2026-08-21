import "./BottomNav.css";

function BottomNav() {

    const navOptions = [
        {},
        {},
        {},
        {}
    ]


    return (
        <nav className="bottom-nav">

            <button className="bottom-nav-info">
                {/* <Home /> */}
                <span>Home</span>
            </button>


            <button className="bottom-nav-info">
                {/* <Home /> */}
                <span>Workouts</span>
            </button>


            <button className="bottom-nav-info">
                {/* <Home /> */}
                <span>Progress</span>
            </button> 

            <button className="bottom-nav-info">
                {/* <Home /> */}
                <span>Profile</span>
            </button>
        </nav>
    );
}
export default BottomNav;
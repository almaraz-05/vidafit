import { Home, CirclePlay, ChartNoAxesCombined, User } from 'lucide-react';
import "./BottomNav.css";

function BottomNav() {

    const navOptions = [
        {name: "Home", icon: Home, iconClass: "home-icon"},
        {name: "Workouts", icon: CirclePlay, iconClass: "workouts-icon"},
        {name: "Progress", icon: ChartNoAxesCombined, iconClass: "progress-icon"},
        {name: "Profile", icon: User, iconClass: "profile-icon"}
    ];


    return (
        <nav className="bottom-nav">
            {navOptions.map((option) => {
                const Icon = option.icon;

                return (
                    <button className="bottom-nav-info" key={option.name}>
                        <Icon className={option.iconClass}/>
                        <span>{option.name}</span>
                    </button>

                );

            })}

        </nav>
    );
}
export default BottomNav;
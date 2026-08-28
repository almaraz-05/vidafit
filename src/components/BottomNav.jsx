import { Home, CirclePlay, ChartNoAxesCombined, User } from 'lucide-react';
import "./BottomNav.css";
import { NavLink } from 'react-router-dom';

function BottomNav() {

    const navOptions = [
        {name: "Home", icon: Home, iconClass: "home-icon", path: "/"},
        {name: "Workouts", icon: CirclePlay, iconClass: "workouts-icon", path: "/workouts"},
        {name: "Progress", icon: ChartNoAxesCombined, iconClass: "progress-icon", path: "/progress"},
        {name: "Profile", icon: User, iconClass: "profile-icon", path: "/profile"}
    ];


    return (
        <nav className="bottom-nav">
            {navOptions.map((option) => {
                const Icon = option.icon;

                return (
                    <NavLink to={option.path} className={({ isActive }) => isActive ? "bottom-nav-info active" : "bottom-nav-info"} key={option.name}>
                        <Icon className={option.iconClass}/>
                        <span>{option.name}</span>
                    </NavLink>

                );

            })}

        </nav>
    );
}
export default BottomNav;
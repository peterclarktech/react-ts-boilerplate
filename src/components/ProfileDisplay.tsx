import { FC, useContext } from "react";
import AppContext from "../contexts/AppContext";
import { NavLink } from "react-router-dom";

const ProfileDisplay: FC<{}> = () => {
    const appContext = useContext(AppContext);
    const isLoggedIn = appContext.user && appContext.user.username;

    const logoutHandler = () => {
        appContext.setUser({ username: "", firstname: "" });
    }

    const loginDisplay = (
        <NavLink className={"hover:text-gray-light hover:underline"} to="/login">Please Login</NavLink>
    )

    const logoutDisplay = (
        <NavLink className={"hover:text-gray-light hover:underline"} to={"/"} onClick={logoutHandler}>Logout</NavLink>
    )

    return (
        <span className="text-white">
            {isLoggedIn && <span className="font-extralight mr-2 hidden sm:inline">Hi, {appContext.user.firstname}</span>}
            <span className="mx-2">
                <span className=""><i className="bi bi-person-circle"></i></span>
            </span>
            {isLoggedIn ? (logoutDisplay) : (loginDisplay)}
        </span>
    );
};

export default ProfileDisplay;

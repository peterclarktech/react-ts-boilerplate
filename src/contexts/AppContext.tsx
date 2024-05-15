import React, { FC, createContext, useState } from "react";
import { DarkMode } from "../utils/ColorGroup";
import useUserDarkMode from "../hooks/useUserDarkMode";

//ApplicationContext
export type AppContextObj = {
    darkmode: DarkMode,
    setDarkmode: (mode: DarkMode) => void,
    user: {
        username: string,
        firstname: string
    },
    setUser: (user: { username: string, firstname: string }) => void
}
const initAppContext: AppContextObj = {
    darkmode: DarkMode.auto,
    setDarkmode: () => {},
    user: { username: "", firstname: "" },
    setUser: () => {}
}
const AppContext = createContext(initAppContext);


export default AppContext;


export const AppContextWrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentDarkMode, setCurrentDarkMode] = useState<DarkMode>(DarkMode.auto);
    const userPrefDarkmode = useUserDarkMode();

    let currentContext:AppContextObj = {
        ...initAppContext,
        darkmode: currentDarkMode,
        setDarkmode: (mode) => setCurrentDarkMode(mode),
        //TODO: Add User Management here
    }

    let darkClass = currentContext.darkmode === DarkMode.on || 
        (currentContext.darkmode === DarkMode.auto && userPrefDarkmode.isDarkMode) 
            ? "dark" : "";

    return (
        <AppContext.Provider value={currentContext}>
            <div className={darkClass}>
                {children}
            </div>
        </AppContext.Provider>
    )
}
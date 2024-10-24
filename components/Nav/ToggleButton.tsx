'use client'
import { useAppSelector } from "@/redux/store/hook";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function ToggleButton() {
    const [isDarkMode, setDarkMode] = useState(false);
    const darkmode = useAppSelector(store => store.darkmode.value)

    const toggleDarkMode = (checked: boolean) => {
        // dispatch(toggleDarkmode())
        setDarkMode(checked);
    };
    return (
        <div className={`h-9 w-9 duration-500 active:scale-90 cursor-pointer grid place-content-center border-2 shadow-md rounded-full  ${darkmode ? "border-prim shadow-gray-800" : "border-secondary shadow-gray-500 bg-secondary text-prim"}`}>
            <DarkModeSwitch
                style={{}}
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={22}
                color={"rgb(157 251 250)"}
            />
        </div>)
}

'use client'
import { useAppSelector } from "@/redux/store/hook"

export default function Gem() {
    const darkmode = useAppSelector(store => store.darkmode.value)
    return (
        <div className="flex items-center gap-2">
            <img src="gem.png" className="" alt="" />
            <p className={`hidden sm:block font-semibold duration-500 ${darkmode ? "text-white" : 'text-secondary'} `}>0.0200</p>
        </div>
    )
}

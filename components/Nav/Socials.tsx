'use client'
import { useAppSelector } from "@/redux/store/hook";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
export default function Socials() {
    const darkmode = useAppSelector(store => store.darkmode.value)
    return (
        <div className={`flex items-center w-fit duration-500 gap-3 lg:gap-5 overflow-hidden ${darkmode ? "bg-white/10 " : "bg-black/10 border-gray-600"} cursor-pointer px-3 lg:px-5 py-2 rounded-full`}>
            <FaXTwitter className={`${darkmode ? "text-white" : "text-secondary"} duration-500 text-sm lg:text-base`} />
            <FaTelegram className={`${darkmode ? "text-white" : "text-cyan-600"} duration-500 text-sm lg:text-base`} />
            <FaDiscord className={`${darkmode ? "text-white" : "text-purple-500"} duration-500 text-base lg:text-xl`} />
        </div>)
}

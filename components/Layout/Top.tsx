'use client'
import { useEffect, useState } from "react"
import { SiBlockchaindotcom } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { FaRegGem } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Divide as Hamburger } from 'hamburger-react'
import { MdMenuOpen } from "react-icons/md";
import { GoSidebarExpand } from "react-icons/go";
import { usePathname } from "next/navigation";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import { toggleDarkmode } from "@/redux/reducers/darkmode";
import { BsSearch } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { useGetTonAddress } from "@/hooks/hook";



export default function Top() {
    const [isOpen, setOpen] = useState(false)
    const [isDarkMode, setDarkMode] = useState(false);
    const pathname = usePathname()
    const dispatch = useAppDispatch()
    const darkmode = useAppSelector(store => store.darkmode.value)

    const [friendlyAddress, rawAddress] = useGetTonAddress()

    useEffect(() => {
        console.log(friendlyAddress, rawAddress)
    }, [friendlyAddress, rawAddress])



    const toggleDarkMode = (checked: boolean) => {
        // dispatch(toggleDarkmode())
        setDarkMode(checked);
    };
    return (
        <div className={` duration-500 shadow-md lg:shadow-none ${darkmode ? "bg-transparent" : "bg-gray-50"}`}>
            <div className={`h-32 xl:h-20 grid duration-500 ${darkmode ? "border-purplee" : "border-secondary"} w-full items-center xl:grid-cols-[300px_1fr_330px] 3xl:grid-cols-[300px_1fr_360px]`}>
                <div className={`xl:pl-5 pr-2 xl:pr-0 h-16 xl:h-full flex items-center justify-between border-r-2 duration-500 ${darkmode ? "border-r-purplee" : "border-r-gray-200"} border-b-transparent `}>
                    <div className="xl:hidden">
                        <Hamburger toggled={isOpen} color={darkmode ? "white" : 'black'} size={20} toggle={setOpen} />
                    </div>
                    <img src="logo.png" className="w-36" alt="" />
                    <div className={`flex xl:hidden items-center  duration-500 gap-5 overflow-hidden ${darkmode ? "border-transparent bg-white/10" : "bg-black/10 border-secondary"} cursor-pointer px-3 h-[35px] rounded-full`}>
                        <FaXTwitter className={`${darkmode ? "text-white" : "text-black"}  duration-500 text-sm`} />
                        <FaTelegram className={`${darkmode ? "" : ""} text-blue-600 duration-500 text-sm`} />
                        <FaDiscord className={`${darkmode ? "" : ""} text-purple-500 duration-500 text-lg`} />
                    </div>
                </div>
                <div className={`hidden xl:flex border-b-2 duration-500 h-full px-4 justify-between items-center ${darkmode ? "border-b-purplee" : "border-b-gray-200"}`}>
                    <div className={`flex items-center  duration-500 gap-5 border-2 overflow-hidden ${darkmode ? "bg-white/10 border-prim" : "bg-black/10 border-gray-600"} cursor-pointer px-5 h-[45px] rounded-full`}>
                        <FaXTwitter className={`${darkmode ? "text-white" : "text-secondary"} duration-500 text-base`} />
                        <FaTelegram className={`${darkmode ? "text-white" : "text-cyan-600"} duration-500 text-base`} />
                        <FaDiscord className={`${darkmode ? "text-white" : "text-purple-500"} duration-500 text-xl`} />
                    </div>
                    <div className={`${darkmode ? "bg-white/10 border-prim" : "border-gray-600 bg-black/10"} w-[235px] xl:w-[325px] h-[45px] shadow duration-500 border-2 rounded-3xl relative `}>
                        <input type="text" placeholder='Try searching "Trending"' className={`h-full text-white placeholder:font-normal  w-full bg-transparent outline-none pr-10 pl-5 `} />
                        <BiSearch className={`${darkmode ? "text-prim" : "text-secondary"} duration-500 absolute top-1/2 -translate-y-1/2 right-3 text-xl`} />
                    </div>
                    <div className={`h-10 w-10 duration-500 active:scale-90 cursor-pointer grid place-content-center border-2 shadow-md rounded-full  ${darkmode ? "border-prim shadow-gray-800" : "border-secondary shadow-gray-500 bg-secondary text-prim"}`}>
                        <DarkModeSwitch
                            style={{}}
                            checked={isDarkMode}
                            onChange={toggleDarkMode}
                            size={25}
                            color={"rgb(157 251 250)"}
                        />
                    </div>
                </div>
                <div className={`h-16 xl:h-full px-2 border-l-2 flex gap-5 xl:gap-0 justify-between items-center ${darkmode ? "border-l-purplee" : "border-l-gray-200"} duration-500 border-b-transparent `}>
                    <div className="hidden xl:flex items-center gap-2">
                        <img src="gem.png" alt="" />
                        <p className={`font-semibold duration-500 ${darkmode ? "text-white" : 'text-secondary'} `}>0.0200</p>
                    </div>
                    <div className={`max-w-96 xl:hidden ${darkmode ? "border-prim" : "border-secondary"} border-2 flex-1 h-[40px] shadow duration-500 rounded-full relative `}>
                        <input type="text" placeholder='Try searching "Trending"' className={`h-full text-white placeholder:font-normal  w-full bg-transparent text-xs outline-none pr-10 pl-5 `} />
                        <BiSearch className={`${darkmode ? "text-prim" : "text-secondary"} duration-500 absolute top-1/2 -translate-y-1/2 right-3 text-base xl:text-xl`} />
                    </div>
                    <img src="gem.png" className="xl:hidden -translate-x-1" alt="" />
                    <div className="flex items-center gap-2">
                        {friendlyAddress
                            ?
                            <div className={`flex shrink-0 gap-2 items-center px-4 py-3 xl:px-5 xl:py-3 border-2 font-semibold duration-500 rounded-lg xl:rounded-xl cursor-pointer active:scale-100 hover:scale-105 shadow-md ${darkmode ? "border-prim text-prim" : "text-secondary border-secondary"}`}>
                                <FaRegGem className="text-base xl:text-lg" />
                                <p className="text-xs xl:text-sm">Create Token</p>
                            </div>
                            :
                            <TonConnectButton style={{ paddingBlock: "10px" }} />}
                    </div>
                </div>
            </div>

        </div>
    )
}

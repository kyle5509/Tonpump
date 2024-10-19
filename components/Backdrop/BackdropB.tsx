'use client'
import { motion } from 'framer-motion'
import { useAppSelector } from "@/redux/store/hook";
import Screen1B from "./Screen1B";
import Screen2B from "./Screen2B";
import Screen3B from "./Screen3B";
import Screen4B from "./Screen4B";
import Screen5B from "./Screen5B";
import SidebarB from "./SidebarB";
import { useState } from 'react';

export default function BackdropB() {
    const backdrop = useAppSelector(store => store.backdrop.value)
    const [active, setActive] = useState(0)
    return (
        <div className={`fixed w-full z-[500] bg-black/20 duration-500 overflow-hidden backdrop-blur-xl h-[calc(100vh-80px)] top-[80px] left-0 lg:grid hidden place-content-center ${backdrop === 2 ? "opacity-100 visible": "opacity-0 invisible" }`}>
            <div className="flex h-[600px] rounded-2xl bg-[#2D383E]">
                <div className="border-r-2 flex flex-col rounded-2xl overflow-hidden rounded-r-none w-[290px]">
                    <div className="flex h-14 px-5 justify-between items-center text-prim">
                        <img src="logo2.png" alt="" />
                        <p>Connect Wallet</p>
                    </div>
                    <div className="flex flex-1">
                        <SidebarB />
                    </div>
                </div>
                <div className="w-[570px] h-full rounded-2xl flex flex-col">
                    {/* <Screen1B /> */}
                    {/* <Screen2B /> */}
                    {/* <Screen3B /> */}
                    {/* <Screen4B /> */}
                    <Screen5B />
                   
                </div>
            </div>
        </div>
    )
}

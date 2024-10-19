'use client '
import { motion } from 'framer-motion'
import { useAppSelector } from "@/redux/store/hook";
import Screen1A from "./Screen1A";
import Screen2A from "./Screen2A";
import Screen3A from "./Screen3A";
import Screen4A from "./Screen4A";
import SidebarA from "./SidebarA";
import { useState } from "react";

export default function BackdropA() {
    const backdrop = useAppSelector(store => store.backdrop.value)
    const [active, setActive] = useState(0)
    return (
        <div className={`fixed w-full hidden z-[500] bg-black/20 duration-500 backdrop-blur-xl h-[calc(100vh-80px)] top-[80px] left-0 lg:grid place-content-center ${backdrop === 1 ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            <div className="flex h-[calc(100vh-120px)] max-h-[620px] overflow-y-auto rounded-2xl bg-[#2D383E]">
                <div className="border-r-2 overflow-y-auto flex flex-col rounded-2xl overflow-hidden rounded-r-none w-[280px]">
                    <div className="flex h-14 p-5 justify-between items-center text-prim">
                        <img src="logo2.png" alt="" />
                        <p>Connect Wallet</p>
                    </div>
                    <div className="flex flex-1">
                        <SidebarA setActive={setActive} active={active} />
                    </div>
                </div>
                <div className="w-[550px] h-full rounded-2xl flex flex-col">
                    <motion.div
                        transition={{ duration: 1 }}
                        animate={{ opacity: active === 0 ? 1 : 0 }} className={`flex-1 ${active !== 0 && 'hidden'}`}>
                        <Screen1A />
                    </motion.div>
                    <motion.div
                        transition={{ duration: 1 }}
                        animate={{ opacity: active === 1 ? 1 : 0 }} className={`flex-1 ${active !== 1 && 'hidden'}`}>
                        <Screen2A />
                    </motion.div>
                    <motion.div
                        transition={{ duration: 1 }}
                        animate={{ opacity: active === 2 ? 1 : 0 }} className={`flex-1 ${active !== 2 && 'hidden'}`}>
                        <Screen3A />
                    </motion.div>
                    <motion.div
                        transition={{ duration: 1 }}
                        animate={{ opacity: active === 3 ? 1 : 0 }} className={`flex-1 ${active !== 3 && 'hidden'}`}>
                        <Screen4A />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

'use client'
import { useState } from "react"
import { Divide as Hamburger } from 'hamburger-react'
import { useAppSelector } from "@/redux/store/hook";
import Socials from "./Socials";
import Search from "./Search";
import ToggleButton from "./ToggleButton";
import TonButton from "./TonButton";
import Gem from "./Gem";
import MobileNav from "./MobileNav";
import Link from "next/link";



export default function Top() {
    const [isOpen, setOpen] = useState(false)
    const darkmode = useAppSelector(store => store.darkmode.value)

    return (
        <div className="lg:h-20 flex-col lg:flex-row lg:px-5 border-b-2 border-purplee flex  justify-between items-center">
            <MobileNav isOpen={isOpen} setOpen={setOpen} />
            <div className="flex h-16 lg:h-auto px-3 items-center justify-between lg:justify-start  w-full lg:gap-6">
                <div onClick={() => setOpen(!isOpen)} className="lg:hidden">
                    <span className="-translate-x-3">
                        <Hamburger color="white" size={20} />
                    </span>
                </div>
                <Link href='/' onClick={() => setOpen(!isOpen)}>
                    <img src="logo.png" className="w-36 lg:w-40" alt="" />
                </Link>
                <Socials />
            </div>
            <div className="hidden lg:block">
                <Search />
            </div>
            <div className="flex h-16 lg:h-auto px-3 items-center gap-2 w-full justify-between lg:gap-5 lg:justify-end">
                <div className="hidden lg:block">
                    <ToggleButton />
                </div>
                <div className="flex-1 lg:flex-none lg:hidden">
                    <Search />
                </div>
                <div className="flex gap-2 lg:gap-4 lg:flex-none justify-end flex-[1.5]">
                    <Gem />
                    <TonButton />
                </div>
            </div>
        </div>
    )
}

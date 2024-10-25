'use client'

import { useAppSelector } from "@/redux/store/hook"
import { BiSearch } from "react-icons/bi"

export default function Search() {
    const darkmode = useAppSelector(store => store.darkmode.value)

    return (
        <div className={`${darkmode ? "bg-white/10 border-prim" : "border-gray-600 bg-black/10"} w-full lg:w-[275px] xl:w-[350px] h-[45px] shadow duration-500 border-2 rounded-3xl relative `}>
            <input type="text" placeholder='Try searching "Trending"' className={`h-full text-white placeholder:font-semibold placeholder:text-prim  w-full bg-transparent outline-none pr-10 pl-5 `} />
            <BiSearch className={`${darkmode ? "text-prim" : "text-secondary"} duration-500 absolute top-1/2 -translate-y-1/2 right-3 text-xl`} />
        </div>
    )
}

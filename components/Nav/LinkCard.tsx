import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { BiHome } from 'react-icons/bi'

type Props = {
    title: string
    link: string
    icon: any
}

export default function LinkCard({ title, link, icon }: Props) {
    const pathname = usePathname()
    return (
        <Link href={link} className={`h-12 w-full border-2 group active:scale-[.98] duration-300  cursor-pointer flex items-center  gap-3 pl-4 rounded-xl shadow-lg  ${pathname === link ? "border-prim bg-prim" : "bg-[#3C4141] hover:border-prim text-white border-gray-500"}`}>
            <span className={` ${pathname !== link && " group-hover:text-prim"} duration-300`}>{icon}</span>
            <p className={`text-sm font-semibold  ${pathname !== link && " group-hover:text-prim"}  duration-300`}>{title}</p>
        </Link>
    )
}

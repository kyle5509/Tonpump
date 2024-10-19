'use client'
import { useAppSelector } from '@/redux/store/hook'

type Props = {
    title: string
    leaveWhite?: boolean
    parentStyle?: string
    textStyle?: string
    height?: string
}

export default function Title({ title, height, textStyle, parentStyle, leaveWhite }: Props) {
    const darkmode = useAppSelector(store => store.darkmode.value)
    return (
        <div style={{ height: `${height}` }} className={`${parentStyle} pl-4 h-[45px] overflow-hidden rounded-[3px] flex items-center relative w-full `}>
            <div className={`h-6 w-6 -top-[16px] rotate-45 -left-[15px] duration-500 absolute ${darkmode ? "bg-prim" : "bg-secondary"}`}></div>
            <div className={`h-6 w-6 -bottom-[16px] rotate-45 -left-[15px] duration-500 absolute ${darkmode ? "bg-gray-100" : "bg-prim"} `}></div>
            <p className={`place-content-center text-base lg:text-[17px] duration-500 font-semibold ${darkmode ? 'text-white' : `${leaveWhite ? "text-white" : "text-black"}`} ${textStyle} duration-500 transition-colors`}>{title}</p>
        </div>
    )
}

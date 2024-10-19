'use client'
import { useAppSelector } from "@/redux/store/hook"
import { BsChevronRight } from "react-icons/bs"

type Props = {
    title: string
    amount: number
    user: string
}
export default function ActionCard({ title, amount, user }: Props) {
    const darkmode = useAppSelector(store => store.darkmode.value)
    return (
        <div className="font-semibold">
            {title === "create" && <div className={`h-14 w-full duration-500   transition-colors ${!darkmode ? "bg-[#EDEFF2]": "bg-[#D8FDFD0F]"} text-white grid grid-cols-[1fr_50px] items-center gap-3 p-3 rounded-xl relative`}>
                <div className="flex items-center gap-2">
                    <img src="updateIcon.png" alt="" />
                    <p className={`text-11 md:text-xs duration-500 ${darkmode ? "text-white": "text-secondary"}`}><b>{user}</b> created $Space</p>
                </div>
                <img src="updateAst.png" className="rounded-md" alt="" />
                <BsChevronRight className={`absolute duration-500 top-1/2 -translate-y-1/2 right-3 ${darkmode? "": "text-gray-600"}`} />
            </div>}
            {title === "sell" && <div className="h-14 grid grid-cols-[1fr_50px] w-full bg-[#F23BF614] text-white items-center gap-3 p-3 rounded-xl relative">
                <div className="flex items-center gap-2">
                    <img src="updateIcon.png" alt="" />
                    <p className="text-11 md:text-xs text-[#F23BF6]"><b>{user}</b> sold {amount} TON of $Apple</p>
                </div>
                <img src="apple.png" className="rounded-md" alt="" />
                <BsChevronRight className={`absolute top-1/2 duration-500 -translate-y-1/2 right-3 ${darkmode? "": "text-gray-600"}`} />
            </div>}
            {title === "buy" && <div className={`h-14 w-full  text-white grid grid-cols-[1fr_50px] items-center gap-3 p-3 rounded-xl relative duration-500 ${darkmode ? "bg-white/10" : "bg-[rgb(222,249,247)]"}`}>
                <div className="flex items-center gap-2">
                    <img src="updateIcon.png" alt="" />
                    <p className="text-11 md:text-xs text-[rgb(40,150,143)]"><b>{user}</b> bought {amount} TON of $Apple</p>

                </div>
                <img src="apple.png" className="rounded-md" alt="" />
                <BsChevronRight className={`absolute top-1/2 duration-500 -translate-y-1/2 right-3 ${darkmode? "": "text-gray-600"}`} />
            </div>}



           
        </div>
    )
}

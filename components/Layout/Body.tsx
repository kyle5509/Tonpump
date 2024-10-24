'use client'
import { useAppSelector } from "@/redux/store/hook"
import LeftSidebar from "../Nav/Sidebar"
import { usePathname } from "next/navigation"

type Props = {
  children: React.ReactNode
}
export default function Body({ children }: Props) {
  const darkmode = useAppSelector(store => store.darkmode.value)
  const redirecting = useAppSelector(store => store.redirect.value)
  const pathname = usePathname()

  return (
    <div className="flex-1 h-full overflow-y-auto grid lg:grid-cols-[auto_1fr] w-full">
      <LeftSidebar />
      <div className="h-full relative overflow-y-auto">
        <div className={`h-full w-full bg-mainDark absolute ${redirecting ? "opacity-100 visible" : "opacity-0 invisible"} duration-500 grid place-content-center z-20 top-0 left-0`}>
          <span className="loader3"></span>
        </div>
        <div className="h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  )
}

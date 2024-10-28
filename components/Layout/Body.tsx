'use client'
import { useAppSelector } from "@/redux/store/hook"
import LeftSidebar from "../Nav/Sidebar"
import { usePathname } from "next/navigation"

type Props = {
  children: React.ReactNode
}
export default function Body({ children }: Props) {

  return (
    <div className="flex-1 h-full overflow-y-auto gap-3 grid lg:grid-cols-[auto_1fr] w-full">
      <LeftSidebar />
      <div className="h-full overflow-y-auto">
        {children}
      </div>
    </div>
  )
}

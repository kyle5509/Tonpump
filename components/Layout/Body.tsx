'use client'
import { useAppSelector } from "@/redux/store/hook"
import LeftSidebar from "../Nav/Sidebar"
import { usePathname } from "next/navigation"
import Updates from "../General/Updates"
import Market from "./Market"

type Props = {
  children: React.ReactNode
}
export default function Body({ children }: Props) {
  const darkmode = useAppSelector(store => store.darkmode.value)
  const pathname = usePathname()

  return (
    <div className="flex-1 h-full overflow-y-auto grid lg:grid-cols-[auto_1fr] w-full">
      <LeftSidebar />
      <div className="h-full overflow-y-auto">
          {children}
      </div>
    </div>
  )
}

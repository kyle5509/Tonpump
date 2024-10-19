'use client'
import { useAppSelector } from "@/redux/store/hook"
import LeftSidebar from "./LeftSidebar"
import RightSidebarA from "./RightSidebarA"
import { usePathname } from "next/navigation"
import RightSidebarB from "./RightSidebarB"
import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
}
export default function Body({ children }: Props) {
  const darkmode = useAppSelector(store => store.darkmode.value)
  const redirecting = useAppSelector(store => store.redirect.value)
  const pathname = usePathname()

  return (
    <div className="flex-1 h-full overflow-y-auto grid w-full  xl:grid-cols-[300px_1fr_330px] 3xl:grid-cols-[300px_1fr_360px]">
      <div className={`duration-500 border-r-2 h-full overflow-y-auto ${darkmode ? "border-purplee" : "border-gray-200"}`}>
        <LeftSidebar />
      </div>
      <div className="h-full relative overflow-y-auto">
        <div className={`h-full w-full bg-mainDark absolute ${redirecting ? "opacity-100 visible" : "opacity-0 invisible"} duration-500 grid place-content-center z-20 top-0 left-0`}>
          <span className="loader3"></span>
        </div>
        <div className="h-full overflow-y-auto relative z-10">
          {children}
        </div>
      </div>
      <div className={`xl:block duration-500 overflow-x-clip hidden border-l-2 overflow-y-auto ${darkmode ? "border-purplee" : "border-gray-200"}`}>
        {pathname === "/tokens" ?
          <motion.div className={`h-full w-full ${pathname === '/tokens' ? "block" : "hidden"}`} animate={{ opacity: pathname === "/tokens" ? 1 : 0, transition: { duration: 2 } }}>
            <RightSidebarB />
          </motion.div>
          :
          <motion.div className={`h-full w-full ${pathname !== '/tokens' ? "block" : "hidden"}`} animate={{ opacity: pathname !== "/tokens" ? 1 : 0, transition: { duration: 2 } }}>
            <RightSidebarA />
          </motion.div>
        }
      </div>
    </div>
  )
}

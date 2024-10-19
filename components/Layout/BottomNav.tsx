'use client'

import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsBell, BsFillGridFill } from "react-icons/bs";
import { FaConnectdevelop } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { IoGrid } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { LuPanelRightOpen } from "react-icons/lu";

import { FaRegGem, FaUserAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { BiBell } from "react-icons/bi";
import { startRedirect } from "@/redux/reducers/redirect";

export default function BottomNav() {
    const darkmode = useAppSelector((store) => store.darkmode.value);
    const dispatch = useAppDispatch()
    const pathname = usePathname();
    const links = [
        ["All Tokens", "tokens.png", "/tokens", <IoGrid style={{ rotate: "45deg" }} size={14} />],
        ["Earn", "gem1.png", "/earn", <FaRegGem size={17} />],
        ["Home", "home.png", "/", <IoHome size={17} />],
        ["Update", "profile.png", "/update", <BsBell size={19} />],
        ["Profile", "profile.png", "/profile", <FaUserAlt size={16} />],
    ];
    return (
        <div className={`flex h-[70px]  border-t items-center drop-shadow-md border-purplee xl:hidden justify-between py-2 px-4`}>
            {links.map((link, key) => (
                <Link href={`${link[2]}`}  onClick={() => dispatch(startRedirect())}  className="" key={key}>
                    <div  className={`flex duration-500 flex-col gap-2 items-center justify-center ${pathname === link[2] ? `${darkmode ? 'text-prim ': "text-purplee "}` : `${darkmode ? 'text-gray-100' : ''}`}`}>
                    <span className={`h-[5px] shrink-0 w-[5px] duration-500 rounded-full ${pathname === link[2] ? `${darkmode ? 'bg-prim opacity-100': "text-purplee bg-purplee"}` : `${darkmode ? 'bg-prim opacity-0' : ''} `}`}></span>
                        <p>{link[3]}</p>
                        <p className="text-11">{link[0]}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

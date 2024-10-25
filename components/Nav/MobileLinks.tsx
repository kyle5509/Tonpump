'use client'

import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { FaRegGem } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";

type Props = {
    setOpen: Dispatch<SetStateAction<boolean>>
}

export default function MobileLinks({setOpen}: Props) {
    const dispatch = useAppDispatch()
  const darkmode = useAppSelector((store) => store.darkmode.value);
  const pathname = usePathname();
    const links = [
      ["Home", "home.png", "/", <IoMdHome size={21} />],
      [
        "All Tokens",
        "tokens.png",
        "/tokens",
        <BsFillGridFill style={{ rotate: "45deg" }} size={16} />,
      ],
      ["Profile", "profile.png", "/profile", <FaUserAlt size={17} />],
      ["Earn", "gem1.png", "/earn", <FaRegGem size={17} />],
    ];
  return (
    <div>
        <div className="flex flex-col gap-2">
          {links.map((el, key) => (
            <Link href={`${el[2]}`} onClick={() => setOpen(false)} key={key}
              className={`flex cursor-pointer active:scale-[0.96] group duration-500 items-center gap-4 px-3 py-3 text-sm rounded-xl ${pathname === el[2]
                ? `font-semibold ${darkmode ? " text-prim " : " text-prim "}`
                : `${darkmode ? "text-white" : "text-black   hover:text-secondary"}`
                }`}
            >
              <p className="transform-none">
                <span
                  className={`${pathname != el[2] && `${darkmode ? "group-hover:text-prim" : "group-hover:text-secondary"}`} duration-500`}
                >
                  {el[3]}
                </span>
              </p>
              <p className="transform-none">
                <span
                  className={`${pathname != el[2] && `${darkmode ? "group-hover:text-prim" : "group-hover:text-secondary"}`} duration-500 uppercase font-semibold text-13`}
                >
                  {el[0]}
                </span>
              </p>
            </Link>
          ))}
        </div>
    </div>
  )
}

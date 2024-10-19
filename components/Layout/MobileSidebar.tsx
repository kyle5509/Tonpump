'use client'
import { useAppSelector } from "@/redux/store/hook";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { BsFillGridFill } from "react-icons/bs";
import { FaRegGem, FaUserAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";

type Props = {
  navOpened: boolean
  setNavOpened: Dispatch<SetStateAction<boolean>>
}

export default function MobileSidebar({ navOpened, setNavOpened }: Props) {
  const darkmode = useAppSelector((store) => store.darkmode.value);
  const pathname = usePathname();
  const links = [
    ["Home", "home.png", "/", <IoMdHome size={20} />],
    [
      "All Tokens",
      "tokens.png",
      "/tokens",
      <BsFillGridFill style={{ rotate: "45deg" }} size={15} />,
    ],
    ["Profile", "profile.png", "/profile", <FaUserAlt size={16} />],
    ["Earn", "gem1.png", "/earn", <FaRegGem size={16} />],
  ];

  const router = useRouter()


  const navigate = (url: string) => {
    router.push(url)
  }

  useEffect(() => {
    setNavOpened(false)
  }, [pathname])

  return (
    <div className={`bg-mainDark flex flex-col gap-8 justify-between p-3 fixed w-full top-[70px] overflow-hidden lg:hidden z-[5000] duration-500 ${navOpened ? "left-0 h-[calc(100vh-70px)] overflow-y-auto opacity-100 blur-none" : "-left-full blur-2xl h-0 opacity-0"}`}>
      <div className="">
        <div className="flex h-11 gap-2 mb-3">
          <div className="h-full flex-1 border-prim border-2 rounded-md">
            <input type="text" className="h-full text-13 bg-transparent text-white w-full outline-none pl-4 placeholder:text-white mb-3" placeholder='Try Searching "Trending"' />
          </div>
          <button onClick={() => setNavOpened(false)} className="bg-secondary text-13 rounded-md text-white font-semibold px-4 h-full ">Search </button>
        </div>
        <div className="flex flex-col gap-2">
          {links.map((el, key) => (
            <div onClick={() => navigate(`${el[2]}`)}
            key={key}
              className={`flex cursor-pointer active:scale-[0.96] group duration-500 items-center rounded gap-3 p-3 text-13  ${pathname === el[2]
                ? "text-secondary border-prim font-semibold bg-prim"
                : "text-white"
                }`}
            >
              <p className="transform-none">
                <span
                  className={`${pathname != el[2] && " group-hover:text-prim"
                    } duration-500`}
                >
                  {el[3]}
                </span>
              </p>
              <p className="transform-none">
                <span
                  className={`${pathname != el[2] && " group-hover:text-prim"
                    } duration-500`}
                >
                  {el[0]}
                </span>
              </p>
            </div>
          ))}
        </div>
        <div className=" transition-none">
          <div className={`flex items-center border-2 border-prim mt-4 duration-500 gap-5 ${darkmode ? "bg-transparent" : "bg-gray-300"} border overflow-hidden justify-between cursor-pointer px-5 h-[45px] rounded-md`}>
            <img src="x.png" onClick={() => setNavOpened(false)} className="cursor-pointer duration-500 hover:scale-125 active:scale-100" alt="" />
            <img src="telegram.png" onClick={() => setNavOpened(false)} className="cursor-pointer duration-500 hover:scale-125 active:scale-100" alt="" />
            <img src="discord.png" onClick={() => setNavOpened(false)} className="cursor-pointer duration-500 hover:scale-125 active:scale-100" alt="" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between text-prim font-semibold">
        <div className="flex items-center gap-2">
          <img src="gem.png" alt="" />
          <p className="font-">0.0200</p>
        </div>
        <div className="flex overflow-hidden">
          <img onClick={() => setNavOpened(false)} src="toggler.png" className="translate-x-9 cursor-pointer duration-500 scale-75 active:scale-50" alt="" />
        </div>
      </div>
      <div
        className={`${darkmode ? "bg-[#3C4141]" : "bg-gray-200"
          } cursor-pointer duration-500 transition-colors relative flex p-2 rounded-xl items-center gap-2`}
      >
        <img src="Medium2.png" className="" alt="" />
        <div className="text-xs">
          <p
            className={`font-bold duration-500 transition-colors ${darkmode ? "text-white" : "text-black"
              }`}
          >
            UGnxf
          </p>
          <p
            className={`duration-500 transition-colors ${darkmode ? "text-[#ECEDEE]" : "text-black"
              }`}
          >
            UGnxfddd847..Uv-ld
          </p>
          <img
            src="chevron.png"
            className="absolute top-1/2 right-3 -translate-y-1/2"
            alt=""
          />
        </div>
      </div>

    </div>
  )
}

"use client";
import { IoMdHome } from "react-icons/io";
import { BsFillGridFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaUserAlt } from "react-icons/fa";
import { FaRegGem } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { startRedirect } from "@/redux/reducers/redirect";

export default function LeftSidebar() {
  const darkmode = useAppSelector((store) => store.darkmode.value);
  const dispatch = useAppDispatch()
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
    <div className={`h-full overflow-y-auto duration-500 p-3 px-5 hidden xl:flex flex-col justify-between ${darkmode ? "bg-transparent" : "bg-gray-50"}`}>
      <div className="flex flex-col gap-2">
        {links.map((el, key) => (
          <Link href={`${el[2]}`} onClick={() => dispatch(startRedirect())} key={key}
            className={`flex cursor-pointer active:scale-[0.96] group duration-500 items-center border-2 gap-4 px-8 py-3.5 text-sm rounded-full ${pathname === el[2]
              ? `font-semibold ${darkmode ? "text-secondary border-prim  bg-prim": "bg-secondary text-prim border-secondary "}`
              : `${darkmode ? "text-white border-transparent  hover:border-prim": "text-black border-transparent hover:border-secondary hover:text-secondary"}`
              }`}
          >
            <p className="transform-none">
              <span
                className={`${pathname != el[2] && `${darkmode ? "group-hover:text-prim": "group-hover:text-secondary"}` } duration-500`}
              >
                {el[3]}
              </span>
            </p>
            <p className="transform-none">
              <span
                className={`${pathname != el[2] && `${darkmode ? "group-hover:text-prim": "group-hover:text-secondary"}` } duration-500 uppercase font-semibold text-13`}
              >
                {el[0]}
              </span>
            </p>
          </Link>
        ))}
        
      </div>
      <div>
        <div className="grid mb-5 mt-3 place-content-center">
          <img src="cuate.png" className="" alt="" />
        </div>
        <div
          className={`${darkmode ? "bg-[#3C4141]" : "bg-gray-200"
            } cursor-pointer duration-500 transition-colors relative flex p-3 rounded-xl items-center gap-3`}
        >
          <img src="logo3.png" className="h-8" alt="" />
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
    </div>
  );
}

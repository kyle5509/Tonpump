"use client";
import { IoMdHome } from "react-icons/io";
import { BsFillGridFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaUserAlt } from "react-icons/fa";
import { FaRegGem } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Links from "./Links";

export default function Sidebar() {
  const darkmode = useAppSelector((store) => store.darkmode.value);
 
  return (
    <div className="overflow-y-auto p-3 h-full hidden lg:flex">
      <div className={`border-2 border-purplee w-[275px] 2xl:w-[335px] rounded-xl  h-full duration-500 p-3 flex flex-col justify-between `}>
        <Links />
        <div className="">
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
    </div>
  );
}

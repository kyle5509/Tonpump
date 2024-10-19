"use client";
import { useAppSelector } from "@/redux/store/hook";
import Button from "../General/Button";
import Image from "next/image";

export default function FollowCard() {
  const darkmode = useAppSelector((store) => store.darkmode.value);

  return (
    <div
      className={` ${darkmode ? "bg-[#272727]" : "bg-gray-200"
        } duration-500 rounded-2xl p-2 lg:p-3`}
    >
      <div
        className={`p-2 lg:p-3 duration-500 rounded-2xl border-2 border-[#8996A9] ${darkmode ? "bg-[#323434]" : "bg-gray-50"
          }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex flex-1 gap-3 justify-between lg:justify-start items-center">
            <div className="flex gap-1 items-center">
              <img src="/new1.png" className="" alt="" />
              <p className={`font-semibold duration-500 lg:hidden ml-2 mr-1 ${darkmode ? "text-prim" : "text-secondary"}`}>UGnxf</p>
            </div>
            <div className="flex gap-3  text-13 2xl:text-sm items-center">
              <p className="font-semibold text-prim hidden lg:block ml-2 mr-1">UGnxf</p>
              <div className="flex items-center gap-2 py-1 px-2 bg-[#9DFBFA0F] rounded-full">
                <span
                  className={`duration-500 ${darkmode ? "text-[#5090A0]" : "text-[#EBEBEB]"
                    }`}
                >
                  UGnxf..Uv-ld
                </span>
                <img src="copy.png" alt="" />
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            <div className="h-1 lg:w-32  xl:w-40 2xl:w-52 border-prim border-b-2 border-dashed hidden 2xl:flex"></div>
            <button className="w-full lg:w-28 py-3 place-content-center hidden lg:grid rounded-xl duration-500 active:scale-95 bg-prim text-secondary font-semibold">Follow</button>
          </div>
        </div>
        <button className="w-full py-3 mt-4 lg:hidden rounded-b-xl rounded-md duration-500 active:scale-95 bg-prim text-secondary font-semibold">Follow</button>
      </div>
    </div>
  );
}

"use client";
import { useAppSelector } from "@/redux/store/hook";
import { BsDot } from "react-icons/bs";

export default function KingOfCoin() {
  const darkmode = useAppSelector((store) => store.darkmode.value);
  return (
    <div
      className={`grid ${
        darkmode ? " bg-[#334648]" : "bg-prim"
      } duration-500 gap-2  transition-colors p-2 w-full rounded-2xl grid-cols-[1fr_1.2fr] md:grid-cols-[auto_1fr] xl:grid-cols-[1fr_1.2fr]`}
    >
      <div
        className={`text-white p-2 rounded-2xl duration-500 transition-colors ${
          darkmode ? "bg-transparent" : "bg-black/20"
        }`}
      >
        <p className="text-11 items-center mb-1 flex gap-1 text-nowrap">
          <span className="font-bold">$Space</span>
          <span>created by</span>
          <BsDot size={20}/>
          <span className="font-bold">UGnxf</span>
        </p>
        <p className="text-11 mb-1">Market Cap - 11.5k</p>
        <p className="font-semibold text-xs mb-4">Space Man (#Space)</p>
        <div className="">
          <div className="flex gap-2">
            <img src="image.png" className="rounded-xl" alt="" />
            <div className="flex text-xs font-semibold flex-col justify-between p-[6px] bg-black/20 rounded-xl">
              <div className="flex items-center gap-[6px]">
                <div className="shrink-0">
                  <img src="comment.png" className="w-4" alt="" />
                </div>
                <p>61</p>
              </div>
              <div className="flex items-center gap-[6px]">
                <div className="shrink-0">
                  <img src="like.png" className="w-4" alt="" />
                </div>
                <p className="text-[#F4245E]">6.2k</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" place-content-center grid w-full">
          <img src="king.png" className=" object-contain" alt="" />
      </div>
    </div>
  );
}

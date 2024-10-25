"use client";
import { useAppSelector } from "@/redux/store/hook";
import { BsDot } from "react-icons/bs";

export default function KingOfCoin() {
  const darkmode = useAppSelector((store) => store.darkmode.value);
  return (
    <div className="text-white bg-[#334648] justify-between p-3 rounded-2xl gap-4 flex text-11">
      <div className="flex items-center flex-col sm:flex-row lg:flex-col lg:gap-1 gap-3">
        <div className="text-nowrap space-y-1">
          <div className="">
            <strong>Space </strong>created by <div className="h-1 w-1 mx-1 rounded-full inline-block align-middle bg-prim "></div> <span>UGhsdg</span>
          </div>
          <div className="">Market Cap - 11.5k</div>
          <strong className="inline-block">Space Man (#Space)</strong>
        </div>
        <div className="flex mt-2 gap-2">
          <img src="image.png" className="h-auto sm:h-20 lg:h-auto rounded-xl" alt="" />
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
      <img src="king.png" className=" object-contain" alt="" />
    </div>
  );
}

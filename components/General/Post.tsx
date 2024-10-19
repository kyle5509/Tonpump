'use client'
import { useAppSelector } from "@/redux/store/hook";
import { BsChat, BsDot, BsHeart, BsMessenger, BsStar } from "react-icons/bs";
export default function Post() {
  const darkmode = useAppSelector(store => store.darkmode.value)
  return (
    <div className="flex bg-[#272727] shadow-md border-[#8996A9] border-2  p-3 rounded-xl gap-4">
      <img src="Medium.png" className="h-[42px] w-[42px]" alt="" />
      <div className="flex text-white flex-col gap-1">
        <div className="flex justify-between items-center">
          <p className="flex gap-1 text-13 items-center">
            <b>$Space</b>
            <span className="text-[#ECEDEE] text-nowrap ml-1">created by</span>
            <BsDot />
            <b>UGnxf</b>
          </p>
          <img src="/star.svg" className="" alt="" />
        </div>
        <p className="text-[#ECEDEE] text-xs">Market Cap - 11.5k</p>
        <p className="text-xs mb-2">
          <b> Space Man (#Space)</b> is a cryptocurrency project
          based on inspirations from a man who visited.....
        </p>
        <img
          src="https://s3-alpha-sig.figma.com/img/6d55/68bc/f7d3551f8ee13233dd7014af1b9544d7?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E8Sr7ssM95SuZ6ZtMZm3pBS9hrPuvbijQGylANRhyvNOgSU1fflUAx2sbxpiZFnrTaCu72WzG37MqnWw7bstvaHWVZ1PyNBhr5dPSx7yL-439bLUT2EGMhSSpT-Z2ikQcO4iHws50I3UOloKiGa4bMHWVDwUlWqCqfL2cWaNqG3gxqGNGphEBL17gTe6fzjsAQ~4cyIf8Z-6mBN3J109tp39zrxHj98tprCjy-KZaCS0h7KD9OJZsg1HL7xDsAe31~VZ-93VtWXNhZM~k2stqs2f6LBeD4VKtQKoWzIWTNcrzx0UcyAgbeEltDP0k4oEpcFBRT8yiye8RjSkZerUVQ__"
          className="w-[280px] object-cover rounded-xl h-[240px]"
          alt=""
        />
        <div className="mt-2 text-xs flex gap-4 items-center">
          <div className="flex cursor-pointer items-center gap-2">
            <img src="comment.png" alt="" />
            <p>61</p>
          </div>
          <div className="flex text-[#F4245E] cursor-pointer items-center gap-2">
            <img src="like.png" alt="" />
            <p>6.2k</p>
          </div>
        </div>
        <p className={`text-xs mt-1 duration-500 transition-colors ${darkmode ? "text-[#9DFBFA]": "text-secondary"} `}>Show more</p>
      </div>
    </div>
  );
}
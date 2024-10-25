import { HiOutlineStar } from "react-icons/hi";

export default function Creator() {
    return (
        <div className="flex items-center gap-5">
            <div className="flex sm:px-4 py-1.5 text-13 rounded-full items-center gap-3 sm:bg-[#9DFBFA0F]">
                <p>Creator</p>
                <div className="h-1 w-1 rounded-full bg-prim "></div>
                <img src="logo3.png" className="h-3" alt="" />
                <p className="text-prim">Newt...</p>
            </div>
            <HiOutlineStar size={20} className="text-prim hidden md:block cursor-pointer"/>
        </div>
    )
}

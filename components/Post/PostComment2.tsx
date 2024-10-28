import { BiComment } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import { TbClock } from "react-icons/tb";

export default function PostComment2() {
    return (
        <div className="text-white grid grid-cols-[auto_1fr] gap-4 pt-3 px-3">
            <div className="h-full flex gap-1 flex-col">
                <div className="h-8 w-8 shrink-0 border-2 rounded-full"></div>
                <div className="flex-1 w-full flex justify-center">
                    <div className="h-full border-l border-white border-dashed"></div>
                </div>
            </div>
            <div className="w-full">
                <div className=" gap-3 items-center">
                    <div className="flex items-center">
                        <p>Manchester United</p>
                        <div className="text-xs text-gray-400 flex items-center gap-3">
                            <span>@ManUtd</span>
                            <div className="h-1 w-1 rounded-full bg-prim inline-block"></div>
                            <span className="font-light">
                                <TbClock className="inline align-middle mb-0.5" /> 2hrs
                            </span>
                        </div>
                    </div>
                </div>
                <div className="pt-1">
                    <p className="">Adama's denied from close range! 😩</p>
                </div>
                <div className="h-0 mb-3 bg-emerald-600"></div>
                <div className="flex text-sm gap-6">
                    <p>
                        <BsHeartFill className="inline cursor-pointer duration-300 hover:scale-125 hover:text-rose-500 active:scale-100 mr-1.5 text-sm" /> 64
                    </p>
                </div>
            </div>
        </div>)
}

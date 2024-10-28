import { BiComment } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import { TbClock } from "react-icons/tb";

export default function PostComment() {
    return (
        <div className="text-white ">
            <div className="flex gap-3 p-3 items-center">
                <div className="h-12 w-12 border-2 rounded-full"></div>
                <div className="">
                    <p>Manchester United</p>
                    <div className="text-xs mt-1">
                        <span>@ManUtd</span>
                        <span className="font-light">
                            <TbClock className="inline ml-4 align-middle mb-0.5" /> 2hrs
                        </span>
                    </div>
                </div>
            </div>
            <div className="p-3 pt-1">
                <p className="">Adama's denied from close range! 😩</p>
            </div>
            <div className="h-40 mb-3 bg-emerald-600"></div>

            <div className="grid border-y mb-5 grid-cols-2 h-11">
                <div className="cursor-pointer grid place-content-center">
                    <p>
                        <BiComment className="inline text-lg mr-1 " /> 15
                    </p>
                </div>
                <div className="cursor-pointer grid border-l place-content-center">
                    <p>
                        <BsHeartFill className="inline text-base mr-1" />47
                    </p>
                </div>
            </div>
        </div>)
}

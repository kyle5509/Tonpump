import { BsStar } from "react-icons/bs";
import { FaRegImage } from "react-icons/fa6";
import { MdOutlineGifBox } from "react-icons/md";
import { AiOutlineTag } from "react-icons/ai";
import { VscSmiley } from "react-icons/vsc";
import { LuCalendarClock } from "react-icons/lu";


export default function Actions() {
    return (
        <div>
            <div className="flex text-[22px] items-center gap-7 text-prim">
                <FaRegImage className="duration-300 text-[19px] hover:text-purplee cursor-pointer hover:scale-110 active:scale-100" />
                <MdOutlineGifBox className="duration-300 text-2xl hover:text-purplee cursor-pointer hover:scale-110 active:scale-100" />
                <AiOutlineTag className="duration-300 hover:text-purplee cursor-pointer hover:scale-110 active:scale-100" />
                <VscSmiley className="duration-300 hover:text-purplee cursor-pointer hover:scale-110 active:scale-100" />
                <LuCalendarClock className="duration-300 hover:text-purplee cursor-pointer hover:scale-110 active:scale-100" />
            </div>
        </div>
    )
}

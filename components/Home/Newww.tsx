"use client";
import { useRef, useState } from "react";
import { BiChevronDown, BiComment, BiHome } from "react-icons/bi";
import { FaItalic, FaRegGem } from "react-icons/fa6";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
import { FaRegSmile, FaTimes } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import { FaBold } from "react-icons/fa";
import { PiGif } from "react-icons/pi";
import { PiGifLight } from "react-icons/pi";
import { LiaTimesSolid } from "react-icons/lia";
import DisplayPostCards from "@/components/Home/DisplayPostCards";
import { BsHeartFill } from "react-icons/bs";
import { TbClock, TbClockX } from "react-icons/tb";

export default function page() {
    const [img, setImg] = useState("");
    const inputRef = useRef<HTMLInputElement | null>(null);
    const change = (e: any) => {
        setImg(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className="h-screen bg-black grid grid-cols-1 grid-rows-[auto_1fr]">
            <div className="border-b-2 border-purplee h-20"></div>
            <div className=" grid overflow-y-auto lg:grid-cols-[1fr_600px_1.5fr]">
                <div className="flex justify-center pt-6 space-y-2 border-purplee">

                </div>
                <div className="border-x-2 border-purplee">
                    
                   

                    <DisplayPostCards />
                </div>
                <div className="flex items-center text-white">
                  
                </div>
            </div>
        </div>
    );
}
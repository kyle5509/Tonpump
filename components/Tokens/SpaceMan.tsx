'use client'
import { useAppSelector } from "@/redux/store/hook";
import Image from "next/image";
import { BsDot } from "react-icons/bs";


export default function SpaceMan() {
    const darkmode = useAppSelector((store) => store.darkmode.value);

    return (
        <div className="">
            <div className={`hidden lg:block text-xs rounded-2xl duration-500 p-3 ${darkmode ? "bg-[#272727] " : "bg-prim"}`}>
                <div className={`flex  border-2 duration-500 rounded-2xl justify-between items-center gap-5 p-3 ${darkmode ? "bg-[#323434] text-white border-[#8996A9]" : "text-secondary border-transparent bg-white"}`}>
                    <div className="">
                        <Image height={67} width={78} className='' loading='lazy' src="/imgg.png" alt="" />
                    </div>
                    <p className={`font-semibold duration-500 ${darkmode ? "text-prim" : "text-secondary"}`}>Space Man (#Space)</p>
                    <p className={`${darkmode ? "text-prim" : "text-secondary"} duration-500`}>Market Cap - 11.5k</p>
                    <div className="2xl:block hidden flex-1 px-3">
                        <div className="border-b-2 border-prim border-dashed w-full"></div>
                    </div>
                    <div className="flex p-2.5 text-xs items-center gap-2 rounded-full bg-[#9DFBFA0F]">
                        <p>Creator</p>
                        <BsDot />
                        <img src="logo1.png" alt="" />
                        <p className='font-semibold text-prim'>UGnxf</p>
                    </div>
                    <div className="">
                        <img src="star.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-[#272727] lg:hidden text-xs rounded-2xl p-2">
                <div className=" border-2 border-[#8996A9] bg-[#323434] rounded-2xl p-2">
                    <div className='flex text-white  justify-between items-center gap-5'>
                        <div className="flex items-center gap-3">
                            <Image height={67} width={78} className='' loading='lazy' src="/imgg.png" alt="" />
                            <p className='font-semibold'>Space Man (#Space)</p>
                        </div>
                        <img src="star.png" alt="" />
                    </div>
                    <div className="flex justify-between mt-3 items-center">
                        <div className="flex bg-[#9DFBFA0F] p-2 rounded-full shadow w-fit text-xs items-center gap-1">
                            <img src="logo1.png" alt="" />
                            <p className='font-semibold text-prim'>UGnxf</p>
                            <BsDot size={18} className="text-white" />
                            <p className="text-white">Creator</p>
                        </div>
                        <p className='text-prim'>Market Cap - 11.5k</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { Dispatch, SetStateAction } from "react";
import { FaTimes } from "react-icons/fa";
import Button from "./Button";
import { BiArrowBack } from "react-icons/bi";


type Props = {
    opened: number
    setOpened: Dispatch<SetStateAction<number>>
}


export default function About({ opened, setOpened }: Props) {
    return (
        <div>
            <div className={`w-full md:w-[600px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-between gap-10 delay-100 duration-300 ${opened === 2 ? "opacity-100 visible scale-100" : "opacity-0 invisible blur-2xl scale-50"} min-h-screen md:min-h-96 text-white rounded-2xl bg-black p-5`}>
                <div className="flex flex-col gap-10">
                    <div className="flex justify-between items-center">
                        <FaTimes onClick={() => setOpened(0)} className="duration-300 text-2xl" />
                        <img src="tonLogo.svg" className="h-7" alt="" />
                        <p></p>
                    </div>
                    <div className="px-0 md:px-16 ">
                        <p className="text-lg mb-3">Tell us a little about you!</p>
                        <div className="h-60 ">
                            <textarea name="" required className="h-full valid:border-prim focus:border-prim duration-300 border-2 text-white  p-3 rounded w-full outline-none bg-transparent"></textarea>
                        </div>
                    </div>
                    <div className="px-0  md:px-16 text-blue-600">
                        <p className="pr-4 cursor-pointer" onClick={() => setOpened(1)}><BiArrowBack className="inline" /> Back</p>
                    </div>
                </div>
                <div className="px-0 md:px-16">
                    <div onClick={() => setOpened(0)} className="">
                        <Button />
                    </div>
                </div>
            </div>
        </div>
    )
}

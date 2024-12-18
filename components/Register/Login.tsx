import { Dispatch, SetStateAction } from "react";
import Input from "../General/Input";
import { FaTimes } from "react-icons/fa";
import Button from "./Button";


type Props = {
    opened: number
    setOpened: Dispatch<SetStateAction<number>>
}

export default function Login({ opened, setOpened }: Props) {
    return (
        <div className={`w-full md:w-[600px]  absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  flex flex-col justify-between gap-10 delay-100 duration-300 ${opened === 3 ? "opacity-100 visible scale-100  " : "opacity-0 invisible blur-2xl scale-50"} min-h-screen md:min-h-[500px] text-white rounded-2xl bg-black p-5`}>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between items-center">
                    <FaTimes onClick={() => setOpened(0)} className="duration-300 text-2xl" />
                    <img src="tonLogo.svg" className="h-7" alt="" />
                    <p></p>
                </div>
                <div className="px-0 md:px-16 flex flex-col gap-7 lg:gap-7">
                    <p className="text-2xl lg:text-3xl">Login into your account</p>
                    <Input value="" label="Username" />
                    <Input value="" label="Password" />
                </div>
            </div>
            <div className="px-0 md:px-16">
                <div onClick={() => setOpened(0)} className="">
                    <Button />
                </div>
            </div>
        </div>
    )
}

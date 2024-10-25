'use client'
import { useAppSelector } from "@/redux/store/hook";
import PostBackdrop from "../Home/PostBackdrop";

export default function Backdrop() {
    const backdrop = useAppSelector(store => store.backdrop.value)
    return (
        <div className={`h-[calc(100vh-80px)] z-[4000] duration-500 grid place-content-center fixed top-20 bg-black/20 backdrop-blur-lg left-0 w-full ${backdrop === "" ? "opacity-0 invisible backdrop-blur-xl" : "backdrop-blur-md opacity-100 visible"}`}>
            <PostBackdrop />
        </div>
    )
}

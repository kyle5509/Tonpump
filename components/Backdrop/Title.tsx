'use client'
import { closeBackdrop } from "@/redux/reducers/backdrop";
import { useAppDispatch } from "@/redux/store/hook";
import { FaTimes } from "react-icons/fa";

type Props = {
  title: string
}

export default function Title({ title }: Props) {
  const dispatch = useAppDispatch()
  return (
    <div className="h-14 px-4 text-prim flex items-center justify-between">
      <p></p>
      <p>{title}</p>
      <div onClick={() => dispatch(closeBackdrop())} className="h-6 w-6 cursor-pointer hover:scale-110 duration-500 active:scale-95 rounded-full bg-[#475861] grid place-content-center">
        <FaTimes />
      </div>
    </div>
  )
}

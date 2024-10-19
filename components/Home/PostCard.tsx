'use client'
import { useAppSelector } from "@/redux/store/hook";
import Image from "next/image";
import { BiComment } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { BsChat, BsDot, BsHeart, BsHeartFill, BsMessenger, BsStar } from "react-icons/bs";
export default function PostCard({ post }: any) {
  console.log(post)
  const darkmode = useAppSelector(store => store.darkmode.value)
  return (
    <div className={`flex w-full gap-4 rounded-md duration-300 ${darkmode ? "text-white": "text-gray-700"}`}>
      <div className="h-full gap-2 items-center flex flex-col">
        <div className="h-10 shrink-0 w-10 rounded-full">
          <img src="logo1.png" className="h-full w-full object-cover" alt="" />
        </div>
        <div className={`flex-1 w-0.5 duration-300 ${darkmode ? "bg-prim" : "bg-gray-300"}`}></div>
      </div>
      <div className="w-full overflow-x-hidden">
        <div className="space-y-1 w-full overflow-hidden text-13">
          <p><strong>$Space</strong> created by <span className={`duration-300 h-1.5 w-1.5 mx-2 shrink-0 inline-block rounded-full  align-middle ${darkmode ? "bg-prim": "bg-secondary"} `}></span> <strong>{post?.author_username}</strong></p>
          <p>Market Cap - 11.5k</p>
          <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap">{post?.content} </p>
        </div>
        <div className={`h-60 mt-5 w-full rounded-2xl overflow-hidden  ${darkmode ? "border-purplee" : "border-gray-300"} border-2`}>
          <img src="https://www.spot.uz/media/img/2024/09/qjqtJ117273625253838_l.jpg" className="h-full w-full object-cover" alt="" />
        </div>
        <div className="flex pt-3 gap-5">
          <p>{post?.like_count} <BsHeart className="inline ml-2 align-middle text-rose-600" /></p>
          <p>{post?.comment_count} <FaRegComment className="inline ml-2 align-middle" /></p>
        </div>
      </div>
    </div>
  );
}
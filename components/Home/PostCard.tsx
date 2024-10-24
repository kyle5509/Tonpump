'use client'
import { useAppSelector } from "@/redux/store/hook";
import Image from "next/image";
import { BiComment } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { BsChat, BsDot, BsHeart, BsHeartFill, BsMessenger, BsStar } from "react-icons/bs";
import Tag from "./Tag";

export default function PostCard({ post }: any) {
  const darkmode = useAppSelector(store => store.darkmode.value)
  return (
    <div className="flex gap-3 border rounded-2xl text-white border-[#8996A9] p-3">
      <div className="h-11 w-11 shrink-0 rounded-full border-2"></div>
      <div className="flex-1">
        <div className="w-full mb-1 items-center flex justify-between">
          <div className="">
            <p className="font-light"><b className="font-bold mr-2">Kyle Jenner</b> <span className="text-gray-300">@miracle010</span> <div className="h-1 w-1 rounded-full bg-prim inline-block mx-2 align-middle"></div> <span className="text-gray-300 text-xs">23s</span></p>
          </div>
          <div className="hidden lg:block">
            <Tag />
          </div>
        </div>
        <p>Space Man (#Space) is a cryptocurrency project based on inspirations from a man who visited the moon...</p>
        <div className="h-72  rounded-2xl mt-3 border border-[#22577A] overflow-hidden">
          <img src="https://s3-alpha-sig.figma.com/img/c7c3/66dc/0c08664e689bb2c220a6e3c8dc4c8cc7?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aM4Z5zG3-wDyuQ4LV79bemXx6dnoXfqGqeDc7Fe5Dzm46gDNJbX45PLl8gHEck14GqS6T8IFGJY73IZj0e00-SKcUdzmnILt50kvaI~aBFPCfnTMmSBYddjU2l-1Z7DhfBuz-wJKr02Z7Z~ntYafXwlzkT5WwB9vmnwnyvHh8Vdhh2w1o7z6X14spQwzGMfUUXLsoEntsaaRqZO96cD0rso3dJLepeGR3MQvLfAxEyLYW~oV6tf3J1wGHpkZw~vNEu3X6hqp1KWlhUDPeirQ-dk24k2gCaD1fbx0mymzrTQOJmj6XUPZs24FUtGamrdLms72pgW7oOzsnT2za0J2BQ__" className="h-full w-full object-cover" alt="" />
        </div>
        <div className="flex mt-3 gap-3">
          <p><FaRegComment className="inline mr-1 align-middle " /> 67</p>
          <p><BsHeartFill className="inline text-rose-500 mr-1 align-middle " /> 67</p>
        </div>
        <p className="mt-2">Show more</p>
      </div>
    </div>
  );
}
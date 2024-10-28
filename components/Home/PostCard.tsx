'use client'
import { useAppSelector } from "@/redux/store/hook";
import Image from "next/image";
import { BiComment } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { BsChat, BsDot, BsHeart, BsHeartFill, BsMessenger, BsStar } from "react-icons/bs";
import Tag from "./Tag";
import { Dispatch, SetStateAction, useState } from "react";
import PostComment2 from "../Post/PostComment2";
import CommentField from "./CommentField";

type Props = {
  length: number
  track: number
  opened: number
  setOpened: Dispatch<SetStateAction<number>>
  post: any
}

export default function PostCard({ post, length, track, opened, setOpened }: Props) {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)

  const like = async () => {
    console.log(post.ID)
    try {
      setLoading(true)
      const data = {
        user_id: 2691989204
      }
      const response = await  fetch(`https://backend-server-tvb6.onrender.com/api/posts/${post.ID}/like`, {
         method: 'POST', 
         headers: {
           'Content-Type': 'application/json' 
         },
         body: JSON.stringify(data)  
       })
    } catch (error) {
      
    }
    finally{
      setLoading(false)
    }
  }
  

  return (
    <div className={`gap-3 border-2 border-gray-600 rounded-2xl flex ${track + 1 !== length && "border-b"} p-3 text-white`}>
      <div className="h-11 w-11 shrink-0 rounded-full">
        <img src={post?.author_photo} className="rounded-full h-full w-full object-cover" alt="" />
      </div>
      <div className="flex-1">
        <div className="w-full mb-1 items-center flex justify-between">
          <div className="">
            <div className="font-light capitalize"><b className="font-bold mr-2">{post?.author_username}</b> <span className="text-gray-300">@miracle010</span> <div className="h-1 w-1 rounded-full bg-prim inline-block mx-2 align-middle"></div> <span className="text-gray-300 text-xs">23s</span></div>
          </div>
          <div className="hidden lg:block">
            <Tag />
          </div>
        </div>
        <p>{post?.content}</p>
        <div className="h-72 w-full rounded-2xl mt-3 overflow-hidden">
        <img src={post?.jetton_image} className="h-full rounded-2xl w-full object-cover" alt="" />
        </div>
        <div className="flex mt-3 gap-6">
          <p><FaRegComment className="inline mr-1 align-middle text-base" /> {post?.comment_count}</p>
          <p className="text-[#F4245E]"><BsHeartFill onClick={like} className="inline mr-2 cursor-pointer hover:scale-125 duration-300 active:scale-100 text-base align-middle " />{post?.like_count}</p>
        </div>
        <p className="mt-2 cursor-pointer" onClick={() => {
          if (opened === track) {
            setOpened(-1)
            setValue('')
          } else {
            setOpened(track)
          }
        }}>{track === opened ? "Show less" : "Show more"}</p>
        <div className={` duration-500 ${opened === track ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} grid`}>
          <div className="overflow-hidden">
            <div className="">
              {[1, 2, 3].map(() => (
                <div className="">
                  <PostComment2 />
                </div>
              ))}
              <CommentField value={value} setValue={setValue}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
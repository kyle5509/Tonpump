'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { BiComment } from "react-icons/bi"
import { BsBookmark, BsHeart } from "react-icons/bs"
import { TPost } from "./type"
import { useAppSelector } from "@/redux/store/hook"

type Props = {
    value: string
    onChange: (e: any) => void
    clearInput: () => void
    postData: TPost
    addPost: () => void
    setUpdateComment: Dispatch<SetStateAction<number>>
    updateComment: number
}

export default function PostCard({ onChange, value, updateComment, setUpdateComment, addPost, clearInput }: Props) {
    const [post, setPost] = useState(false)

    const createPost = () => {
        addPost()
        setUpdateComment(updateComment + 1)
        setPost(false)
        clearInput()
    }

    return (
        <div className='text-white mb-5'>
            <div className="flex  gap-2 items-center">
                <div className="h-12 w-12 rounded-full border-2"></div>
                <div className="">
                    <p className='font-semibold text-sm'>@Harry76</p>
                </div>
                <button onClick={() => setPost(true)} className={`ml-auto px-5 py-2.5 border-prim border-2 rounded-md text-xs font-semibold ${post ? "opacity-0 invisible" : "opacity-100 visible"} duration-500`}>Comment</button>
            </div>
            <p className='mt-3 mb-2'>Hello People</p>
            <div className={`duration-500 gap-3 flex rounded-md ${post ? "h-11 mb-2" : "h-0 "} overflow-hidden`}>
                <div className="flex overflow-hidden rounded-md border-2 flex-1">
                    <input value={value} onChange={onChange} type="text" className="flex-1 pl-3 bg-transparent border-none outline-none h-full w-full" />
                </div>
                <button onClick={createPost} className='ml-auto px-5 py-2 border-prim border-2 rounded-md text-xs font-semibold'>Comment</button>
            </div>
            <div className="flex gap-5 items-center justify-between">
                <p>
                    <BiComment className='inline cursor-pointer duration-500 text-base' />
                    <span className="ml-2">2</span>
                </p>
                <p>
                    <BsHeart className='inline cursor-pointer hover:text-red-500 duration-500 text-base' />
                    <span className="ml-2">2</span>
                </p>
                <p>
                    <BsBookmark className='inline cursor-pointer hover:text-blue-500 duration-500 text-base' />
                    <span className="ml-2">4</span>
                </p>
            </div>
        </div>
    )
}

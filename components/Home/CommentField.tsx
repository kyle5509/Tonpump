'use client'
import { Dispatch, SetStateAction, useState } from "react"

type Props = {
    value: string 
    setValue: Dispatch<SetStateAction<string>>
}

export default function CommentField({value, setValue}: Props) {
    return (
        <div className="flex items-center mt-3 gap-1 px-3">
            <div className="h-8 w-8 border-2 rounded-full"></div>
            <div className="h-11 flex-1 relative">
                <textarea value={value} onChange={(e: any) => setValue(e.target.value)} className="bg-transparent resize-none pt-3 outline-none h-full w-full pl-3" placeholder="Comment">
                </textarea>
            </div>
            <button className="h-10 w-24 cursor-pointer duration-300 hover:scale-105 active:scale-100 text-black rounded-full bg-prim font-semibold grid place-content-center">Reply</button>
        </div>
    )
}

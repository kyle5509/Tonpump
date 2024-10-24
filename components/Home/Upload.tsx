'use client'
import { useEffect, useState } from "react";

import Actions from "./Actions";

export default function Upload() {
    const [value, setValue] = useState('')

   
    return (
        <div className="flex p-4 border-[#8996A9] rounded-xl border gap-3">
            <div className="h-11 w-11 border-2 rounded-full shrink-0"></div>
            <div className="flex-1 mt-1">
                <div className="w-full h-fit">
                    <textarea value={value} onChange={(e) => setValue(e.target.value)} className="min-h-[40px] text-white textarea resize-none overflow-y-hidden w-full bg-transparent outline-none border-none " placeholder="What's happening"></textarea>
                </div>
                <div className="w-full flex flex-col md:flex-row gap-3 md:items-center justify-between">
                 <Actions />
                    <div className="flex justify-end w-full ">

                    <p className="px-10 py-2.5 duration-300 w-fit cursor-pointer hover:scale-105 active:scale-100 hover:shadow hover:shadow-prim rounded-full bg-prim text-gray-800 text-sm font-semibold">Post</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

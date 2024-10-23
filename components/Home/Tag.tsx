import React from 'react'
import { BsStar, BsTag } from 'react-icons/bs'

export default function Tag() {
    return (
        <div className='flex gap-3 items-center
        '>
            <BsStar className='text-lg'/>
            <div className="bg-gray-900 flex p-1.5 gap-5 rounded-full">
                <div className="bg-gray-700 text-xs p-1 pr-5 rounded-full flex items-center gap-1.5">
                    <div className="h-5 w-5 rounded-full border-2"></div>
                    <span>$Space</span>
                </div>
                <div className="flex text-xs gap-2 items-center">
                    <p>Tagged</p>
                    <BsTag />
                </div>
            </div>
        </div>
    )
}

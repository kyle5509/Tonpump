import React from 'react'
import { BsStar, BsTag } from 'react-icons/bs'

export default function Tag() {
    return (
        <div className='flex gap-2 items-center
        '>
            <BsStar className='text-lg'/>
            <div className="bg-gray-900 py-1.5 flex p-1.5 gap-3 rounded-full">
                <div className="bg-gray-700 text-xs py-1.5 pl-1 pr-4 rounded-full flex items-center gap-2">
                    <div className="h-4 w-4 rounded-full border-2"></div>
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

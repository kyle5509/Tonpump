import React, { Dispatch, SetStateAction, useState } from 'react'

type Props = {
    active: number 
    setActive: Dispatch<SetStateAction<number>>
}

export default function Tab({active, setActive}: Props) {
    return (
        <div className="justify-between border-b-2 border-purplee gap-1 grid grid-cols-3 text-white  items-center h-[55px]">
            {["All Tokens", "New Projects", "Following"].map((el, index) => (
                <div className={`grid border-purplee cursor-pointer place-content-center h-full ${index === 1 && "border-x-2"}`}>
                    <p className="w-full">{el}</p>
                </div>
            ))}
        </div>)
}

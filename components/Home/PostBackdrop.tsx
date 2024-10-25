'use client'
import React, { useState } from 'react'
import Actions from './Actions'
import { FaTimes } from 'react-icons/fa'
import { useAppDispatch, useAppSelector } from '@/redux/store/hook'
import { closeBackdrop } from '@/redux/reducers/backdrop'

export default function PostBackdrop() {
    const [value, setValue] = useState('')
    const backdrop = useAppSelector(store => store.backdrop.value)
    const dispatch = useAppDispatch()
    return (
        <div className={`bg-[#2D383E] rounded-3xl duration-500 p-5 ${backdrop === "post" ? " w-[600px] lg:w-[750px] backdrop-blur-none opacity-100 visible" : "invisible opacity-0 w-0 backdrop-blur-xl"}`}>
            <div className="w-full justify-between mb-5 text-prim items-center flex">
                <div className="flex gap-8 items-center">
                    <img src="logo.png" className='h-[18px]' alt="" />
                    <p className='text-base'>Create a Hype</p>
                </div>
                <div onClick={() => dispatch(closeBackdrop())} className="h-7 w-7 cursor-pointer rounded-full bg-[#475861] active:scale-90 duration-300 grid place-content-center">
                    <FaTimes />
                </div>
            </div>
            <div className="flex rounded-md gap-3">
                <div className="h-10 w-10 border-2 rounded-full shrink-0"></div>
                <div className="flex-1 mt-1">
                    <div className="w-full rounded-lg bg-[#292F32] h-fit">
                        <textarea value={value} onChange={(e) => setValue(e.target.value)} className="min-h-[160px] text-white textarea resize-none overflow-y-hidden w-full bg-transparent p-3 outline-none border-none " placeholder="Create a hype!"></textarea>
                    </div>
                    <div className="w-full flex mt-5 flex-col md:flex-row gap-3 md:items-center justify-between">
                        <Actions />
                        <div className="flex justify-end w-full ">
                            <p className="px-5 py-2.5 duration-300 w-fit cursor-pointer hover:scale-105 active:scale-100 hover:shadow hover:shadow-prim rounded-full bg-prim text-gray-800 text-sm font-semibold">Post</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

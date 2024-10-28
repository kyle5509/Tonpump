'use client'

import { useState } from "react"

type Props = {
    label?: string
    error?: string
    onChange?: (e: any) => void
    value: string
    name?: string
}

export default function Input({ label, error, name, onChange, value }: Props) {
    return (
        <div className="">
            <div className="h-[60px] shadow-lg rounded-md relative">
                <input type="text" required onChange={onChange} name={name} value={value} className={`h-full text-15 border border-gray-400 valid:border-2 rounded valid:pt-5 focus-within:border-prim w-full bg-transparent focus:pt-5 duration-300 pl-3 valid text-white peer outline-none `} />
                <label htmlFor="" className="absolute text-15 top-5 text-gray-400 left-3 duration-500 pointer-events-none peer-focus:top-2 peer-focus:text-13 peer-valid:top-2 peer-valid:text-13 peer-focus:text-prim peer-valid:text-gray-400 ">{label}</label>
            </div>
            <p className={`text-red-500 duration-300 mt-1 overflow-hidden ${error ? 'h-5' : 'h-0'}`}>{error}</p>
        </div>
    )
}

'use client'

import { useState } from "react"

type Props = {
    label?: string
    placeholder?: string
    height?: string
    background?: string
    text?: string
    marginBottom?: string
    marginTop?: string
    error?: string
    labelStyle?: string
    onChange?: (e: any) => void
    value: string
    name?: string
}

export default function Input({ label,labelStyle,error, name, onChange, value, placeholder,height, background, text, marginBottom, marginTop }: Props) {
    const [focused, setFocused] = useState(false)
    return (
        <div style={{ marginBottom: `${marginBottom}`, marginTop: `${marginTop}` }} className="w-full">
            <div style={{ height: `${height}`, backgroundColor: `${background}` }} className={`h-[50px] w-full rounded duration-500  relative  $`}>
                <input required type="text" name={name} value={value} onChange={onChange} className={`h-full text-black placeholder:text-[#9EA3A9] border-2 ${error ? "border-red-500": `${value.trim().length > 0 ? "border-prim" : "border-gray-300"}`} bg-transparent rounded focus:border-prim peer pl-3 outline-none w-full`} />
                <label htmlFor="" className="absolute bg-white peer-focus:text-prim peer-valid:text-prim peer-valid:-top-0 peer-focus:-top-0 pointer-events-none duration-300 px-1.5 peer-focus:text-xs peer-valid:text-xs top-1/2 -translate-y-1/2 left-2">{label}</label>
            </div>
            <p className={`text-red-500 ${error ? "h-5": "h-0"} overflow-hidden duration-500`}>{error}</p>
        </div>
    )
}

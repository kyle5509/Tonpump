import React from 'react'

type Props = {
    title: string
    marginTop?: string
    width?: string
    paddingX?: string
}

export default function Button({ title, marginTop,width, paddingX }: Props) {
    return (
        <div style={{marginTop: `${marginTop}`}} className="grid w-full transition-none">
            <button style={{paddingInline: `${paddingX}`, width: `${width}`}} className='px-[70px] w-fit mx-auto font-semibold py-[10px] lg:hover:scale-105 lg:active:scale-100 duration-150 rounded-md lg:rounded-xl text-secondary bg-prim'>{title}</button>
        </div>
    )
}

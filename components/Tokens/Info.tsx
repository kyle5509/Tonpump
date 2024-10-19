import React from 'react'

type Props = {
  img: string
  title: string
}

export default function Info({ img, title }: Props) {
  return (
    <div className='flex flex-col text-xs gap-4 p-4 rounded-b-2xl border-[#9DFBFA] border-2 border-dashed '>
      <div className="flex bg-[#9DFBFA14] p-2 rounded-md items-center text-white w-fit gap-2">
        <p className='text-prim'>{title}</p>
        <div className="">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6].map((el, key) => (
          <div key={key} className={`h-4 w-6 relative ${key === 6 && 'after:absolute after:h-10 after:w-[2px] after:bg-prim after:top-full after:right-0'} ${key < 7 ? "bg-prim " : "bg-white"}`}></div>
        ))}
      </div>
      <div className="flex text-white items-center gap-2 ">
        <img src="round.png" className='' alt="" />
        <span>Progress</span>
        <span className='text-[#8996A9]'>65.02%</span>
      </div>
      <p className='text-prim'>The progress bar increases as price increases. </p>
    </div>
  )
}

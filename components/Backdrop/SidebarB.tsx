import React from 'react'

export default function SidebarB() {
  return (
    <div className='flex flex-col justify-between p-5 flex-1'>
      <div className="">
        <p className='text-[#ECEDEE] mb-2'>Complete the details and link your wallet to generate a new token</p>
        <div className="flex gap-2 items-center">
          <div className="">
            <img src="smallcheck.png" alt="" />
          </div>
          <p className='text-prim'>No long procedure</p>
        </div>
      </div>
      <div>
        <img src="rafiki.png" alt="" />
      </div>
      <div className="flex justify-between text-prim">
        <div className="flex flex-col gap-7 text-xs items-center justify-center">
          <img src="check23.png" alt="" />
          <p>Ensure compliance</p>
        </div>
        <div className="flex flex-col gap-7 text-xs items-center justify-center">
          <img src="flash.png" alt="" />
          <p>Unlimited creation</p>
        </div>
      </div>
    </div>
  )
}

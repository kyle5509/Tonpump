'use client'
import React, { useState } from 'react'
import Title from './Title'
import KingOfCoin from '../Home/KingOfCoin'
import Links2 from './Links2'
import { useAppSelector } from '@/redux/store/hook';
import DisplayActionCards from '../Home/DisplayActionCards'

export default function Updates() {
  const darkmode = useAppSelector((store) => store.darkmode.value);
  const type = useAppSelector((store) => store.sidebar.type);
  const [active, setActive] = useState(0);
  const [activeMarket, setActiveMarket] = useState(0);
  return (
    <div className="xl:py-2 xl:pr-2 order-1 xl:order-2 overflow-y-auto lg:h-full">
      <div className='flex flex-col bg-[#14050E] xl:border-2 rounded-2xl border-purplee w-full min-h-full'>
        <div className="p-3 pt-0 lg:pt-3">
          <Title
            title="King of Coin"
            parentStyle="h-[50px]"
          />
        </div>
        <div className="p-3 flex-1 mt-2 rounded-2xl bg-[#1B1B1B]">
          <KingOfCoin />
          <div className=" mt-6 mb-3 items-center flex overflow-y-auto w-full justify-between">
            <div className="">
              <Title
                title="Updates"
                parentStyle="h-[50px]"
              />
            </div>
            <Links2
              active={active}
              setActive={setActive}
              textStyle="text-xs "
              data={["All", "Creation", "Transaction"]}
            />
          </div>
          <DisplayActionCards />
        </div>
      </div>
    </div>
  )
}

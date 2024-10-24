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
    <div className="lg:p-3 pl-0 xl:pl-3 h-full xl:overflow-y-auto xl:order-2">
      <div className="h-full xl:overflow-y-auto">
        <div className='flex flex-col lg:border-2 xl:w-[350px] min-h-full rounded-2xl border-purplee'>
          <div className="px-3 py-2 mb-3">
            <Title
              title="King of Coin"
              parentStyle="h-[45px]"
            />
          </div>
          <div className="p-3 flex-1 xl:rounded-2xl bg-gray-800">
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
    </div>
  )
}

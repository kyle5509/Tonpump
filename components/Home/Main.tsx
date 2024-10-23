'use client'
import { useState } from "react";
import Links from "../General/Links";
import Title from "../General/Title";
import DisplayPostCards from "./DisplayPostCards";
import MobileKingOfCoin from "../General/MobileKingOfCoin";
import Upload from "./Upload";

export default function Main() {
  const [active, setActive] = useState(0)
  return (
    <div className="overflow-y-auto xl:rounded-xl overflow-x-hidden h-full w-full">
      <MobileKingOfCoin />
      <div className="xl:hidden h-8"></div>
      <div className="p-3 xl:p-0">
        <div className="flex p-2 gap-5">
          <div className="mt-1 ml-1">
            <Title title="Token" height="50px" parentStyle="" />
          </div>
          <Links height="50px" data={['Trending', 'Following', 'New Project']} textStyle="text-xs xl:text-13 px-3 xl:px-5" active={active} setActive={setActive} />
        </div>
        <div className="p-4 space-y-4 bg-[#1B1B1B]">
          <Upload />
          <DisplayPostCards />
        </div>
      </div>
    </div>
  )
}

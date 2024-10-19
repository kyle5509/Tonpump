'use client'
import { useState } from "react";
import Links from "../General/Links";
import Title from "../General/Title";
import DisplayPostCards from "./DisplayPostCards";
import MobileKingOfCoin from "../General/MobileKingOfCoin";

export default function Main() {
  const [active, setActive] = useState(0)
  return (
    <div className="overflow-y-auto xl:p-4 xl:rounded-xl overflow-x-hidden h-full w-full">
      <MobileKingOfCoin />
      <div className="xl:hidden h-8"></div>
      <div className="p-3 xl:p-0">
        <div className="flex justify-between">
          <div className="mt-1 ml-1">
            <Title title="Token" height="50px" parentStyle="" />
          </div>
          <Links height="50px" data={['Trending', 'Following', 'New Project']} textStyle="text-xs xl:text-13 px-3 xl:px-5" active={active} setActive={setActive} />
        </div>
        <div className=" after:-translate-x-9 relative after:h-0.5 after:absolute after:top-0 after:left-0 after:w-[500%] after:bg-purplee pt-4 mt-4">
          <DisplayPostCards />
        </div>
      </div>
    </div>
  )
}

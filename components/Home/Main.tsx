'use client'
import { useState } from "react";
import Links from "../General/Links";
import Title from "../General/Title";
import DisplayPostCards from "./DisplayPostCards";
import MobileKingOfCoin from "../General/MobileKingOfCoin";
import Upload from "./Upload";
import Updates from "../General/Updates";

export default function Main() {
  const [active, setActive] = useState(0)
  return (
    <div className="flex-1 xl:overflow-y-auto py-3 h-full">
      <div className="h-full xl:overflow-y-auto">
        <div className="p-3 lg:border-2 border-purplee space-y-4 lg:rounded-2xl bg-[#1B1B1B]">
          <div className="mb-3 flex items-center justify-between md:justify-start md:w-fit gap-12">
            <Title
              title="Home"
              parentStyle="h-[50px]"
            />
            <Links
              active={active}
              height="50px"
              setActive={setActive}
              textStyle="text-xs md:text-13 px-3 md:px-5"
              data={["All", "Creation", "Transaction"]}
            />
          </div>
          <Upload />
          <DisplayPostCards />
        </div>
      </div>
    </div>
  )
}

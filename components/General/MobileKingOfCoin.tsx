"use client";
import { motion } from "framer-motion";
import KingOfCoin from "../Home/KingOfCoin";
import DisplayActionCards from "../Home/DisplayActionCards";
import { useAppSelector } from "@/redux/store/hook";
import Title from "./Title";
import { useState } from "react";
import Links2 from "./Links2";

export default function MobileKingOfCoin() {
  const darkmode = useAppSelector((store) => store.darkmode.value);
  const type = useAppSelector((store) => store.sidebar.type);
  const [active, setActive] = useState(0);
  const [activeMarket, setActiveMarket] = useState(0);

  return (
    <div className={`block lg:hidden h-fit w-full duration-500 p-3 ${darkmode ? "bg-transparent": "bg-gray-50"}`}>
      <motion.div
        className={`  min-h-full xl:rounded-xl`}
      >
        <div className="mb-3">
          <Title
            title="King of Coin"
            parentStyle="h-[45px]"
          />
        </div>
        <div
          className={`${darkmode ? "bg-[#272727d]" : "bg-whited"
            } h-fit duration-500 transition-colors rounded-2xl mt-3`}
        >
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
              textStyle="text-xs xl:text-13"
              data={["All", "Creation", "Transaction"]}
            />
          </div>
          <DisplayActionCards />
        </div>
      </motion.div>
    </div>
  );
}

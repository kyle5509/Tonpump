'use client'
import { useEffect, useState } from "react";
import Links from "../General/Links";
import Title from "../General/Title";
import TrendingCardList from "./TrendingCardList";
import Updates from "../General/Updates";

export default function Main() {
    const [active, setActive] = useState(0);

    return (
        <div className="sm:p-3 xl:p-0 xl:h-full pl-0 xl:overflow-y-auto">
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_350px] lg:border-2 xl:border-none border-purplee rounded-2xl xl:h-full xl:overflow-y-auto ">
                <div className="xl:h-full xl:overflow-y-auto mb-4 order-2 xl:order-1">
                    <div className="flex-1 my-3 xl:border-2 border-purplee rounded-2xl">
                        <div className="flex items-center m-3 justify-between md:justify-start md:w-fit gap-12">
                            <Title
                                title="Tokens"
                                parentStyle="h-[50px]"
                            />
                            <Links
                                active={active}
                                height="50px"
                                setActive={setActive}
                                textStyle="text-xs md:text-13 px-3 md:px-5"
                                data={["Trending", "Following", "New Projects"]}
                            />
                        </div>
                        <TrendingCardList />
                    </div>
                </div>
                <Updates />
            </div>
        </div>
    )
}

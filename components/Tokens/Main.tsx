'use client'
import { useEffect, useState } from "react";
import Links from "../General/Links";
import Title from "../General/Title";
import Chart from "./Chart";
import SpaceMan from "./SpaceMan";
import Post_Comments from "./Post_Comments";
import Details from "./Details";
import TransactionTable from "../Tables/TransactionTable";
import HoldersTable from "../Tables/HoldersTable";
import { useAppSelector } from "@/redux/store/hook";
import { RootState } from "@/redux/store/store";
// import { useJettonContract } from "@/hooks/useJettonContract";

export default function Main() {
    const [active, setActive] = useState(0);
    const [opened, setOpened] = useState(-1)
    const posts = useAppSelector(store => store.posts)

    return (
        <div className=" overflow-y-auto h-full w-full">
            <div className="flex flex-col h-full">
                <div className="p-2 xl:p-3">
                    <div className="mb-5"><Title title="Token" /></div>
                    <SpaceMan />
                    <div className="my-5"><Title title="Charts" /></div>
                </div>
                <div className="">
                    <div className="bg-[#292F32] px-2 lg:px-3 pt-2 lg:pt-3 ">
                        <Chart />
                        <div className="">
                            <Links data={['Details', 'Threads', 'Transactions', 'Holders']} textStyle="px-3 text-13 xl:text-sm xl:px-4 " setActive={setActive} active={active} />
                        </div>
                    </div>
                    <div className={` overflow-y-auto ${active === 0 ? 'block' : "hidden"}`}>
                        <Details />
                    </div>
                    <div className={` overflow-y-auto min-h-96 origin-top relative ${active === 1 ? 'block' : "hidden"}`}>
                        {posts.length > 0 &&
                            <div className="">
                                {posts.map((post: any, key: number) => (
                                    <Post_Comments post={post} track={key} setOpened={setOpened} opened={opened} />
                                ))}
                            </div>
                        }
                    </div>
                    <div className={` overflow-y-auto ${active === 2 ? 'block' : "hidden"}`}>
                        <TransactionTable />
                    </div>
                    <div className={` overflow-y-auto ${active === 3 ? 'block' : "hidden"}`}>
                        <HoldersTable />
                    </div>
                </div>
            </div>

        </div>
    )
}

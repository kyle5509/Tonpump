'use client'
import { useEffect, useState } from "react";
import Upload from "./Upload";
import { TPost } from "../Tokens/type";
import { useAppDispatch } from "@/redux/store/hook";
import { loadPosts } from "@/redux/reducers/posts";
import Tab from "./Tab";
import DisplayPostCards from "./DisplayPostCards";
import KingOfCoin from "./KingOfCoin";
import HomeTab from "./HomeTab";
import Updates from "../General/Updates";

type Props = {
  posts: TPost[]
}

export default function Main({ posts }: Props) {
  const [active, setActive] = useState(0)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(loadPosts(posts))
  }, [])
  return (
    <div className="lg:py-2 lg:pr-2 xl:p-0 overflow-y-auto h-full">
      <div className="grid lg:border-2 xl:border-none border-purplee rounded-2xl xl:rounded-none xl:h-full overflow-y-auto gap-3 bg-[#14050E] grid-cols-1 xl:grid-cols-[1fr_350px]">
        <div className="py-2 overflow-y-auto h-full order-2 xl:order-1 ">
          <div className="rounded-2xl xl:border-2 overflow-x-hidden border-purplee">
            <HomeTab active={active} setActive={setActive} />
            <div className="py-5 mt-5 space-y-4 px-3 bg-[#1B1B1B]">
              <Upload />
              <DisplayPostCards />
            </div>
          </div>
        </div>
        <Updates />
      </div>

    </div>
  )
}

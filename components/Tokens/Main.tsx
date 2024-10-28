'use client'
import { useEffect, useState } from "react";
import { TPost } from "../Tokens/type";
import { useAppDispatch } from "@/redux/store/hook";
import { loadPosts } from "@/redux/reducers/posts";
import TrendingCardList from "./TrendingCardList";
import TokensTab from "./TokensTab";
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
    <div className="lg:py-2 pr-2 xl:p-0 overflow-y-auto h-full">
      <div className="grid xl:h-full lg:border-2 xl:border-none border-purplee lg:rounded-2xl xl:rounded-none gap-3 overflow-y-auto bg-[rgb(20,5,14)] rounded-2xl grid-cols-1 xl:grid-cols-[1fr_350px]">
        <div className="xl:py-2 order-2 xl:order-1 h-full overflow-y-auto">
          <div className="xl:border-2 border-purplee rounded-2xl">
            <TokensTab active={active} setActive={setActive} />
            <div className="py-5 mt-5 space-y-4 rounded-2xl bg-[#1B1B1B]">
              <TrendingCardList />
            </div>
          </div>
        </div>
        <Updates />
      </div>
    </div>
  )
}

// dnnacpl85

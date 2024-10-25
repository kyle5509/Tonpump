'use client'
import { useEffect, useState } from "react";
import Links from "../General/Links";
import Title from "../General/Title";
import DisplayPostCards from "./DisplayPostCards";
import MobileKingOfCoin from "../General/MobileKingOfCoin";
import Upload from "./Upload";
import Updates from "../General/Updates";
import { TPost } from "../Tokens/type";
import { useAppDispatch } from "@/redux/store/hook";
import { loadPosts } from "@/redux/reducers/posts";

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
    <div className="grid grid-cols-1 relative xl:grid-cols-[1fr_360px] lg:border-2 xl:border-none border-purplee rounded-2xl xl:h-full xl:overflow-y-auto ">
      <div className="py-3 order-2  xl:order-1 xl:h-full xl:overflow-y-auto">
        <div className="h-12 w-12 rounded-full border-2 absolute bottom-5 right-5"></div>
        <div className="xl:border-2 xl:rounded-2xl border-purplee">
          <div className="p-3">
            <div className="mb-3 flex items-center justify-between md:justify-start md:w-fit gap-12">
              <Title title="Home" parentStyle="h-[50px]" />
              <Links
                active={active}
                height="50px"
                setActive={setActive}
                textStyle="text-xs md:text-13 px-3 md:px-5"
                data={["All", "Creation", "Transaction"]}
              />
            </div>
            <Upload />
          </div>
          <div className="lg:p-3">
            <DisplayPostCards />
          </div>
        </div>
      </div>
      <Updates />
    </div>
  )
}

'use client'
import { useEffect, useState } from "react";
import PostComment2 from "./PostComment2";
import PostComment from "./PostComment";
import Updates from "../General/Updates";


type Props = {
}

export default function Main() {
  const [active, setActive] = useState(0)
  return (
    <div className="grid xl:h-full overflow-y-auto bg-[#14050E] grid-cols-1 xl:grid-cols-[1fr_350px]">
      <div className="lg:h-full order-2 xl:order-1 overflow-y-auto">
        <div className="bg-blue-500"></div>
        <div className="space-y-2 bg-[#1B1B1B]">
          <PostComment />
          <div className="">
            {[1, 2, 3, 4].map(() => (
              <PostComment2 />
            ))}
          </div>
        </div>
      </div>
      <Updates />
    </div>
  )
}

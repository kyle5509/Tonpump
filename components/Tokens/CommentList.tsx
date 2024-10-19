'use client'
import { useEffect, useState } from "react";
import Comment from "./Comment";
import Upload from "./PostCard";
import { useAppSelector } from "@/redux/store/hook";

type Props = {
  id: number
  comments: {
    post_id: number
    content: string
  }[]
}


export default function CommentList({ id, comments}: Props) {
  const list = [1, 2, 3, 4]
  const [active, setActive] = useState(-1)
  const refresh = (track: number) => {
    if (active === track) {
      setActive(-1)
    } else {
      setActive(track)
    }
  }




  return (
    <div className="relative duration-500 overflow-hidden">
        <div className="flex flex-col gap-1">
          {[1,2,3,4,5].map((el: any, key: number) => (
            <div key={key} className="">
              <Comment  track={key} active={active} refresh={refresh} total={list.length} />
            </div>
          ))}
        </div>
    </div>
  )
}

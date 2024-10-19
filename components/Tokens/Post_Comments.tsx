'use client'
import PostCard from "./PostCard";
import CommentList from "./CommentList";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TPost } from "./type";
import { useAppSelector } from "@/redux/store/hook";




type Props = {
  opened: number
  track: number
  post: any
  setOpened: Dispatch<SetStateAction<number>>
}

export default function Post_Comments({ opened, post, track, setOpened }: Props) {
  const [content, setContent] = useState('')
  console.log(post.post, 'hey')
  const onChange = (e: any) => {
    setContent(e.target.value)
  }
  const clearInput = () => {
    setContent('')
  }
  const [comments, setComments] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [updateComment, setUpdateComment] = useState(0)
  const getData = async () => {
    const response = await fetch(`https://backend-server-tvb6.onrender.com/api/posts/${post.ID}/comments`)
    const result = await response.json()
    setComments(result.data)
  }
  const userId = useAppSelector(store => store.user.id)

  const addPost = async () => {
    console.log(userId, post.ID)
    try {
      setLoading(true)
      const response = await fetch(`https://backend-server-tvb6.onrender.com/api/posts/${userId}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          post_id: post.ID,
          content
        })
      })
      const result = await response.json()
      console.log(result)

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }


  useEffect(() => {
    getData()
  }, [updateComment])

  return (
    <div className="p-4 origin-top bg-slate-950">
      <div className="" onClick={() => setOpened(track)}>
        <PostCard addPost={addPost} updateComment={updateComment} setUpdateComment={setUpdateComment} onChange={onChange} postData={post} clearInput={clearInput} value={content} />
      </div>
      <div className={` grid ${track === opened ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} scale-y-100 origin-top mt-auto duration-500 overflow-hidden relative`}>
        <div className="relative z-10">
          {/* <CommentList comments={comments} id={post.ID} /> */}
        </div>
        <div className={`absolute h-full w-full z-20 bg-cyan-800 grid top-0 left-0 place-content-center ${loading ? "opacity-100 visible" : "opacity-0 invisible"} duration-500`}>
          <span className="loader"></span>
        </div>
      </div>
    </div >
  )
}

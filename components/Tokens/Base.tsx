"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import { showMainSideBar, showMarketSideBar } from "@/redux/reducers/sidebar";
import SpaceMan from './SpaceMan';
import Title from "../General/Title";
import Chart from "./Chart";
import Links from "../General/Links";
import Details from "./Details";
import DisplayCommentCards from "./CommentList";
import { variant } from "@/lib/framer";
import RightSidebarB from "../Layout/RightSidebarB";
import Main from "./Main";
import { addPosts } from "@/redux/reducers/posts";
import { stopRedirect } from "@/redux/reducers/redirect";

type Props = {
  tableHeader: string[];
  data: (string | number)[][];
};

export default function Base() {
  const dispatch = useAppDispatch();
  const postsRedux = useAppSelector(store => store.posts)
  const [posts, setPosts] = useState<any>()
  const [active, setActive] = useState(0);
  async function fetchPostsAndComments() {
    try {
      const postsResponse = await fetch('https://backend-server-tvb6.onrender.com/api/posts');
      const postsData = await postsResponse.json();
      const data = postsData.data
      const combinedData = data.map(async (post: any) => {
        const commentsResponse = await fetch(`https://backend-server-tvb6.onrender.com/api/posts/${post.ID}/comments`);
        const commentsData = await commentsResponse.json();
        return {
          post: post,
          comments: commentsData.data
        };
      });
      const postss = await Promise.all(combinedData);
      dispatch(addPosts(postss))
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    } finally {
      setActive(1)
    }
  }


  

  useEffect(() => {
    fetchPostsAndComments()
    dispatch(stopRedirect())
    console.log(postsRedux)
  }, [active, dispatch]);

  return (
    <motion.div
      variants={variant}
      animate="animate"
      initial="initial"
      className="h-full grid overflow-y-auto gap-3"
    >
      <Main />
    </motion.div>
  );
}

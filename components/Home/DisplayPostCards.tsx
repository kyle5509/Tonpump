'use client'
import PostCard from './PostCard'
import { motion } from 'framer-motion'
import { useAppSelector } from '@/redux/store/hook'

export default function DisplayPostCards() {
   const posts = useAppSelector(store => store.post.posts)

    return (
        <div className="">
            <motion.div className="">
                {posts?.length > 0 && (
                    <div className={`grid bg-[#1B1B1B] duration-500 gap-8 grid-cols-1 sm:grid-cols-1 4xl:grid-cols-2`}>
                        {posts?.map((post, key) => (
                            <PostCard posts={posts} track={key} length={posts.length}/>
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    );
}

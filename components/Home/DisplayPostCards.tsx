'use client'
import PostCard from './PostCard'
import { motion } from 'framer-motion'
import { useAppSelector } from '@/redux/store/hook'
import { useState } from 'react'

export default function DisplayPostCards() {
    const posts = useAppSelector(store => store.post.posts)
    const [opened, setOpened] = useState(-1)

    

    return (
        <motion.div className="">
            <div className={`grid gap-5 duration-500 grid-cols-1 sm:grid-cols-1 4xl:grid-cols-2`}>
                {posts?.map((post, key) => (
                    <PostCard post={post} track={key} opened={opened} setOpened={setOpened} length={posts.length} />
                ))}
            </div>
        </motion.div>
    );
}

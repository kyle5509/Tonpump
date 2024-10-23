'use client'
import PostCard from './PostCard'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Post from './Post'

export default function DisplayPostCards() {
    const [posts, setPosts] = useState<[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const response = await fetch('https://backend-server-tvb6.onrender.com/api/posts');
            const result = await response.json()
            setPosts(result.data);
        } catch (err: any) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData()
    }, [loading])

    return (
        <div className="">
            <motion.div className="">
                {posts?.length > 0 && (
                    <div className={`grid bg-[#1B1B1B] duration-500 gap-8 grid-cols-1 sm:grid-cols-1 4xl:grid-cols-2`}>
                        {posts?.map((post, key) => (
                            <PostCard post={post} />
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    );
}

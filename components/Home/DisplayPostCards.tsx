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
            {!loading ?
                <motion.div className="">
                    {posts?.length > 0 && (
                        <div className={`grid duration-500 gap-8 grid-cols-1 sm:grid-cols-2 4xl:grid-cols-3`}>
                            {posts?.map((post, key) => (
                                <Post post={post}/>
                            ))}
                        </div>
                    )}
                </motion.div>
                :
                <div className="text-prim text-2xl font-bold text-center h-80 w-full grid place-content-center">
                    <span className='loader3'></span>
                </div>
            }
        </div>
    );
}

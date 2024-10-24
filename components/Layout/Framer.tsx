'use client'
import { variant } from '@/lib/framer'
import { motion } from 'framer-motion'

export default function Framer({ children }: { children: React.ReactNode }) {
    return (
        <motion.div variants={variant} initial="initial" animate="animate" className='h-full w-full overflow-y-auto'>
            {children}
        </motion.div>
    )
}

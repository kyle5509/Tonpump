'use client'
import { AnimatePresence, motion } from 'framer-motion'
import ActionCard from './ActionCard'
import { useAppDispatch, useAppSelector } from '@/redux/store/hook'
import { addTransaction } from '@/redux/reducers/sidebarActions'
import { useEffect, useState } from 'react'

type Transaction = {
  type: string;
  user: string;
  amount: number;
  id: number
};

export default function DisplayActionCards() {
  const data = useAppSelector(store => store.sidebarActions) 
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [id, setId] = useState(10)

  const [transaction, setTransaction] = useState({
    type: "buy",
    user: "HZsdrt",
    amount: 0.45,
    id
  })

  const updateCards = async () => {
    setTransactions((prevCards) => {
      setId(id + 1)
      const updatedCards = [{...transaction, id: id + 1}, ...prevCards]; 
      return updatedCards.slice(0, 10); 
    });
  };

  useEffect(() => {
    setTransactions(data);  
    const interval = setInterval(() => {
      updateCards();  
    }, 2000);
    return () => clearInterval(interval);  
  }, [data]); 

  return (
    <div className='flex flex-col gap-2'>
      <AnimatePresence>
        {transactions?.map((el, index) => (
          <motion.div
            key={el.id} 
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0, transition: {duration: 2} }}
            exit={{ opacity: 0, x: -100, transition:{duration: 2} }}
          >
            <ActionCard title={el.type} track={index} user={el.user} amount={el.amount} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

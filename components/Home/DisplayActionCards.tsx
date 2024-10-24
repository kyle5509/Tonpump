'use client'
import { AnimatePresence, motion } from 'framer-motion'
import ActionCard from './ActionCard'
import { useAppDispatch, useAppSelector } from '@/redux/store/hook'
import { addTransaction } from '@/redux/reducers/sidebarActions'
import { useEffect, useState } from 'react'

// Define Transaction type outside of component
type Transaction = {
  type: string;
  user: string;
  amount: number;
};

export default function DisplayActionCards() {
  const data = useAppSelector(store => store.sidebarActions) // Fetch transactions from Redux
  const [transactions, setTransactions] = useState<Transaction[]>([])

  // Mock transaction for testing
  const transaction = {
    type: "buy",
    user: "HZsdrt",
    amount: 0.45,
    
  }

  // Function to add a new transaction to the local state
  const updateCards = async () => {
    setTransactions((prevCards) => {
      const updatedCards = [transaction, ...prevCards]; // Add new card at the beginning
      return updatedCards.slice(0, 10); // Ensure only the latest 10 cards are kept
    });
  };

  // Synchronize local state with Redux state (data) and update every 2 seconds
  useEffect(() => {
    setTransactions(data); // Initial load from Redux
    const interval = setInterval(() => {
      updateCards(); // Add a new transaction every 2 seconds
    }, 2000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [data]); 

  return (
    <div className='flex flex-col gap-2'>
      <AnimatePresence>
        {transactions?.map((el, index) => (
          <motion.div
            key={el.user} // Use index for key, but using unique IDs (like transaction ID) is better
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: {duration: 2} }}
            exit={{ opacity: 0, x: -100, transition:{duration: 2} }}
          >
            <ActionCard title={el.type} user={el.user} amount={el.amount} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

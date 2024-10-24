'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Cards = () => {
  // State to hold the list of cards (10 max)
  const [cards, setCards] = useState([
    { id: 1, content: "Card 1" },
    { id: 2, content: "Card 2" },
    { id: 3, content: "Card 3" },
    { id: 4, content: "Card 4" },
    { id: 5, content: "Card 5" },
    { id: 6, content: "Card 6" },
    { id: 7, content: "Card 7" },
    { id: 8, content: "Card 8" },
    { id: 9, content: "Card 9" },
    { id: 10, content: "Card 10" },
  ]);

  // Simulate API update and add a new card
  useEffect(() => {
    const interval = setInterval(() => {
      updateCards();
    }, 3000); // Change every 3 seconds (simulate API update)
    return () => clearInterval(interval);
  }, [cards]);

  const updateCards = () => {
    // Add a new card at the end
    const newCard = { id: Date.now(), content: `New Card ${cards.length + 1}` };
    const updatedCards = [newCard, ...cards].slice(0, 10); // Keep only 10 cards
    setCards(updatedCards);
  };

  return (
    <div className="card-list grid grid-cols-3">
      <AnimatePresence>
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="card h-40 w-40 bg-blue-500 shadow-md rounded-lg"
            initial={{ opacity: 0, x: 100 }} 
            animate={{ opacity: 1, x: 0 }}   
            exit={{ opacity: 0, x: -100 }}  
            transition={{ duration: 2 }}
          >
                <p>{card.content}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Cards;

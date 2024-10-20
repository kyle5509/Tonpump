"use client";
import { motion } from "framer-motion";
import { variant } from "@/lib/framer";
import Main from "./Main";
import { useAppDispatch } from "@/redux/store/hook";
import { useEffect } from "react";
import { stopRedirect } from "@/redux/reducers/redirect";
import { useJettonContract } from "@/hooks/useJettonContract2";

export default function Base() {
  const dispatch = useAppDispatch()
  const { jettonWalletAddress, balance, mint } = useJettonContract();


  useEffect(() => {
    dispatch(stopRedirect())
  }, [])
  
 
  return (
    <motion.div
      variants={variant}
      animate="animate"
      initial="initial"
      className=" h-full text-white overflow-y-auto "
    >
          {jettonWalletAddress && <p>Wallet Address: {jettonWalletAddress}</p>}
          {balance !== null && <p>Balance: {balance} Nano</p>}
          <button onClick={mint} disabled={!jettonWalletAddress}>Mint JETTN</button>
      <Main />
    </motion.div>
  );
}

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

  
 
  return (
    <motion.div
      variants={variant}
      animate="animate"
      initial="initial"
      className=" h-full text-white overflow-y-auto "
    >
      <Main />
    </motion.div>
  );
}

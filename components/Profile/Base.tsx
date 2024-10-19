"use client";
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect } from "react";
import { variant } from "@/lib/framer";
import { useAppDispatch } from "@/redux/store/hook";
import Main from "./Main";
import { stopRedirect } from "@/redux/reducers/redirect";


export default function Base() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(stopRedirect())
  }, [])


  return (
    <motion.div
      variants={variant}
      animate="animate"
      initial="initial"
      className="h-full grid overflow-y-auto gap-3"
    >
      <Main />
    </motion.div>
  );
}

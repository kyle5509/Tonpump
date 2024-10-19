"use client";
import { motion } from "framer-motion";
import { variant } from "@/lib/framer";
import Main from "./Main";
import HoldersTable from "../Tables/HoldersTable";
import FollowersTable from "../Tables/FollowersTable";
import TokenCreatedTable from "../Tables/TokenCreatedTable";
import TokenHeldTable from "../Tables/TokenHeldTable";
import TransactionTable from "../Tables/TransactionTable";
import FollowingTable from "../Tables/FollowingTable";
import { useAppDispatch } from "@/redux/store/hook";
import { useEffect } from "react";
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
      className=" h-full overflow-y-auto "
    >
      <Main />
    </motion.div>
  );
}

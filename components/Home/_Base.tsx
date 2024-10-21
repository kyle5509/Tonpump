"use client";
import { motion } from "framer-motion";
import { variant } from "@/lib/framer";
import Main from "./Main";
import { useAppDispatch } from "@/redux/store/hook";
import { useEffect } from "react";
import { stopRedirect } from "@/redux/reducers/redirect";
import { useJettonContract } from "@/hooks/useJettonContract";

export default function Base() {
  const dispatch = useAppDispatch()

  const { deploy } = useJettonContract();

  const handleDeploy = () => {
    try {
      deploy();
      console.log("Deployment successful!");
    } catch (error) {
      console.error("Deployment failed:", error);
    }
  };

  return (
    <motion.div
      variants={variant}
      animate="animate"
      initial="initial"
      className=" h-full text-white overflow-y-auto "
    >
      <div className="w-full place-content-center grid">
        <h1>Deploy Jetton Contract</h1>
        <button className="bg-prim px-6 py-3 rounded-md shadow-md duration-300 active:scale-95" onClick={handleDeploy}>Deploy</button>
      </div>
      <Main />
    </motion.div>
  );
}

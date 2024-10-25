'use client'
import { Dispatch, SetStateAction, useState } from "react"
import MobileLinks from "./MobileLinks";

type Props = {
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function MobileNav({ isOpen, setOpen }: Props) {

  return (
    <div className={`fixed top-16 duration-300 py-5 px-2 w-full bg-mainDark z-[50000] left-0 ${isOpen ? "left-0 backdrop-blur-none  h-[calc(100vh-64px)]" : "h-0 left-[-200vw] backdrop-blur-lg"}`}>
      <MobileLinks setOpen={setOpen}/>
    </div>
  )
}

"use client";
import { useAppSelector } from "@/redux/store/hook";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  data: string[];
  active: number;
  page?: string;
  textStyle?: string;
  style?: string;
  setActive: Dispatch<SetStateAction<number>>;
};

export default function Links2({
  data,
  page,
  setActive,
  style,
  textStyle,
  active,
}: Props) {

  const darkmode = useAppSelector(store => store.darkmode.value)
  

  return (
    <div className={`flex ${darkmode ? "bg-gray-800" : "bg-white"} duration-500 overflow-x-auto rounded-t-md ${style} h-12`}>
      {data?.map((el, key) => (
        <div onClick={() => setActive(key)} key={key} className={` text-nowrap cursor-pointer active:scale-90 px-2 text-10 lg:text-11 duration-500 h-full grid place-content-center border-b-2 ${key === active ? `${darkmode ? 'text-prim border-prim font-semibold' : 'text-secondary border-secondary font-semibold'}` : `${darkmode ? 'border-transparent text-gray-50': 'text-secondary border-transparent'}`}  `}>
          <p className={`${textStyle}`}>{el}</p>
        </div>
      ))}
    </div>
  );
}

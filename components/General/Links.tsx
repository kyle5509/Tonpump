"use client";
import { filter } from "@/redux/reducers/sidebarActions";
import { useAppDispatch, useAppSelector } from "@/redux/store/hook";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
  data: string[];
  active: number;
  page?: string;
  style?: string;
  paddingX?: string
  fontSize?: string;
  height?: string;
  textStyle?: string
  setActive: Dispatch<SetStateAction<number>>;
};

export default function Links({
  data,
  page,
  paddingX,
  setActive,
  style,
  active,
  textStyle,
  height
}: Props) {

  const darkmode = useAppSelector(store => store.darkmode.value)
  
  return (
    <div style={{height: `${height}`}} className={`flex duration-500 ${darkmode ? "bg-gray-800": "bg-white"} rounded-md rounded-b-none overflow-x-auto ${style} h-12`}>
      {data?.map((el, key) => (
        <div onClick={() => setActive(key)} key={key} className={` text-nowrap cursor-pointer active:scale-90 text-13 lg:text-xs duration-500 h-full grid place-content-center ${paddingX} border-b-2 ${key === active ? `${darkmode ? 'text-prim border-prim font-semibold' : 'text-secondary border-secondary font-semibold'}` : `${darkmode ? 'border-transparent text-gray-50': 'text-secondary border-transparent'}`}  `}>
          <p className={`${textStyle}`}>{el}</p>
        </div>
      ))}
    </div>
  );
}

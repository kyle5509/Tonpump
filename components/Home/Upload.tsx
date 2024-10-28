'use client'
import { useEffect, useRef, useState } from "react";

import { FaRegSmile, FaTimes } from "react-icons/fa";
import { IoCalendarOutline, IoImageOutline } from "react-icons/io5";
import { PiGifLight } from "react-icons/pi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaBold, FaItalic } from "react-icons/fa6";

export default function Upload() {

  const [img, setImg] = useState("");
  const [file, setFile] = useState<any>()
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [value, setValue] = useState('')
  const change = (e: any) => {
    setImg(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0])
  };
  const cloud_name = 'dnnacpl85'
  const createPost = async () => {
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', 'CLoudinary')
    data.append('cloud_name', 'dnnacpl85')
    const cloudinary_url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`
    try {
      const response = await fetch(cloudinary_url, {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      const imgUrl = result.url
      return result;
    } catch (error) {
      console.error("Error during fetch:", error);
    }


  }


  return (
    <div className="flex bg-[#313131] shadow border-2 rounded-2xl p-5 gap-2">
      <div className="h-10 w-10 shrink-0 rounded-full border-2"></div>
      <div className="w-full">
        <div className="flex flex-1 flex-col">
          <div className="h-10 mb-5 relative">
            <div className="h-2 w-2 absolute bottom-0 right-0 bg-[#313131]"></div>
            <textarea
              placeholder="Create a hype!"
              name=""
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="h-full text-white appearance-none bg-transparent p-2 outline-none w-full"
            ></textarea>
          </div>
          {!img && (
            <input
              type="file"
              className="hidden"
              ref={inputRef}
              onChange={change}
            />
          )}
          {img && (
            <div className="h-60 w-full relative">
              <div className="h-6 w-6 duration-300 shadow-md hover:scale-105 absolute cursor-pointer z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full bg-white border-white border-2 grid place-content-center">
                <FaTimes onClick={() => setImg("")} className=" text-lg " />
              </div>
              <img
                src={img}
                className="h-full relative z-10 object-cover rounded-xl w-auto"
                alt=""
              />
            </div>
          )}
          <div className="flex items-center mt-3 w-full text-white justify-between">
            <div className="flex text-base items-center gap-4">
              <IoImageOutline
                onClick={() => {
                  inputRef.current?.click();
                }}
                className="cursor-pointer text-lg hover:text-prim duration-300"
              />
              <PiGifLight className="cursor-pointer text-xl hover:text-prim duration-300" />
              <FaRegSmile className="cursor-pointer hover:text-prim duration-300" />
              <IoCalendarOutline className="cursor-pointer hover:text-prim duration-300" />
              <HiOutlineLocationMarker className="cursor-pointer text-lg hover:text-prim duration-300" />
              <div className="h-5 w-[1px] mx-2 bg-white"></div>
              <FaBold className="cursor-pointer hover:text-prim duration-300" />
              <FaItalic className="cursor-pointer hover:text-prim duration-300" />
            </div>
            <p onClick={createPost} className="px-6 hidden sm:block text-black text-sm font-semibold cursor-pointer shadow-md shadow-black hover:scale-105 ml-auto active:scale-100 duration-300 bg-prim py-2 rounded-full">
              Post
            </p>
          </div>
        </div>
        <div className="flex justify-end w-full sm:hidden mt-5">
          <p onClick={createPost} className="px-6 text-black text-13 font-semibold cursor-pointer shadow-md shadow-black hover:scale-105 active:scale-100  duration-300 bg-prim py-2 rounded-full">
            Post
          </p>
        </div>
      </div>
    </div>
  )
}

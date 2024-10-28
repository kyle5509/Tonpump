'use client'
import { FaUserAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import LinkCard from "./LinkCard";
import PostButon from "./PostButon";
import { RxTokens } from "react-icons/rx";
import { LuLayoutGrid } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { TbLayoutGridFilled } from "react-icons/tb";
import { FaUserLarge } from "react-icons/fa6";


export default function Links() {
  const links = [
    {
      icon: <IoHome size={21} />,
      link: '/',
      title: 'Home'
    },
    {
      icon: <TbLayoutGridFilled size={18} style={{rotate: "45deg"}}/>,
      link: '/tokens',
      title: 'All Tokens'
    },
    {
      icon: <FaUserLarge size={18} />,
      link: '/profile',
      title: 'Profile'
    },

  ]

  return (
    <div>
      <div className="flex flex-col p-5 gap-3">
        {links.map((el, key) => (
          <LinkCard icon={el.icon} link={el.link} title={el.title} />
        ))}
        <div className="flex justify-center">
          <PostButon />
        </div>
      </div>
    </div>
  )
}

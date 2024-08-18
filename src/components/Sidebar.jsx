import React from 'react'
import { Link } from "react-router-dom"
import { LuBox } from 'react-icons/lu'
import { MdWindow } from "react-icons/md";
const Sidebar = () => {
  const SIDEBAR_LINK = [
    { id: 1, path: "/", name: "Overview", icon: MdWindow },
    { id: 2, path: "/members", name: "People Directory", icon: MdWindow }
  ]
  return (
    <div className='absolute h-[580px] w-16 mt-[4rem] md:mt-[4.5rem] md:w-56 fixed left-0 top-0 z-10 h-screen boder-r pt-8 px-4 bg-white '>
      <ul className='space-y-4'>
        {
          SIDEBAR_LINK.map((link, index) => (
            <li key={index} className={`font-medium rounded-md py-2 px-5 hover bg-gray-100 hover:text-indigo-500`}>
              <Link to={link.path} className='flex justify-center items-center md:justify-start space-x-5 hover:text-indigo-500'> 
                <span>{link.icon()}</span>
                <span className='text-sm text-gray-500 hidden md:flex hover:text-indigo-500'>{link.name}</span>
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Sidebar 
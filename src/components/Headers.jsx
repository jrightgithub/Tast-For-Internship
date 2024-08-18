import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";
import Img from '../assets/Ellipse 211.png'
const Headers = () => {
  return (
    <div>
      <div className="p-[10px] bg-[rgba(255,252,252,1)] border-b-[1px] border-b-[rgba(0,0,0,0.1)] flex items-center justify-between">
        <p className='font-bold text-indigo-500 text-[20px] md:text-[30px]'>PEOPLE.CO</p>
        <div className='flex items-center gap-[10px]'>
       <IoIosNotificationsOutline className='text-2xl'/>
       <img src={Img} alt="ss" />
       <p><span className='font-medium'>Jane Doe</span></p>
       </div>
      </div>
    </div>
  )
}

export default Headers
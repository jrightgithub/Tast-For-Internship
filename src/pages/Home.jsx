import React from 'react'
import Welcome from '../assets/Welcome.jfif'
const Home = () => {
  return (
   <div className='mt-[10px] mr-[15px] flex items-center justify-center'>
    <div className='shadow-xl w-full p-[20px] bg-white h-[300px] md:h-[500px] max-w-[500px] rounded-md border-[1px]'>
      <img src={Welcome} className='w-full' alt="" />
      <p className='text-center flex items-center justify-center h-[150px] md:h-[300px] font-semibold text-4xl md:text-7xl'>JANE DEO</p>
    </div>
    </div>
  )
}

export default Home
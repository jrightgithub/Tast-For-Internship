import React from 'react'
import Sidebar from './Sidebar'
import Headers from './Headers'
import { Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <>

            <div className='w-full'>
                <Headers />
            </div>
            <Sidebar />
            <div className="ml-[5rem] md:ml-[15rem]">
                <Outlet />
            </div>


        </>
    )
}
export default Layout
import React from 'react'
import SideNav from "../components/SideNav.jsx"
import { Outlet } from 'react-router-dom'


const SharedHomeLayout = () => {
  return (
    <div className='flex'>
        <SideNav />
        <div className='flex-grow'>
            <Outlet />
        </div>
    </div>
  )
}

export default SharedHomeLayout
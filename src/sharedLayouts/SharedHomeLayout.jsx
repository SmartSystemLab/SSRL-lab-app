import React from 'react'
import SideNav from "../components/SideNav.jsx"
import { Outlet } from 'react-router-dom'
import SearchBar from '../components/SearchBar.jsx'


const SharedHomeLayout = () => {
  return (
    <div className='flex min-h-screen gap-4 bg-white'>
      <SideNav />
      <div className='flex-grow flex flex-col p-4 space-y-4 placeholder:text-black shadow-lg'>
        <SearchBar />
        <Outlet />
      </div>
    </div>
  )
}

export default SharedHomeLayout
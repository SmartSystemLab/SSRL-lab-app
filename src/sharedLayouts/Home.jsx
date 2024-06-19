import React from 'react'
import SideNav from '../components/SideNav'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex'>
            <SideNav />
            <div className='flex-grow'>
                <Outlet />
            </div>
        </div>
    )
}

export default Home
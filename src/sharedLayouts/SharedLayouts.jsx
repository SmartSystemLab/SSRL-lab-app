import React from 'react'
import { Outlet } from 'react-router-dom'

const SharedLayouts = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default SharedLayouts
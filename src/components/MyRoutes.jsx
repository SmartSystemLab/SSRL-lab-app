import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Test from './Test'
import SharedLayouts from '../sharedLayouts/SharedLayouts'
import Login from '../pages/Login'
import ResetPassword from '../pages/ResetPassword'
import ForgotPassword from '../pages/ForgotPassword'

const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<SharedLayouts />}>
                    <Route index element={<Login />} />
                    <Route path='/forgotpassword' element={<ForgotPassword />} />
                    <Route path='/resetpassword' element={< ResetPassword />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default MyRoutes
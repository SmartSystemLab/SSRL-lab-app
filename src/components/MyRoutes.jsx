import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SharedLayouts from '../sharedLayouts/SharedLayouts';
import Login from '../pages/Login';
import ResetPassword from '../pages/ResetPassword';
import ForgotPassword from '../pages/ForgotPassword';
import Home from '../pages/Home';

const MyRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/onboarding/*'>
                    <Route index element={<Login />} />
                    <Route path='forgotpassword' element={<ForgotPassword />} />
                    <Route path='resetpassword' element={<ResetPassword />} />
                </Route>

                <Route path='/*' element={<SharedLayouts />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default MyRoutes;
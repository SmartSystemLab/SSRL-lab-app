import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Test from "./Test";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../sharedLayouts/Home.jsx";
import OTP from "../pages/OTP";
import SharedOnboardingLayout from "../sharedLayouts/SharedOnboardingLayout.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Interns from "../pages/Interns.jsx";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedOnboardingLayout />}>
          <Route index element={<Login />} />
          <Route path="forgotPassword" element={<ForgotPassword />} />
          <Route path="sendOTP" element={<OTP />} />
          <Route path="resetPassword" element={<ResetPassword />} />
        </Route>

        <Route path="/home" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="interns" element={<Interns />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/onboarding/Login";
import ResetPassword from "../pages/onboarding/ResetPassword";
import ForgotPassword from "../pages/onboarding/ForgotPassword";
import OTP from "../pages/onboarding/OTP";
import SharedOnboardingLayout from "../sharedLayouts/SharedOnboardingLayout.jsx";
import Dashboard from "../pages/dashboard/Dashboard";
import Interns from "../pages/interns/Interns";
import Projects from "../pages/Projects/Projects";
import Calendar from "../pages/Calendar/Calendar";
import TeamChat from "../pages/TeamChat/TeamChat";
import Attendance from "../pages/Attendance/Attendance";
import Settings from "../pages/Settings/Settings";
import SharedHomeLayout from "../sharedLayouts/SharedHomeLayout.jsx";

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

        <Route path="/home" element={<SharedHomeLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="home/interns" element={<Interns />} />
          <Route path="home/projects" element={<Projects />} />
          <Route path="home/calendar" element={<Calendar />} />
          <Route path="home/team-chat" element={<TeamChat />} />
          <Route path="home/attendance" element={<Attendance />} />
          <Route path="home/settings" element={< Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;;

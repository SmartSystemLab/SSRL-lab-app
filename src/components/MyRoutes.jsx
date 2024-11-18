import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/onboarding/Login";
import ResetPassword from "../pages/onboarding/ResetPassword";
import ForgotPassword from "../pages/onboarding/ForgotPassword";
import OTP from "../pages/onboarding/OTP";
import SharedOnboardingLayout from "../sharedLayouts/SharedOnboardingLayout.jsx";
import Dashboard from "../pages/dashboard/Dashboard";
import Personnel from "../pages/Personnel/Personnel.jsx";
import Projects from "../pages/Projects/Projects";
import Todo from "../pages/Todo/Todo.jsx";
import TeamChat from "../pages/TeamChat/TeamChat";
import Submissions from "../pages/Submissions/Submissions.jsx";
import Settings from "../pages/Settings/Settings";
import SharedHomeLayout from "../sharedLayouts/SharedHomeLayout.jsx";
import Notifications from "../pages/Settings/Notifications.jsx";

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

        <Route path="/home/" element={<SharedHomeLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="personnel" element={<Personnel />} />
          <Route path="projects" element={<Projects />} />
          <Route path="teamchat" element={<TeamChat />} />
          <Route path="to-do" element={<Todo />} />
          <Route path="submissions" element={<Submissions />} />
          <Route path="settings/" element={<Settings />} />
          <Route path="notifications" element={<Notifications />} />



        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;

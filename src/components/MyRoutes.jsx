import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SharedOnboardingLayout from "../sharedLayouts/SharedOnboardingLayout.jsx";
import Login from "../pages/onboarding/Login";
import ResetPassword from "../pages/onboarding/ResetPassword";
import ForgotPassword from "../pages/onboarding/ForgotPassword";
import OTP from "../pages/onboarding/OTP";

import SharedHomeLayout from "../sharedLayouts/SharedHomeLayout.jsx";

import Dashboard from "../pages/dashboard/Dashboard";
import Notifications from "../pages/dashboard/Notifications.jsx";
import Userprofile from "../pages/dashboard/Userprofile.jsx"
import NotificationCard from "../pages/dashboard/NotificationCard.jsx";

import Personnel from "../pages/Personnel/Personnel.jsx";
import Registration from "../pages/Personnel/Registration.jsx"
import ProfileCard from "../pages/Personnel/ProfileCard.jsx"

import Projects from "../pages/Projects/Projects.jsx";
import ProjectCard from "../pages/Projects/ProjectCard.jsx"

import Todo from "../pages/Todo/Todo.jsx";
import TeamChat from "../pages/TeamChat/TeamChat";
import Submissions from "../pages/Submissions/Submissions.jsx";
import Settings from "../pages/Settings/Settings";

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

          <Route path="dashboard">
            <Route index element={<Dashboard />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path='notifications/:id' element={<NotificationCard />} />
            <Route path="user-profile" element={<Userprofile />} />
          </Route>

          <Route path="personnel"  >
            <Route index element={<Personnel />} />
            <Route path="registration" element={<Registration />} />
            <Route path="profile/:id" element={<ProfileCard />} />
          </Route>

          <Route path="projects"  >
            <Route index element={<Projects />} />
            <Route path=':id' element={<ProjectCard />} />
          </Route>

          <Route path="teamchat" element={<TeamChat />} />
          <Route path="to-do" element={<Todo />} />
          <Route path="submissions" element={<Submissions />} />
          <Route path="settings" element={<Settings />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SharedOnboardingLayout from "../sharedLayouts/SharedOnboardingLayout.jsx";
import Login from "../pages/onboarding/Login";
import ResetPassword from "../pages/onboarding/ResetPassword";
import ForgotPassword from "../pages/onboarding/ForgotPassword";
import OTP from "../pages/onboarding/OTP";

import SharedHomeLayout from "../sharedLayouts/SharedHomeLayout.jsx";

import Dashboard from "../pages/dashboard/Dashboard";
import Notifications from "../pages/dashboard/Notifications.jsx";
import Userprofile from "../pages/dashboard/Userprofile.jsx";
import NotificationCard from "../pages/dashboard/NotificationCard.jsx";

import Personnel from "../pages/Personnel/pages/Personnel.jsx";
import Registration from "../pages/Personnel/pages/Registration.jsx";
import ProfileCard from "../pages/Personnel/component/ProfileCard.jsx";

import Projects from "../pages/Projects/pages/Projects.jsx";
import SingleProject from "../pages/Projects/pages/SingleProject.jsx";
import CreateProject from "../pages/Projects/pages/CreateProject.jsx";
import EditProject from "../pages/Projects/pages/EditProject.jsx"
import Announcement from "../pages/Projects/pages/Announcement.jsx"

import Todo from "../pages/Todo/Todo.jsx";
import TeamChat from "../pages/TeamChat/TeamChat";
import Settings from "../pages/Settings/Settings";
import ProfileCard from "../pages/Personnel/component/ProfileCard.jsx";
import Reports from "../pages/reports/Reports.jsx";
import Requests from "../pages/requests/Requests.jsx";

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
            <Route path="notifications/:id" element={<NotificationCard />} />
            <Route path="user-profile" element={<Userprofile />} />
          </Route>

          <Route path="personnel">
            <Route index element={<Personnel />} />
            <Route path="registration" element={<Registration />} />
            <Route path="profile/:id" element={<ProfileCard />} />
          </Route>

          <Route path="projects">
            <Route index element={<Projects />} />
            <Route path=":id" element={<SingleProject />} />
            <Route path="create" element={<CreateProject />} />
            <Route path="edit" element={<EditProject />} />
            <Route path="announcement" element={<Announcement />} />

          </Route>

          <Route path="teamchat" element={<TeamChat />} />
          <Route path="to-do" element={<Todo />} />
          <Route path="reports" element={<Reports />} />
          <Route path="requests" element={<Requests />} />
          <Route path="settings" element={<Settings />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;

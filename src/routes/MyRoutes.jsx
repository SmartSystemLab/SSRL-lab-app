import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SharedOnboardingLayout from "./SharedOnboardingLayout.jsx";
import Login from "../pages/onboarding/pages/Login.jsx";
import ResetPassword from "../pages/onboarding/pages/ResetPassword.jsx";
import ForgotPassword from "../pages/onboarding/pages/ForgotPassword.jsx";
import OTP from "../pages/onboarding/pages/OTP.jsx";

import SharedHomeLayout from "./SharedHomeLayout.jsx";

import Dashboard from "../pages/dashboard/pages/Dashboard.jsx";
import Notifications from "../pages/dashboard/pages/Notifications.jsx";
import SingleNotification from "../pages/dashboard/pages/SingleNotification.jsx";
// import Userprofile from "../pages/dashboard/Userprofile.jsx";
// import NotificationCard from "../pages/dashboard/Notifications.jsx";

import Personnel from "../pages/Personnel/pages/Personnel.jsx";
import Registration from "../pages/Personnel/pages/Registration.jsx";
import Profile from "../pages/Personnel/pages/Profile.jsx";
import EditPersonnel from "../pages/Personnel/pages/EditPersonnel.jsx";

import Projects from "../pages/Projects/pages/Projects.jsx";
import SingleProject from "../pages/Projects/pages/SingleProject.jsx";
import CreateProject from "../pages/Projects/pages/CreateProject.jsx";
import EditProject from "../pages/Projects/pages/EditProject.jsx"
import Announcement from "../pages/Projects/pages/Announcement.jsx"
import Feedback from "../pages/Projects/pages/Feedback.jsx"

import Requests from "../pages/requests/pages/Requests.jsx";
import SingleRequests from "../pages/requests/pages/SingleRequests.jsx"
import CreateRequest from "../pages/requests/pages/CreateRequest.jsx"
import PreviewRequest from "../pages/requests/pages/PreviewRequest.jsx"

import Todo from "../pages/Todo/Todo.jsx";
import TeamChat from "../pages/TeamChat/TeamChat.jsx";
import Settings from "../pages/Settings/Settings.jsx";

import Reports from "../pages/reports/pages/Reports.jsx";
import CreateReport from "../pages/reports/pages/CreateReport.jsx";
import ViewReport from "../pages/reports/pages/ViewReport.jsx";
import PreviewReport from "../pages/reports/pages/PreviewReport.jsx"
import Feedbacks from "../pages/Projects/pages/Feedbacks.jsx";

import Attendance from "../pages/Attendance/Attendance.jsx"

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
            <Route path="notifications/:id" element={<SingleNotification />} />
          </Route>

          <Route path="personnel">
            <Route index element={<Personnel />} />
            <Route path="registration" element={<Registration />} />
            <Route path="profile/:id" element={<Profile />} />
            <Route path="edit/:id" element={<EditPersonnel />} />
          </Route>

          <Route path="projects">
            <Route index element={<Projects />} />
            <Route path=":id" element={<SingleProject />} />
            <Route path="create" element={<CreateProject />} />
            <Route path="edit/:id" element={<EditProject />} />
            <Route path="announcement/:id" element={<Announcement />} />
            <Route path="give_feedback/:id" element={<Feedback />} />
            <Route path=":id/feedback" element={<Feedbacks />} />
          </Route>

          <Route path="requests">
            <Route index element={<Requests />} />
            <Route path=":id" element={<SingleRequests />} />
            <Route path="create" element={<CreateRequest />} />
            <Route path="preview-request" element={< PreviewRequest />} />
          </Route>

          <Route path="reports" >
            <Route index element={<Reports />} />
            <Route path=":id" element={<ViewReport />} />
            <Route path="create" element={<CreateReport />} />
            <Route path="preview-report" element={<PreviewReport />} />
            <Route path=":id/feedback" element={<Feedbacks />} />
          </Route>

          <Route path="settings" element={<Settings />} />
          <Route path="teamchat" element={<TeamChat />} />
          <Route path="to-do" element={<Todo />} />
          <Route path="attendance" element={<Attendance />} />

        </Route>
      </Routes>
    </Router>
  );
};

export default MyRoutes;

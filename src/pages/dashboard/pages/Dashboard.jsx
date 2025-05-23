import { useState, useEffect, useCallback } from "react";
import { useRequest } from "@hooks/useRequest";
import { useUserData } from "../../../context/UserContext";
import { setSessionStorage } from "../../../utils/getSessionStorage";
import Welcome from "../components/Welcome";
import Projects from "../components/Projects";
import Reports from "../components/Reports";
import Requests from "../components/Requests";
import Todo from "../components/Todo";
import Notifications from "../components/Notifications";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [projects, setProjects] = useState([]);
  const [reports, setReports] = useState([]);
  const [requests, setRequests] = useState([]);
  const [todos, setTodos] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [
    sendProfileRequest,
    profileLoading,
    setProfileLoading,
    profileError,
    setProfileError,
  ] = useRequest();

  const { userId, setUnread } = useUserData();

  const getProfile = useCallback(async () => {
    setProfileLoading(true);
    const res = await sendProfileRequest("personnel/home");

    const data = await res.json();
    if (res.ok) {
      if (data) {
        const {
          firstname,
          user_role,
          notifications,
          projects,
          reports,
          requests,
          stack,
          todos,
          unread
        } = data;
        setSessionStorage("userRole", user_role);
        setSessionStorage("userStack", stack);
        setName(firstname);
        setNotifications(notifications);
        setProjects(projects);
        setReports(reports);
        setRequests(requests);
        setTodos(todos);
        setUnread(unread)
      }
      console.log(data);
    } else {
      setProfileError({ status: "true", msg: data.message });
    }
    setProfileLoading(false);
  }, [setProfileLoading, setProfileError, setUnread, sendProfileRequest]);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  // set the date

  return (
    <div className="p-2 fromLeft">
      {profileError.status && (
        <p className="text-red-500">
          Couldn&apos;t load your dashboard. {profileError.msg} <span className="hover:underline cursor-pointer" onClick={getProfile}>Retry?</span>
        </p>
      )}
      <div className="flex w-full flex-col items-center justify-start gap-10 overflow-y-auto md:flex-row md:items-start ">
        <div className="w-2/3 min-w-[370px] space-y-6 px-6 py-2 md:w-1/2 lg:w-2/5 ">
          <Welcome name={name} />
          <Projects projects={projects} />
          <Reports reports={reports} userId={userId} />
          <Requests requests={requests} userId={userId} />
        </div>
        <div className="flex-grow py-2">
          <Notifications notifications={notifications} setNotifications={setNotifications} />
          <Todo todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

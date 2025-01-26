import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dashboxes from "../../components/Dashboxes";

// import Write from '../../assets/Write.svg'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { useRequest } from "../../Modules/useRequest";
import { useUserData } from "../../Modules/UserContext";
import { BiArrowToTop } from "react-icons/bi";
import { setSessionStorage } from "../../Modules/getSessionStorage";
import { X } from "lucide-react";
import { ArrowBigDown } from "lucide-react";
import { ArrowDown } from "lucide-react";
import { ArrowUp } from "lucide-react";
import { Dot } from "lucide-react";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState()
  const [projects, setProjects] = useState([]);
  const [reports, setReports] = useState([]);
  const [requests, setRequests] = useState([]);
  const [todos, setTodos] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [
    sendProfileRequest,
    profileLoading,
    setProfileLoading,
    profileError,
    setProfileError,
  ] = useRequest();

  const { userId } = useUserData();

  const getProfile = async () => {
    setProfileLoading(true);
    const res = await sendProfileRequest("home");

    console.log(res);
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
        } = data;
        setSessionStorage("userRole", user_role);
        setSessionStorage("userStack", stack);
        setName(firstname);
        setNotifications(notifications);
        setProjects(projects);
        setReports(reports);
        setRequests(requests);
      }
      console.log(data);
    } else {
      setProfileError({ status: "true", msg: data.message });
    }
    setProfileLoading(false);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const dismissNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification._id !== id),
    );
  };

  // set the date
  const today = new Date();
  const getOrdinalSuffix = (day) => {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const year = today.getFullYear();
  const formattedDate = `${day}${getOrdinalSuffix(day)}, ${month} ${year}`;

  return (
    <div className="p-2">
      {profileError.status && (
        <p className="text-red-500">
          Couldn&apos;t load your dashboard. {profileError.msg}
        </p>
      )}
      <div className="flex w-full flex-col items-center justify-start gap-10 overflow-y-auto md:flex-row md:items-start">
        <div className="w-2/3 min-w-[370px] space-y-6 px-6 py-2 md:w-1/2 lg:w-2/5">
          <div className="border-1 space-y-2 rounded-2xl bg-white p-6 text-left shadow-lg border">
            <h2 className="text-xl font-semibold text-navBg2 md:text-2xl lg:text-3xl">
              Welcome {name || "Intern"}!
            </h2>
            <p className="text-xl font-normal text-navBg2">{formattedDate}</p>
            <p className="text-lg font-bold text-[#357932]">
              Let&apos;s do the best today
            </p>
          </div>
          {/* projects */}
          {/*Tofunmi, pls work on this such that the Dashboxes will display No items for all it's instances when there is no content to be displayed. However, note that the structure of the projects, requests and reports e.t.c are different and so they have different implementations and that's why I had to bring them out as children. Kindly find a workaround. */}
          <Dashboxes header="Projects" nav="projects">
            <ul className="">
              {projects.length > 0 ? (
                projects.map((project) => {
                  const { _id, name, project_type, description, status} = project
                  return (
                    <Link
                      key={_id}
                      to={`/home/projects/${_id}`}
                      state={project}
                    >
                      <div className="my-2 rounded-lg border p-2 hover:bg-navBg1">
                        <div className="flex items-center justify-between">
                          <li className="fade-in text-base text-navBg2 truncate">
                            {name}
                          </li>
                          {<Dot size={36} color={ status == "Completed" ? "green" : "red" } />}
                        </div>
                        <li className="truncate text-xs">
                          {description}
                        </li>
                      </div>
                    </Link>
                  );
                })
              ) : (
                // Work on skeletons. They will only show loading states of the contents when it's fetching from the backend. I'll work on that.
                <div className="space-y-2">
                  <p>No items...</p>
                </div>
              )}
            </ul>
          </Dashboxes>

          {/* reports */}
          <Dashboxes header="Reports" boxData={reports} nav="reports">
            <ul>
              {reports.length > 0 ? (
                reports.map((report) => {
                  const {_id, title, report_type, sender} = report
                  return (
                    <Link key={_id}>
                      <div className="my-2 rounded-lg border p-2 hover:bg-navBg1">
                        <p className="text-navBg2 truncate">{title}</p>
                        <div className="flex items-center gap-4">
                          <span>
                            {userId == sender ? (
                              <ArrowDown
                                className="text-logo"
                              />
                            ) : (
                                <ArrowUp
                                  className="text-logo"
                              />
                            )}
                          </span>
                          <p className="text-xs capitalize">{report_type}</p>
                        </div>
                      </div>
                    </Link>
                  );
                })
              ) : (
                <div className="space-y-2">
                  <p>No items...</p>
                </div>
              )}
            </ul>
          </Dashboxes>

          {/* requests */}
          <Dashboxes header="Requests" nav="requests">
            <ul className="">
              {requests.length > 0 ? 
                requests.map((request) => { 
                  const { _id, title, sender, type, status } = request
                  
                  return (
                    <li
                      key={_id}
                      className="my-2 rounded-lg border p-2 hover:bg-navBg1"
                    >
                      <p className="fade-in truncate text-base text-navBg2">
                        {title}
                      </p>
                      <div className="flex items-center gap-4">
                        <span>
                          {userId == sender ? (
                            <ArrowDown
                              color={status == "Pending" ? "red" : "green"}
                            />
                          ) : (
                            <ArrowUp
                              color={status == "Pending" ? "red" : "green"}
                            />
                          )}
                        </span>
                        <li className="capitalize">{type}</li>
                      </div>
                    </li>
                  );
                  
                }
              ) : (
                // Work on skeletons
                <div className="space-y-2">
                  <p>No items...</p>
                </div>
              )}
            </ul>
          </Dashboxes>
        </div>
        <div className="flex-grow py-2">
          {/* to dos */}
          <div className="w-full rounded-2xl border p-6 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold">To-do list</h2>
            <div className="mb-4 flex space-x-2">
              <input
                type="text"
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-navBg2"
                placeholder="Enter a new task"
              />
              <button className="rounded-lg border bg-navBg2 px-4 py-2 font-medium text-white">
                Create
              </button>
            </div>
            <ul className="space-y-2">
              {todos.length > 0 ? (
                todos.map((todo) => (
                  <li
                    key={todo.id}
                    className="flex items-center justify-between rounded-md bg-gray-100 px-4 py-2"
                  >
                    {" "}
                    <div className="flex justify-center gap-2">
                      <input
                        type="checkbox"
                        // checked
                        // onChange={}
                        className="mr-3"
                      />
                      <span>{todo.task}</span>
                    </div>
                    <button className="text-red-500 hover:text-red-700">
                      {" "}
                      <RiDeleteBin6Line />
                    </button>
                  </li>
                ))
              ) : (
                <p>Loading to-do items...</p>
              )}
            </ul>
            <Link
              to={`/home/to-do`}
              className="block rounded p-2 text-right text-base font-medium text-logo transition-all duration-300 ease-in hover:text-navBg1"
            >
              See All
            </Link>
          </div>
          {/* notifications */}
          {/*Let's add a dot that shows whether the notification has been read or not, based on the status. The dot will only be there if the notification isn't read. */}
          <h2 className="text mt-6 text-lg font-bold">Notifications</h2>
          <div className="h-full rounded-2xl bg-navBg2 p-4 text-white shadow-md">
            <ul className="space-y-2 text-sm">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <li
                    key={notification._id}
                    className="flex items-end justify-between gap-4 border-b border-slate-300 px-2 py-4"
                  >
                    <p>{notification.message}</p>
                    <p></p>{" "}
                    {/*Add date and time using the sent_at property in the notification object */}
                    <button
                      onClick={() => dismissNotification(notification._id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      {/* <MdClose /> */}
                      <X
                        color="red"
                        className="rounded-full bg-white p-1 transition-all duration-100 ease-in hover:translate-y-1"
                        size={20}
                      />
                    </button>
                  </li>
                ))
              ) : (
                <p>No notifications</p>
              )}
            </ul>
            <Link
              to={`/home/dashboard/notifications`}
              className="mt-6 block w-fit rounded-full bg-logo px-3 py-1 text-right text-sm font-medium text-white transition-all duration-100 ease-in hover:scale-105"
            >
              See All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

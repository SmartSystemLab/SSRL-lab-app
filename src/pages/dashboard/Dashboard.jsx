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

const Dashboard = () => {
  const [name, setName] = useState("");
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

  const { userProfile } = useUserData();

  const getProfile = async () => {
    setProfileLoading(true);
    const res = await sendProfileRequest("home");

    console.log(res)
    const data = await res.json();
    if (res.ok) {
      if (data) {
        const { firstname, user_role, notifications, projects, reports, requests, stack } = data;
        setSessionStorage("userRole", user_role)
        setSessionStorage("userStack", stack)
        setName(firstname);
        setNotifications(notifications);
        setProjects(projects);
        // setReports(reports)
        setRequests(requests);
      }
      console.log(data);
    } else {
      setProfileError({ status: "true", msg: data.message });
    }
    setProfileLoading(false);
  };

  useEffect(() => {
    // getProfile();
  }, []);

  const dismissNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification._id !== id)
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
      {profileError.status && <p className="text-red-500">Couldn&apos;t load your dashboard. {profileError.msg}</p>}
      <div className="flex flex-col md:flex-row gap-10 justify-start md:items-start items-center w-full overflow-y-auto">
        <div className="space-y-6 py-2 px-6 min-w-[370px] lg:w-2/5 md:w-1/2 w-2/3">
          <div className="space-y-2 bg-white shadow-lg border-1 p-6 rounded-2xl text-left">
            <h2 className=" text-navBg2 font-semibold text-xl md:text-2xl lg:text-3xl">
              Welcome {name || "Intern"}!
            </h2>
            <p className=" text-navBg2 text-xl font-normal">{formattedDate}</p>
            <p className=" text-[#357932] text-lg font-bold">
              Let&apos;s do the best today
            </p>
          </div>
          {/* projects */}
          {/*Tofunmi, pls work on this such that the Dashboxes will display No items for all it's instances when there is no content to be displayed. However, note that the structure of the projects, requests and reports e.t.c are different and so they have different implementations and that's why I had to bring them out as children. Kindly find a workaround. */}
          <Dashboxes header="Projects" nav="projects">
            <ul className="">
              {projects.length > 0 ? (
                projects.map((data) => (
                  <div key={data._id} className="my-2 border rounded-lg p-2">
                    <li className="text-navBg2 text-base fade-in">{data.name}</li>
                    <li className="text-xs truncate">{data.description}</li>
                  </div>
                ))
              ) : (
                // Work on skeletons. They will only show loading states of the contents when it's fetching from the backend. I'll work on that.
                <div className="space-y-2 ">
                  <p>No items...</p>
                </div>
              )}
            </ul>
          </Dashboxes>
          {/* reports */}
          <Dashboxes header="Reports" boxData={reports} nav="submissions" />
          {/* requests */}
          <Dashboxes header="Requests" nav="submissions">
            <ul className="">
              {requests.length > 0 ? (
                requests.map((data) => (
                  <div key={data._id} className="my-2 border rounded-lg p-2">
                    <li className="text-navBg2 text-base fade-in truncate">
                      {data.title}
                    </li>
                    <div className="flex items-center gap-4">
                      <li>
                        <BiArrowToTop size={32} />
                      </li>{" "}
                      {/* Tofunmi, kindly change this such that it shows a down arrow if the receiver is the current user or a up arrow if the sender is the current user. The color of the arrow will depend on the status of the request*/}
                      <li className="capitalize">{data.type}</li>
                    </div>
                  </div>
                ))
              ) : (
                // Work on skeletons
                <div className="space-y-2 ">
                  <p>No items...</p>
                </div>
              )}
            </ul>
          </Dashboxes>
        </div>
        <div className="py-2 flex-grow">
          {/* to dos */}
          <div className="w-full border-2 p-2 shadow-md rounded-md">
            <h2 className="text-2xl font-bold text-center mb-2">To-do list</h2>
            <div className="flex space-x-2 mb-4">
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter a new task"
              />
              <button className="px-4 py-2 bg text-black bg-navBg1 rounded border font-medium">
                Create
              </button>
            </div>
            <ul className="space-y-2">
              {todos.length > 0 ? (
                todos.map((todo) => (
                  <li
                    key={todo.id}
                    className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-md"
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
              className=" text-logo block text-base text-right p-2 rounded font-medium  hover:text-navBg1 transition-all duration-300 ease-in"
            >
              See All
            </Link>
          </div>
          {/* notifications */}
          {/*Let's add a dot that shows whether the notification has been read or not, based on the status. The dot will only be there if the notification isn't read. */}
          <h2 className="text-lg font-bold text mt-6">Notifications</h2>
          <div className="p-4 shadow-md rounded-2xl bg-navBg2 text-white h-full">
            <ul className="space-y-2 text-sm ">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <li
                    key={notification._id}
                    className="flex justify-between items-end px-2 py-4 gap-4 border-b border-slate-300 "
                  >
                    <p>{notification.message}</p>
                    <p></p> {/*Add date and time using the sent_at property in the notification object */}
                    <button
                      onClick={() => dismissNotification(notification._id)}
                      className="text-red-500 hover:text-red-700 "
                    >
                      {/* <MdClose /> */}
                      <X color="red" className="bg-white rounded-full p-1 hover:translate-y-1 transition-all duration-100 ease-in" size={20} />
                    </button>
                  </li>
                ))
              ) : (
                <p>No notifications</p>
              )}
            </ul>
            <Link
              to={`/home/dashboard/notifications`}
              className=" bg-logo block text-white w-fit rounded-full text-right px-3 py-1 text-sm font-medium hover:scale-105 transition-all duration-100 ease-in mt-6"
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

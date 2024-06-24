import React from "react";
import { NavLink } from "react-router-dom";
import Dashboard from "../assets/Dashboard.svg";
import Attendance from "../assets/Attendance.svg";
import Calendar from "../assets/Calendar.svg";
import Interns from "../assets/Interns.svg";
import Projects from "../assets/Projects.svg";
import Settings from "../assets/Settings.svg";
import TeamChat from "../assets/TeamChat.svg";
import LogOut from "../assets/LogOut.svg";

const navData = [
  { img: Dashboard, text: "Dashboard", id: 1 },
  { img: Interns, text: "Interns", id: 2 },
  { img: Projects, text: "Projects", id: 3 },
  { img: Calendar, text: "Calender", id: 4 },
  { img: TeamChat, text: "Team Chat", id: 5 },
  { img: Attendance, text: "Attendance", id: 6 },
  { img: Settings, text: "Settings", id: 7 },
];

const SideNav = () => {
  return (
    <div className="relative min-h-screen w-60 text-white bg-navBg2 flex justify-center items-center gap-7 rounded-r-3xl">
      {/* Logo and Title Section */}
      {/* <div className="flex items-center justify-end p-6 space-x-2 absolute top-0 right-0">
        <img src="/vite.svg" alt="Small Logo" className="w-9 h-9 rounded-md" />
        <h2 className="text-xl font-bold text-logo tracking-wider">SSRL</h2>
      </div> */}

      {/* Navigation Links */}
      <div className="w-1/4 flex items-center bg-navBg1 min-h-screen rounded-r-3xl justify-center">
        <div className="flex flex-col w-[90%] items-center">
          {navData.map((eachNav) => {
            const { img, text } = eachNav;
            let to = text.toLowerCase();
            if (text === "Dashboard") to = "/home";
            if (text === "Team Chat") to = "teamchat";
            return (
                <NavLink
                  to={to}
                  end={text === "Dashboard"}
                  className={({ isActive }) => isActive && "activeImg" }
                >
                  <img src={img} alt={text} className="h-[40px] my-4" />
                </NavLink>
            );
          })}
        </div>
        {/* <NavLink to="/home" end>
          <img src={Dashboard} alt="dashboard" className="w-6 h-6" />
        </NavLink>
        <NavLink to="interns">
          <img src={Interns} alt="interns" className="w-6 h-6" />
        </NavLink>
        <NavLink to="projects">
          <img src={Projects} alt="projects" className="w-6 h-6" />
        </NavLink>
        <NavLink to="calendar">
          <img src={Calendar} alt="calendar" className="w-6 h-6" />
        </NavLink>
        <NavLink to="team-chat">
          <img src={TeamChat} alt="team chat" className="w-6 h-6" />
        </NavLink>
        <NavLink to="attendance">
          <img src={Attendance} alt="attendance" className="w-6 h-6" />
        </NavLink>
        <NavLink to="settings">
          <img src={Settings} alt="settings" className="w-6 h-6" />
        </NavLink> */}
      </div>

      <div className="w-3/4 flex flex-col py-4 px-0 space-y-5 justify-center min-h-screen ">
        <div className="flex flex-col w-full">
          {navData.map((eachNav) => {
            const { text } = eachNav;
            let to = text.toLowerCase();
            if (text === "Dashboard") to = "/home";
            if (text === "Team Chat") to = "teamchat";
            return (
                <NavLink
                  to={to}
                  end={text === "Dashboard"}
                  className={({ isActive }) =>
                    [
                      isActive && "activeText",
                      "w-full",
                      "p-2",
                      "block",
                      "my-4",
                    ].join(" ")
                  }
                >
                  <span>{text}</span>
                </NavLink>
            );
          })}
        </div>

        {/* <NavLink to="/home" className="w-full p-2" end>
          Dashboard
        </NavLink>
        <NavLink to="interns" className="w-full p-2">
          Interns
        </NavLink>
        <NavLink to="projects" className="w-full p-2">
          Projects
        </NavLink>
        <NavLink to="calendar" className="w-full p-2">
          Calendar
        </NavLink>
        <NavLink to="team-chat" className="w-full p-2">
          Team Chat
        </NavLink>
        <NavLink to="attendance" className="w-full p-2">
          Attendance
        </NavLink>
        <NavLink to="settings" className="w-full p-2">
          Settings
        </NavLink> */}
      </div>

      {/* Log out Button */}
      {/* <div className="p-4 absolute bottom-0 right-0">
        <button className="text-logo p-6 font-semibold  text-base flex items-center gap-2">
          <img src={LogOut} className="w-6 h-6" /> Log out
        </button>
      </div> */}
    </div>
  );
};

export default SideNav;
`    Z`;

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
  { img: Interns, text: "Personnel", id: 2 },
  { img: Projects, text: "Projects", id: 3 },
  { img: Calendar, text: "To-do", id: 4 },
  { img: TeamChat, text: "Team Chat", id: 5 },
  { img: Attendance, text: "Submissions", id: 6 },
  { img: Settings, text: "Settings", id: 7 },
];

const SideNav = () => {
  return (
    <div className="bg-navBg2 text-white min-h-screen py-4 pr-0 pl-2 rounded-r-3xl w-64 max-w-[20rem] flex flex-col">
      {/* Logo Section */}
      <div className="flex justify-end items-center gap-3 py-4 px-6 mt-2 mb-4">
        <img src="/vite.svg" alt="Logo" className="w-8 h-8 rounded-md" />
        <h2 className="text-base md:text-2xl font-bold text-logo tracking-wider whitespace-nowrap">SSRL</h2>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 space-y-3 ml-3 px-0 py-4 text-white ">
        {navData.map(({ img, text }) => {
          let to = text.toLowerCase();
          if (text === "Dashboard") to = "/home/dashboard";
          if (text === "Team Chat") to = "teamchat";

          return (
            <NavLink
              to={to}
              end={text !== "Dashboard"}
              className={({ isActive }) =>
                [
                  isActive ? "activeText activeImg" : "hover:bg-navBg1",
                  "flex items-center gap-3 p-3 rounded-md transition-all duration-200",
                ].join(" ")
              }
              key={text}
            >
              {({ isActive }) => (
                <>
                  <img
                    src={img}
                    alt={text}
                    className={`w-6 h-6 transition-all duration-200 ease-out ${isActive ? 'brightness-0' : ''
                      }`}
                  />
                  <span className="text-sm md:text-base">{text}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>

      {/* Logout Button */}
      <div className="flex justify-end items-center py-4 px-2 mt-auto">
        <button className="flex items-center gap-3 text-logo font-semibold p-2 md:p-3 rounded-md hover:bg-navBg1 transition-colors">
          <img src={LogOut} alt="Log Out" className="w-5 h-5 md:w-6 md:h-6" />
          <span className="text-sm md:text-base">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default SideNav;

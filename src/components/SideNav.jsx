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
import { FaXmark } from "react-icons/fa6";
import SearchBar from '../components/SearchBar.jsx'



const navData = [
  { img: Dashboard, text: "Dashboard", path: "/home/dashboard", id: 1 },
  { img: Interns, text: "Personnel", path: "/home/personnel", id: 2 },
  { img: Projects, text: "Projects", path: "/home/projects", id: 3 },
  { img: Calendar, text: "To-do", path: "/home/to-do", id: 4 },
  { img: TeamChat, text: "Team Chat", path: "/home/teamchat", id: 5 },
  { img: Attendance, text: "Submissions", path: "/home/submissions", id: 6 },
  { img: Settings, text: "Settings", path: "/home/settings", id: 7 },
];

const SideNav = ({ toggleSideNav, isSideNavOpen }) => {
  return (
    <div className={`relative bg-navBg2 text-white min-h-screen py-4 pr-0 pl-2 rounded-r-3xl w-64 max-w-[20rem] flex flex-col`}>
      {/* Logo Section */}
      <div className="flex justify-end items-center gap-3 py-4 px-6 mt-2 mb-4 ">
        <img src="/vite.svg" alt="Logo" className="w-8 h-8 rounded-md text-lg" />
        <h2 className="text-base md:text-2xl font-bold text-logo tracking-wider whitespace-nowrap nav-text">SSRL</h2>
      </div>

      <div className='text-logo lg:hidden absolute top-4 left-4'>
        <button onClick={toggleSideNav} className='cursor-pointer'>
          {
            isSideNavOpen && <FaXmark className='w-5 h-5' />
          }
        </button>
      </div>

      <div className="lg:hidden block px-2">
        <SearchBar />
      </div>

      {/* Navigation Links */}
      <div className="flex-1 space-y-3 ml-3 px-0 py-4 text-white">
        {navData.map(({ img, text, path }) => (
          <NavLink
            to={path}
            className={({ isActive }) =>
              [
                isActive ? "activeText activeImg" : "hover:bg-navBg1",
                "flex items-center gap-3 p-3 rounded-md transition-colors duration-200",
              ].join(" ")
            }
            key={text}
          >
            {({ isActive }) => (
              <>
                <img
                  src={img}
                  alt={text}
                  className={`w-6 h-6 transition-all duration-100 ease-in ${isActive ? "brightness-0" : ""
                    }`}
                />
                <span
                  className={`text-sm md:text-base ${isActive ? "font-bold" : ""
                    }`}
                >
                  {text}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Logout Button */}
      <div className="flex justify-end items-center py-4 px-2 mt-auto">
        <button className="flex items-center gap-3 text-logo font-semibold p-2 md:p-3 rounded-md hover:bg-navBg1 transition-colors">
          <img src={LogOut} alt="Log Out" className="w-5 h-5 md:w-6 md:h-6" />
          <span className="text-sm md:text-base ">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default SideNav;

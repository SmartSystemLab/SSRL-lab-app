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

const navData = [
  { img: Dashboard, text: "Dashboard", id: 1 },
  { img: Interns, text: "Personnel", id: 2 },
  { img: Projects, text: "Projects", id: 3 },
  { img: Calendar, text: "To-do", id: 4 },
  { img: TeamChat, text: "Team Chat", id: 5 },
  { img: Attendance, text: "Submissions", id: 6 },
  { img: Settings, text: "Settings", id: 7 },
];

const SideNav = ({ toggleSideNav, isSideNavOpen }) => {
  return (

    <div>
      <div className="relative text-white bg-navBg2 flex justify-center items-center gap-7 rounded-r-3xl" >

        {/* Logo and Title Section */}
        <div className="flex items-center justify-end p-6 space-x-2 absolute top-4 right-0">
          <img src="/vite.svg" alt="Small Logo" className="w-9 h-9 rounded-md" />
          <h2 className="text-xl font-bold text-logo tracking-wider">SSRL</h2>
        </div>

        {isSideNavOpen && (<button
          onClick={toggleSideNav}
          className="absolute top-4 left-0 text-logo p-4 rounded-md z-50 cursor-pointer"
        >
          <FaXmark className="w-5 h-5" />
        </button>)}


        {/* Navigation Links */}
        <div className="w-1/4 flex items-center bg-navBg1 min-h-screen rounded-r-3xl justify-center h-full">
          <div className="flex flex-col w-[90%] items-center overflow-y-auto">
            {navData.map((eachNav) => {
              const { img, text } = eachNav;
              let to = text.toLowerCase();
              if (text === "Dashboard") to = "/home";
              if (text === "Team Chat") to = "teamchat";
              return (
                <NavLink
                  to={to}
                  end={text === "Dashboard"}
                  className={({ isActive }) => isActive && "activeImg"}
                >
                  <img src={img} alt={text} className="h-[40px] my-4 w-4/5 mx-auto" />
                </NavLink>
              );
            })}
          </div>
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
        </div>

        {/* Log out Button */}
        <div className="p-4 absolute bottom-0 right-0">
          <button className="text-logo p-6 font-semibold  text-base flex items-center gap-2">
            <img src={LogOut} className="w-6 h-6" /> Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
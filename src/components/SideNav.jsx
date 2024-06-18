import React from 'react';
import { NavLink } from 'react-router-dom';
import Dashboard from "../assets/Dashboard.svg";
import Attendance from "../assets/Attendance.svg";
import Calendar from "../assets/Calendar.svg";
import Interns from "../assets/Interns.svg";
import Projects from "../assets/Projects.svg";
import Settings from "../assets/Settings.svg";
import TeamChat from "../assets/TeamChat.svg";
import LogOut from "../assets/LogOut.svg";

const SideNav = () => {
    return (
        <div className="h-screen w-60 flex  text-white rounded-3xl bg-custom-bg">
            {/* Logo and Title Section */}
            {/* <div className="flex items-center justify-end p-6 space-x-2">
                <img src="/vite.svg" alt="Small Logo" className="w-9 h-9 rounded-md" />
                <h2 className="text-xl font-bold text-logo tracking-wider">SSRL</h2>
            </div> */}

            {/* Navigation Links */}
            <div className=''>
                <Navlink>
                    <img src={Dashboard} alt="dashboard" className="w-6 h-6" />
                </Navlink>
                <Navlink>
                    <img src={Interns} alt="interns" className="w-6 h-6" />

                </Navlink>
                <Navlink>
                    <img src={Projects} alt="projects" className="w-6 h-6" />
                </Navlink>
                <Navlink>
                    <img src={Calendar} alt="calendar" className="w-6 h-6" />

                </Navlink>
                <Navlink>
                    <img src={TeamChat} alt="team chat" className="w-6 h-6" />

                </Navlink>
                <Navlink>
                    <img src={Attendance} alt="attendance" className="w-6 h-6" />

                </Navlink>
                <Navlink>
                    <img src={Settings} alt="settings" className="w-6 h-6" />

                </Navlink>

            </div>
            <div className='flex flex-col items-start py-4 space-y-4 overflow-y-auto'>
                {/* Dashboard NavLink */}
                <NavLink to="/" className="">
                    Dashboard
                </NavLink>

                {/* Interns NavLink */}
                <NavLink to="/interns" className="flex items-center gap-4 p-2">
                    <span className="text-sm">Interns</span>
                </NavLink>

                {/* Projects NavLink */}
                <NavLink to="/projects" className="flex items-center gap-4 p-2">
                    <span className="text-sm">Projects</span>
                </NavLink>

                {/* Calendar NavLink */}
                <NavLink to="/calendar" className="flex items-center gap-4 p-2">
                    <span className="text-sm">Calendar</span>
                </NavLink>

                {/* Team Chat NavLink */}
                <NavLink to="/team-chat" className="flex items-center gap-4 p-2">
                    <span className="text-sm">Team Chat</span>
                </NavLink>

                {/* Attendance NavLink */}
                <NavLink to="/attendance" className="flex items-center gap-4 p-2">
                    <span className="text-sm">Attendance</span>
                </NavLink>

                {/* Settings NavLink */}
                <NavLink to="/settings" className="flex items-center gap-4 p-2">
                    <span className="text-sm">Settings</span>
                </NavLink>
            </div>

            {/* Log out Button */}
            {/* <div className="p-4">
                <button className="text-logo p-6 font-semibold  text-lg flex items-center gap-2"><img src={LogOut} /> Log out</button>
            </div> */}
        </div>
    );
}

export default SideNav;
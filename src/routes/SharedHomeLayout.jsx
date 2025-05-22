import React, { useState } from 'react';
import SideNav from "../components/layout/SideNav.jsx";
import Headerbar from '../components/layout/Headerbar.jsx'
import { Outlet } from 'react-router-dom';


const SharedHomeLayout = () => {
  const [isSideNavOpen, setisSideNavOpen] = useState(false);
  const toggleSideNav = () => setisSideNavOpen(!isSideNavOpen)


  return (
    <div className=" min-h-screen max-w-screen-2xl flex justify-center items-start gap-2">
        <Headerbar toggleSideNav={toggleSideNav} isSideNavOpen={isSideNavOpen} />

      {/* Sidebar */}
      <div
        className={`min-h-dvh fixed top-0 left-0  bg-navBg2 z-50 rounded-r-3xl transition-transform transform ${isSideNavOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:sticky lg:flex w-64 transition-transform duration-300 ease-in-out`}>
        <SideNav isSideNavOpen={isSideNavOpen} toggleSideNav={toggleSideNav} />
      </div>

      {/* main content */}
      <div className={`flex-1 overflow-hidden relative ${isSideNavOpen && 'translate-x-64'} transition-transform duration-300 ease-in-out lg:translate-x-0`} >
        <main className={`p-4 mt-[64px]`}>
          <Outlet />
        </main>
      </div>

    </div>
  );
};
export default SharedHomeLayout;
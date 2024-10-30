import React, { useState } from 'react';
import SideNav from "../components/SideNav.jsx";
import { FaBars } from "react-icons/fa6";
import { Outlet } from 'react-router-dom';

const SharedHomeLayout = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(true);
  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <div className="relative w-full min-h-screen">
      <div>
        {!isSideNavOpen && (
          <div className="p-2">
            <button
              onClick={toggleSideNav}
              className="absolute top-4"
            >
              <FaBars className="w-7 h-7" />
            </button>
          </div>
        )}
      </div>

      <div className={`grid ${isSideNavOpen ? 'grid-cols-6' : 'grid-cols-1'} h-full gap-4 transition-all duration-500 ease-out items-start`}>
        {isSideNavOpen && (
          <div className="col-span-1 top-0 h-dvh " style={{ position: 'sticky' }}>
            <SideNav toggleSideNav={toggleSideNav} isSideNavOpen={isSideNavOpen} />
          </div>
        )}

        <div className={`p-4 h-full space-y-4 shadow-lg overflow-y-auto ${isSideNavOpen ? 'col-span-5' : 'col-span-1'} transition-all duration-500 ease-in`} >
          <Outlet />
        </div>
      </div>


    </div>
  );
};

export default SharedHomeLayout;
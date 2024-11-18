import React, { useState } from 'react';
import SideNav from "../components/SideNav.jsx";
import Headerbar from '../components/Headerbar.jsx'
import { Outlet } from 'react-router-dom';


const SharedHomeLayout = () => {


  return (
    <div className=" min-h-screen max-w-screen-2xl">


      <div className='flex justify-center items-start gap-2'>

        <div className="hidden md:flex top-0 h-dvh sticky tranition-all duration-300" >
          <SideNav />
        </div>


        <div className={`p-4 flex-1 max-w-screen-2xl w-full`} >
          <Headerbar />
          <Outlet />
        </div>

      </div>


    </div>
  );
};

export default SharedHomeLayout;
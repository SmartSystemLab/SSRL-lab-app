import React from 'react'
import { Outlet } from 'react-router-dom'
import SignupImage from "../assets/Sgnup-image.jpg"; // Importing the image


const SharedOnboardingLayout = () => {
    return (
      <div className='flex flex-col md:flex-row relative'>
        <div className="relative w-full md:w-1/2 hidden md:block">
          <img
            className="object-cover w-full h-full rounded-md"
            src={SignupImage}
            alt="Sign Up"
          />

          <div className="absolute top-0 left-0 mt-4 ml-4">
            <img
              src="/vite.svg"
              alt="Small Logo"
              className="w-10 h-10 rounded-md"
            />
          </div>

          <div className="absolute top-0 left-14 mt-5 ml-2">
            <h2 className="text-2xl font-bold text-[#FFA500] tracking-wide">
              SSRL
            </h2>
          </div>
        </div>

        <Outlet />
      </div>
    );
}

export default SharedOnboardingLayout
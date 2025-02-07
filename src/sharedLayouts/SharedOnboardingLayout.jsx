import React from 'react';
import { Outlet } from 'react-router-dom';
import SignupImage from "../assets/Sgnup-image.jpg";

const SharedOnboardingLayout = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex max-w-screen-2xl w-full">

        {/* Image block */}
        <div className="w-1/2 hidden md:block relative">
          <img className="h-full w-full object-cover" src={SignupImage} alt="Sign Up" />

          <div className="absolute top-4 left-4 hidden md:flex gap-2 items-center">
            <img src="/vite.svg" alt="Small Logo" className="w-10 h-10 rounded-md" />
            <h2 className="text-2xl font-bold text-[#FFA500] tracking-wide">SSRL</h2>
          </div>

        </div>

        <div className="md:w-1/2 w-full px-6 flex flex-col items-center justify-center">

          <div className=" mx-auto md:hidden flex gap-2 items-center">
            <img src="/vite.svg" alt="Small Logo" className="w-12 h-12 rounded-md" />
            <h2 className="text-3xl font-bold text-[#FFA500] tracking-wide">SSRL</h2>
          </div>

          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default SharedOnboardingLayout
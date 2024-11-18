import React from 'react'
import { Outlet } from 'react-router-dom'
import SignupImage from "../assets/Sgnup-image.jpg"; // Importing the image


const SharedOnboardingLayout = () => {
  return (
    <div className="flex justify-center min-h-screen bg-gray-200">
      {/* image block */}
      <div className="w-1/2 relative border border-black bg-cover bg-no-repeat bg-[url('./assets/Sgnup-image.jpg')]">
        {/* <img className="absolute w-full h-full min-h-screen" src={SignupImage} alt="Sign Up" /> */}

        <div className="absolute top-0 left-0 mt-4 ml-4">
          <img src="/vite.svg" alt="Small Logo" className="w-10 h-10 rounded-md" />
        </div>

        <div className="absolute top-0 left-14 mt-5 ml-2">
          <h2 className="text-2xl font-bold text-[#FFA500] tracking-wide">SSRL</h2>
        </div>
      </div>

      <div className="flex-grow h-full max-w-4xl px-6 md:px-0">
        <div className="flex items-center justify-center h-full">
          <Outlet />
        </div>
      </div>

    </div>

  );
}

export default SharedOnboardingLayout
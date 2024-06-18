import React from 'react'
import SignupImage from "../assets/Sgnup-image.jpg"; // Importing the image


const ResetPassword = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-200 w-screen shadow-md">

            <div className='max-w-screen-md m-auto bg-white rounded-md '>
                <div className='flex flex-col md:flex-row relative'>
                    {/* image block */}
                    <div className="relative w-full md:w-1/2 hidden md:block" >

                        <img
                            className="object-cover w-full h-full rounded-md"
                            src={SignupImage}
                            alt="Sign Up"
                        />

                        <div className="absolute top-0 left-0 mt-4 ml-4">
                            <img src="/vite.svg" alt="Small Logo" className="w-10 h-10 rounded-md" />
                        </div>

                        <div className="absolute top-0 left-14 mt-5 ml-2">
                            <h2 className="text-2xl font-bold text-[#FFA500] tracking-wide">SSRL</h2>
                        </div>

                    </div>

                    {/* forgot password tab */}
                    <div className="md:w-1/2 space-y-5 w-full flex justify-center items-center p-4 mt-12">

                        <div className='w-full max-w-md space-y-5 p-6 mt-12 pt-4 '>

                            <h2 className=" text-center text-2xl font-semibold text-[#333333] leading-10"> Reset Account Password</h2>
                            <p className=' text-center text-[#666666] opacity-75 font-medium text-sm  py-1'>
                                Enter your Email and we'll send you a link to reset your password
                            </p>

                            <form className="" >
                                <div className="rounded-md shadow-sm text-base font-normal opacity-80 space-y-4">

                                    <div className=''>
                                        <label htmlFor="password" className="text-[#666666]">New password </label>

                                        <input type="text" className=" appearance-none relative block w-full px-3 py-1 border border-[#666666] rounded-lg opacity-35 text-[#111111] focus:outline-none focus:opacity-100 focus:text-black" />
                                    </div>
                                    <div className=''>
                                        <label htmlFor="password" className="text-[#666666]">Confirm password  </label>

                                        <input type="text" className=" appearance-none relative block w-full px-3 py-1 border border-[#666666] rounded-lg opacity-35 text-[#111111] focus:outline-none focus:opacity-100 focus:text-black" />
                                    </div>


                                </div>

                                <button type="submit" className="bg-[#053F05F0] text-white mt-6 px-1 py-2 font-bold text-xl capitalize rounded-xl w-full block" >Reset Password</button>
                                <div className='flex items-center justify-end mt-1'>
                                    <a href="/" className="bg-[#053F05F0] text-white mt-6 px-1 py-2 font-bold  text-base capitalize rounded-xl  w-28 text-center">Sign in</a>
                                </div>

                            </form>
                        </div>

                    </div >
                </div>
            </div>
        </div >
    )
}

export default ResetPassword
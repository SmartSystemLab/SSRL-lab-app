import React, { useState } from 'react'
import SignupImage from "../assets/Sgnup-image.jpg"; // Importing the image

const Login = () => {
    const [validName, setValidName] = useState('')// use states
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

                    {/* login tab */}
                    <div className="md:w-1/2 space-y-5 w-full flex justify-center items-center p-4 mt-12">

                        <div className='w-full max-w-md space-y-5 p-6 mt-12 pt-4'>
                            <h2 className="text-center text-3xl font-semibold text-[#333333] leading-10"> Welcome Back!</h2>

                            <form className="" >
                                <div className="rounded-md shadow-sm text-base font-normal opacity-80 space-y-4 ">

                                    <div >
                                        <label htmlFor="emailOrUsername" className="text-[#666666]">
                                            Username/email:
                                        </label>
                                        <input type="text" className=" appearance-none relative block w-full px-3 py-1 border border-[#666666] rounded-lg text-[#111111] opacity-35 focus:outline-none focus:opacity-100 focus:text-black" />
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="text-[#666666] inline-block">
                                            Password:
                                        </label>
                                        {/* <span className="text-[#666666]">
                                            hide
                                        </span> */}
                                        <input type="password" className=" appearance-none relative block w-full px-3 py-1 border border-[#666666] rounded-lg opacity-35 text-[#111111] focus:outline-none focus:opacity-100 focus:text-black" />
                                    </div>
                                </div>

                                <div className="flex items-center mt-3 gap-2">
                                    <input type="checkbox" className="h-4 w-4 border-[#111111] rounded-sm" />
                                    <label htmlFor="remember_me" className="text-sm text-[#333333]">
                                        Keep me signed in
                                    </label>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 17H9V15H11V17ZM13.07 9.25L12.17 10.17C11.45 10.9 11 11.5 11 13H9V12.5C9 11.4 9.45 10.4 10.17 9.67L11.41 8.41C11.78 8.05 12 7.55 12 7C12 5.9 11.1 5 10 5C8.9 5 8 5.9 8 7H6C6 4.79 7.79 3 10 3C12.21 3 14 4.79 14 7C14 7.88 13.64 8.68 13.07 9.25Z" fill="#333333" />
                                    </svg>

                                </div>

                                <div className=" mt-6">
                                    <a href="/forgotpassword" className="underline text-[#111111] font-medium text-sm"> Forgot your password? </a>
                                </div>


                                <div className='text-right'>
                                    <button type="submit" className="bg-[#053F05F0] text-white mt-6 px-1 py-2 font-bold text-xl capitalize rounded-xl  w-32" >Sign in</button>
                                </div>
                            </form>
                        </div>



                    </div >
                </div>
            </div>
        </div >
    )
}

export default Login
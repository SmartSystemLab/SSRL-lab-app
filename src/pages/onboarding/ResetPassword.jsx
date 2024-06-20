import React from 'react'
import SignupImage from "../../assets/Sgnup-image.jpg"; // Importing the image


const ResetPassword = () => {
    return (
        <div className="w-full flex justify-center items-center min-h-screen bg-white">
            {/* reset password tab */}
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



        </div>

    )
}

export default ResetPassword
import React, { useState } from 'react'
import InputError from '../components/InputError';

const OTP = () => {
  const [otp, setOtp] = useState(new Array(6).fill("")) //state to manage empty array of 6 items #
  const [error, setError] = useState(false)

  const handleChange = (element, index) => {
    console.log(element.value, index)
    // verify if input is a number
    if (isNaN(element.value)) return false;

    // update the otp array
    setOtp([...otp.map((d, id) => (id === index ? element.value : d))]);

    console.log(otp)
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    if (otp.includes("")) {
      setError(true)
    } else {
      setError(false)
      console.log(otp.join(""))
    }

  }
  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md space-y-5 p-6">
        <h2 className="text-center text-3xl font-semibold text-[#333333] leading-10">
          Enter OTP
        </h2>
        <p className=" text-center text-[#666666] opacity-75 font-medium text-sm  py-1">
          Enter the OTP sent to your email address
        </p>

        <form onSubmit={handleSubmit} className='text-center'>
          <div className="text-base font-normal opacity-80 space-x-2 flex justify-center ">
            {otp.map((data, index) => {
              return (
                <input
                  type='text'
                  key={index}
                  value={data}
                  maxLength="1"
                  className="text-center w-10 h-10 border border-[#666666] rounded-lg text-[#111111] focus:outline-none  focus:text-black"
                  onChange={(e) => { handleChange(e.target, index) }}
                  onFocus={(e) => { e.target.select() }}
                />

              )
            })}
          </div>
          {error && <InputError>All fields must be filled!!! </InputError>}

          <div className="text-center mt-2">
            <button
              type="submit"
              className="bg-[#053F05F0] text-white mt-6 px-1 py-2 font-bold text-xl capitalize rounded-xl w-1/2"
            >
              Verify OTP
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default OTP
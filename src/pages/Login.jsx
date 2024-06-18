import React, { useRef, useState } from "react";
import { validateIdentity, validatePassword } from "../Modules/verifyForm";
import Signin from "../assets/SignIn.svg";

const Login = () => {
  const [identity, setIdentity] = useState({identity: "", isError: false, error: ""});
  const [password, setPassword] = useState({password: "", isError: false, error: ""});
  const validateIdentityRef = useRef(false)
  const validatePasswordRef = useRef(false)

  return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-200 w-screen shadow-md">
    //   <div className="max-w-screen-md m-auto bg-white rounded-md ">
        <div className="md:w-1/2 space-y-5 w-full flex justify-center items-center p-4 mt-12">
          <div className="w-full max-w-md space-y-5 p-6 mt-12 pt-4">
            <h2 className="text-center text-3xl font-semibold text-[#333333] leading-10">
              Welcome Back!
            </h2>

            <form className="">
              <div className="rounded-md shadow-sm text-base font-normal opacity-80 space-y-4 ">
                <div>
                  <label htmlFor="emailOrUsername" className="text-[#666666]">
                    Username/email:
                  </label>
                  <input
                    type="text"
                    className=" appearance-none relative block w-full px-3 py-1 rounded-lg text-[#111111] opacity-35 focus:outline-none focus:opacity-100 focus:text-black border-2 border-black"
                    value={identity.identity}
                    onChange={(event) => setIdentity({...identity, identity : event.target.value})}
                    onBlur={() => validateIdentity(identity, setIdentity, validateIdentityRef)}
                  />
                  {identity.isError && <p>{identity.error}</p>}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="text-[#666666] inline-block"
                  >
                    Password:
                  </label>
                  {/* <span className="text-[#666666]">
                                            hide
                                        </span> */}
                  <input
                    type="password"
                    className=" appearance-none relative block w-full px-3 py-1 border border-[#666666] rounded-lg opacity-35 text-[#111111] focus:outline-none focus:opacity-100 focus:text-black"
                    value={password.password}
                    onChange={(event) => setPassword({...password, password : event.target.value})}
                    onBlur={() => validatePassword(password, setPassword, validatePasswordRef)}
                  />
                </div>
                {password.isError && <p>{password.error}</p>}
              </div>

              <div className="flex items-center mt-3 gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 border-[#111111] rounded-sm"
                />
                <label htmlFor="remember_me" className="text-sm text-[#333333]">
                  Keep me signed in
                </label>
              </div>

              <div className=" mt-6">
                <a
                  href="/forgotpassword"
                  className="underline text-[#111111] font-medium text-sm"
                >
                  Forgot your password?
                </a>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-[#053F05F0] text-white mt-6 px-1 py-2 font-bold text-xl capitalize rounded-xl  w-32"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
    //   </div>
    // </div>
  );
};

export default Login;

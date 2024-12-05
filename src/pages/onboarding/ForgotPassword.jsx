import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"
import forgotPassword from "../../assets/ForgotPassword.svg"; // Importing the image
import Backtosignin from "../../assets/Backtosignin.svg"; // Importing the image
import CustomLabel from "../../components/CustomLabel.jsx";
import { validateEmail } from "../../Modules/verifyForm.js";
import { useRequest } from "../../Modules/useRequest.js";
import { useUserData } from "../../Modules/UserContext.jsx";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState({ email: "", isError: false, msg: "" });
  const validateEmailRef = useRef();
  const [sendForgetRequest, forgotLoading] = useRequest();
  const [
    sendCredRequest,
    credLoading,
    setCredLoading,
    credError,
    setCredError,
  ] = useRequest();
  const { userId } = useUserData();
  const navigate = useNavigate();

  const handleForgetPassword = (event) => {
    event.preventDefault();
    validateEmail(email, setEmail, validateEmailRef);

    if (validateEmailRef.current) {
      confirmCredentials();
    }
  };

  const confirmCredentials = () => {
    console.log(userId);
    sendCredRequest("confirm/credentials", {
      uid: userId,
      email: email.email,
    }).then((res) => {
      const data = res.json();
      if (res.ok) {
        console.log("Success");
        navigate("/sendOTP");
      } else {
        return data.then((data) =>
          setCredError({ status: true, msg: data.message })
        );
      }
    });
  };

  useEffect(() => {
    sendForgetRequest("forgot/password").then((res) => res.json());
    // .then((data) => console.log(data.status));
  }, []);

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-white">
      {/* forgot password tab */}
      <div className="w-full max-w-md space-y-6 p-6 m ">
        {credError.status && <p>{credError.msg}</p>}
        <div className="flex justify-center items-center">
          <img src={forgotPassword} alt="forgot Password" />
        </div>

        <h2 className=" text-center text-3xl font-semibold text-[#333333] leading-10">
          Forgot Password
        </h2>
        <p className=" text-center text-[#666666] opacity-75 font-medium text-sm  py-1">
          Enter your Email and we'll send you a link to reset your password
        </p>

        <form className=" space-y-8" onSubmit={handleForgetPassword} noValidate>
          <div className="rounded-md shadow-sm text-base font-normal opacity-80">
            <CustomLabel
              htmlFor="email"
              labelText="Email:"
              inputType="email"
              inputValue={email.email}
              onChange={(event) =>
                setEmail({ ...email, email: event.target.value })
              }
              onBlur={() => validateEmail(email, setEmail, validateEmailRef)}
              isError={email.isError}
              errorMessage={email.msg}
              labelCLassName="text-[#666666] inline-block"
              inputClassName="appearance-none relative block w-full px-3 py-1 border border-[#666666] rounded-lg text-[#111111] opacity-35 focus:outline-none focus:opacity-100 focus:text-black"
              placeholder='Enter email address'
            />
          </div>

          <div className="text-center mt-2">
            <button
              type="submit"
              className="bg-[#053F05F0] text-white mt-6 px-1 py-2 font-bold text-xl capitalize rounded-xl w-full block"
            >
              Submit
            </button>
          </div>
          {credLoading && <p>Loading...</p>}
        </form>

        <div className="text-center  font-medium text-base flex justify-center items-center mt-2 gap-3">
          <img src={Backtosignin} alt="BacK" />

          <Link
            to="/"
            className="text-[#666666] opacity-75 font-medium text-base"
          >
            Back to Sign in{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

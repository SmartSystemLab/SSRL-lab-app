import React, { useEffect, useRef, useState } from "react";
import forgotPassword from "../../assets/ForgotPassword.svg"; // Importing the image
import Backtosignin from "../../assets/Backtosignin.svg"; // Importing the image
import CustomLabel from "../../components/CustomLabel.jsx";
import { validateEmail } from "../../Modules/verifyForm.js";
import { useGetRequest, usePostRequest } from "../../Modules/useRequest.js";
import { useUserData } from "../../components/UserContext.jsx";

const ForgotPassword = () => {
  const [email, setEmail] = useState({ email: "", isError: false, msg: "" });
  const validateEmailRef = useRef();
  const [sendForgetRequest, forgotLoading] = useGetRequest();
  const [
    sendCredRequest,
    credLoading,
    setCredLoading,
    credError,
    setCredError,
  ] = usePostRequest();
  const { userId } = useUserData();

  const handleForgetPassword = (event) => {
    event.preventDefault();
    validateEmail(email, setEmail, validateEmailRef);

    if (validateEmailRef.current) {
      confirmCredentials();
    }
  };

  const confirmCredentials = () => {
    sendCredRequest("/confirm/credentials", {
      uid: userId,
      email: email.email,
    }).then((res) => {
      const data = res.json();
      if (res.ok) {
        // To confirm OTP page
      } else {
        console.log("Error");
        return data.then((data) =>
          setCredError({ status: true, msg: data.message })
        );
      }
    });
  };

  useEffect(() => {
    sendForgetRequest("/forgot/password")
      .then((res) => res.json())
      .then((data) => console.log(data.message));
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

        <form className=" space-y-8" onSubmit={handleForgetPassword}>
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

          <a
            href="/"
            className="text-[#666666] opacity-75 font-medium text-base"
          >
            Back to Sign in{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

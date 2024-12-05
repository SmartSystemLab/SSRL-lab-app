import React, { useRef, useState } from "react";
import { Link } from "react-router-dom"
import CustomLabel from "../../components/CustomLabel";
import { validatePassword } from "../../Modules/verifyForm";
import { useRequest } from "../../Modules/useRequest";

const ResetPassword = () => {
  const [password, setPassword] = useState({
    password: "",
    isError: false,
    error: "",
  });
  const [confPassword, setConfPassword] = useState({
    password: "",
    isError: false,
    error: "",
  });
  const validatePasswordRef = useRef(false);
  const validateConfPasswordRef = useRef(false);
  const passwordRef = useRef("");
  const confPasswordRef = useRef("");

  const [
    sendResetRequest,
    resetLoading,
    setResetLoading,
    resetError,
    setResetError,
  ] = useRequest();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    validatePassword(password, setPassword, validatePasswordRef);
    validatePassword(confPassword, setConfPassword, validateConfPasswordRef);
    console.log(passwordRef.current, confPasswordRef.current);

    if (validatePasswordRef.current && validatePassword.current) {
      if (passwordRef.current !== confPasswordRef.current) {
        setConfPassword({
          ...confPassword,
          isError: true,
          error: "Passwords do not match",
        });
      } else {
        setPassword({ ...password, isError: false, error: "" });
        setConfPassword({ ...confPassword, isError: false, error: "" });
        resetPassword();
      }
    }
  };

  const resetPassword = () => {
    sendResetRequest("/change/password", {
      new_pwd: passwordRef.current,
    }).then((res) => {
      const data = res.json();
      if (res.ok) {
        console.log("Success");
      } else {
        return data.then((data) =>
          setResetError({ status: true, msg: data.message })
        );
      }
    });
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-white">
      {/* reset password tab */}
      <div className="w-full max-w-md space-y-5 p-6 mt-12 pt-4 ">
        {resetError.status && <p>{resetError.msg}</p>}
        <h2 className=" text-center text-2xl font-semibold text-[#333333] leading-10">
          Reset Account Password
        </h2>
        <p className=" text-center text-[#666666] opacity-75 font-medium text-sm  py-1">
          Enter your Email and we'll send you a link to reset your password
        </p>

        <form className="" noValidate onSubmit={handleFormSubmit}>
          <div className="rounded-md shadow-sm text-base font-normal opacity-80 space-y-4">
            <CustomLabel
              htmlFor="password"
              labelText="New password"
              inputType="text"
              inputValue={password.password}
              onChange={(event) => {
                setPassword({ ...password, password: event.target.value });
                passwordRef.current = event.target.value;
              }}
              onBlur={() =>
                validatePassword(password, setPassword, validatePasswordRef)
              }
              isError={password.isError}
              errorMessage={password.error}
              labelCLassName="text-[#666666] inline-block"
              inputClassName="appearance-none relative block w-full px-3 py-1 border border-[#666666] rounded-lg text-[#111111] opacity-35 focus:outline-none focus:opacity-100 focus:text-black"
              placeholder='Enter new password'
            />
            <CustomLabel
              htmlFor="password"
              labelText="Confirm password"
              inputType="text"
              inputValue={confPassword.password}
              onChange={(event) => {
                setConfPassword({
                  ...confPassword,
                  password: event.target.value,
                });
                confPasswordRef.current = event.target.value;
              }}
              onBlur={() =>
                validatePassword(
                  confPassword,
                  setConfPassword,
                  validateConfPasswordRef
                )
              }
              isError={confPassword.isError}
              errorMessage={confPassword.error}
              labelCLassName="text-[#666666] inline-block"
              inputClassName="appearance-none relative block w-full px-3 py-1 border border-[#666666] rounded-lg text-[#111111] opacity-35 focus:outline-none focus:opacity-100 focus:text-black"
              placeholder='Confirm new password'
            />
          </div>

          <button
            type="submit"
            className="bg-[#053F05F0] text-white mt-6 px-1 py-2 font-bold text-xl capitalize rounded-xl w-full block"
          >
            Reset Password
          </button>
          {resetLoading && <p>Loading...</p>}
        </form>
        <div className="flex items-center justify-end mt-1">
          <Link
            to="/"
            className="bg-[#053F05F0] text-white mt-6 px-1 py-2 font-bold  text-base capitalize rounded-xl  w-28 text-center"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

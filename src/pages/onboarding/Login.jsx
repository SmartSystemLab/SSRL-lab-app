import React, { useRef, useState } from "react";
import { useUserData } from "../../Modules/UserContext.jsx";
import {
  validateUsername,
  validatePassword,
} from "../../Modules/verifyForm.js";
import { usePostRequest } from "../../Modules/useRequest.js";
import CustomLabel from "../../components/CustomLabel.jsx";
import { redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState({
    name: "",
    isError: false,
    error: "",
  });
  const [password, setPassword] = useState({
    password: "",
    isError: false,
    error: "",
  });
  const validateUsernameRef = useRef(false);
  const validatePasswordRef = useRef(false);
  const checkedRef = useRef();
  const [
    sendLoginRequest,
    loginLoading,
    setLoginLoading,
    loginError,
    setLoginError,
  ] = usePostRequest();

  const navigate = useNavigate();

  const { setUserId } = useUserData();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    validateUsername(username, setUsername, validateUsernameRef);
    if (validateUsernameRef) setUserId(username.username);
    validatePassword(password, setPassword, validatePasswordRef);

    if (validateUsernameRef.current && validatePasswordRef.current) {
      setUserId(username.name);
      validateUser();
    }
  };

  const validateUser = async () => {
    await sendLoginRequest("login", {
      user_id: username.name,
      pwd: password.password,
    }).then((res) => {
      console.log("Okay Okay", res);
      const data = res.json();
      if (res.ok) {
        setLoginError({ status: false, msg: "" });
        console.log("Success");
        // redirect("/home")
        navigate("/home");
        return;
      } else {
        return data.then((data) =>
          setLoginError({ status: true, msg: data.message })
        );
      }
    });
  };

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md space-y-5 p-6">
        {loginError.status && <p>{loginError.msg}</p>}
        <h2 className="text-center text-3xl font-semibold text-[#333333] leading-10">
          Welcome Back!
        </h2>

        <form className="" onSubmit={handleFormSubmit}>
          <div className="rounded-md text-base font-normal opacity-80 space-y-4 ">
            <CustomLabel
              htmlFor="username"
              labelText="Username"
              inputType="text"
              inputValue={username.name}
              onChange={(event) =>
                setUsername({ ...username, name: event.target.value })
              }
              onBlur={() =>{
                console.log(username.name);
                setUserId(username.name);
                validateUsername(username, setUsername, validateUsernameRef)
              }
              }
              isError={username.isError}
              errorMessage={username.error}
            />
            <CustomLabel
              htmlFor="password"
              labelText="Password"
              inputType="password"
              inputValue={password.password}
              onChange={(event) =>
                setPassword({ ...password, password: event.target.value })
              }
              onBlur={() =>
                validatePassword(password, setPassword, validatePasswordRef)
              }
              isError={password.isError}
              errorMessage={password.error}
            />
          </div>

          <div className="flex items-center mt-3 gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 border-[#111111] rounded-sm"
              ref={checkedRef}
            />
            <label htmlFor="remember_me" className="text-sm text-[#333333]">
              Keep me signed in
            </label>
          </div>

          <div className=" mt-6">
            <p
              onClick={() => navigate("/forgotpassword")}
              className="underline text-[#111111] font-medium text-sm"
            >
              Forgot your password?
            </p>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="bg-[#053F05F0] text-white mt-6 px-1 py-2 font-bold text-xl capitalize rounded-xl  w-32"
            >
              Sign in
            </button>
            {loginLoading && <p>Loading...</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

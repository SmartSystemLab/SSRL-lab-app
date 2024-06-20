
import React, { useRef, useState } from "react";
import { useUserData } from "../../components/UserContext.jsx";
import { validateIdentity, validatePassword } from "../../Modules/verifyForm.js";
import { usePostRequest } from "../../Modules/useRequest.js";
import CustomLabel from "../../components/CustomLabel.jsx";

const Login = () => {
    const [identity, setIdentity] = useState({
        identity: "",
        isError: false,
        error: "",
    });
    const [password, setPassword] = useState({
        password: "",
        isError: false,
        error: "",
    });
    const validateIdentityRef = useRef(false);
    const validatePasswordRef = useRef(false);
    const checkedRef = useRef();
    const [
        sendLoginRequest,
        loginLoading,
        setLoginLoading,
        loginError,
        setLoginError,
    ] = usePostRequest();

    const { setUserId } = useUserData();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        validateIdentity(identity, setIdentity, validateIdentityRef);
        if (validateIdentityRef) setUserId(identity.identity)
        validatePassword(password, setPassword, validatePasswordRef);

        if (validateIdentityRef.current && validatePasswordRef.current) {
            setUserId(identity.identity);
            validateUser();
        }
    };

    const validateUser = async () => {
        console.log("Request sent");
        await sendLoginRequest("user/authenticate", {
            user_id: identity.identity,
            pwd: password.password,
        })
            .then((res) => {
                console.log("Okay Okay", res);
                const data = res.json();
                if (res.ok) {
                    setLoginError({ status: false, msg: "" });
                    console.log("Success")
                    // Navigate to userhomepage
                    return;
                } else {
                    return data.then((data) =>
                        setLoginError({ status: true, msg: data.message })
                    );
                }
            })
            .catch((error) => {
                throw new Error(error);
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
                            inputValue={identity.identity}
                            onChange={(event) =>
                                setIdentity({ ...identity, identity: event.target.value })
                            }
                            onBlur={() =>
                                validateIdentity(identity, setIdentity, validateIdentityRef)
                            }
                            isError={identity.isError}
                            errorMessage={identity.error}

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
                        {loginLoading && <p>Loading...</p>}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

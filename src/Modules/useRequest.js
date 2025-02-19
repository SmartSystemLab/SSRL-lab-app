import { useState } from "react";
import { getSessionStorage } from "./getSessionStorage";
// 
const url = "https://ssrl-lab-app-backend.onrender.com"
// const url = "http://127.0.0.1:5000";
// Base URL is

export const useGetRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, msg: "" });

  const sendRequest = async (path) => {
    setError({ status: false, msg: "" });
    console.log("Request sent in module");
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-control-allow-origin": "*",
        "Session_ID": getSessionStorage("session_id", ""),

      },
    };
    setLoading(true);

    let res = await fetch(`${url}/${path}`, requestOptions).catch((error) => {
      setLoading(false);
      setError({
        status: true,
        msg: "Something went wrong. Check your internet connection or try again in a bit.",
      });
      return new Error(error);
    });
    setLoading(false);
    return res;
  };

  return [sendRequest, loading, setLoading, error, setError];
};

export const useRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, msg: undefined });

  const sendRequest = async (path, method = 'GET', body = {}) => {
    setError({ status: false, msg: "" });
    console.log("Request sent in module");

    let headers = {
      'Access-Control-Allow-Credentials': 'true',
      "Authorization": `Bearer ${getSessionStorage("access_token", "")}`
    }

    if (!(body instanceof FormData)) {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(body);
    }

    let requestOptions = {
      credentials: 'include',
      method,
      headers
    };

    if (method !== 'GET') requestOptions = { ...requestOptions, body };

    setLoading(true);

    let res = await fetch(`${url}/${path}`, requestOptions).catch((error) => {
      setLoading(false);
      console.log("Error", error);
      setError({
        status: true,
        msg: "Something went wrong. Check your internet connection or try again in a bit. You can also try logging out and logging in again.",
      });
      return new Error(error);
    });
    setLoading(false);
    return res;
  };
  return [sendRequest, loading, setLoading, error, setError];
};

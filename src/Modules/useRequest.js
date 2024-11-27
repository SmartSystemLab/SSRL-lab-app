import { useState } from "react";
import { getSessionStorage } from "./getSessionStorage";

// const url = "https://ssrl-lab-app-backend.onrender.com"
const url = "http://127.0.0.1:5000";

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

  const sendRequest = async (path, method='GET', body={}) => {
    setError({ status: false, msg: "" });
    console.log("Request sent in module use");

     let requestOptions = {
       method: method,
       headers: {
         "Content-Type": "application/json",
         Session_ID: getSessionStorage("session_id", ""),
       },
     };

    if( method !== 'GET') requestOptions = {...requestOptions, body: JSON.stringify(body) };
    

   
    setLoading(true);

    let res = await fetch(`${url}/${path}`, requestOptions).catch((error) => {
      setLoading(false);
      console.log("Error");
      setError({
        status: true,
        msg: "Something went wrong. Check your internet connection or try again in a bit. You can also try logging out and loggin in again.",
      });
      return new Error(error);
    });
    setLoading(false);
    return res;
  };
  return [sendRequest, loading, setLoading, error, setError];
};

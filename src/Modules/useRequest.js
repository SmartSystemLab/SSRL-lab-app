import { useState } from "react";

const url = "https://ssrl-lab-app-backend.onrender.com"
// const url = "http://127.0.0.1:5000";

export const useGetRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, msg: "" });

  const sendRequest = async (path, method = "GET") => {
    setError({ status: false, msg: "" });
    console.log("Request sent in module");
    const requestOptions = {
      method: method,
      headers: {
        "Content-Type": "application/json",
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

export const usePostRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, msg: undefined });

  const sendRequest = async (path, body) => {
    setError({ status: false, msg: "" });
    console.log("Request sent in module");

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:5173",
        "Access-Control-Allow-Credentials": "true",
      },
      body: JSON.stringify(body),
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

import { useCallback, useEffect, useState } from "react";
import { getSessionStorage } from "../utils/getSessionStorage";
//
// const url = "https://ssrl-lab-app-backend.onrender.com"
const url = "http://127.0.0.1:5000";

export const useRequest = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ status: false, msg: undefined });

  const sendRequest = useCallback(async (path, method = "GET", body = {}) => {
    setError({ status: false, msg: "" });
    console.log("Request sent in module");

    let headers = {
      "Access-Control-Allow-Credentials": "true",
      Authorization: `Bearer ${getSessionStorage("access_token", "")}`,
    };

    if (!(body instanceof FormData)) {
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(body);
    }

    let requestOptions = {
      credentials: "include",
      method,
      headers,
    };

    if (method !== "GET") requestOptions = { ...requestOptions, body };

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
  }, []);
  return [sendRequest, loading, setLoading, error, setError];
};

export const useGetMembers = (role) => {
  const [
    membersRequest,
    membersLoading,
    setMembersLoading,
    membersError,
    setMembersError,
  ] = useRequest();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const res = await membersRequest(
        `personnel/get_members_identity/${role}`,
      );
      const data = await res.json();

      if (res.ok) {
        setMembers(data.members);
      } else {
        setMembersError({ status: true, msg: "Failed to fetch members" });
      }
    };

    fetchMembers();
  }, [role, membersRequest, setMembersError]);

  return {members, membersLoading, membersError}
};

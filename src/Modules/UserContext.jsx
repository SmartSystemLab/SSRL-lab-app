import React, { createContext, useContext, useState } from "react";
const userData = createContext();

const DataContext = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [userProfile, setUserProfile] = useState({});

  const value = { userId, setUserId, userProfile, setUserProfile };
  return <userData.Provider value={value}>{children}</userData.Provider>;
};

export default DataContext
export const useUserData = () => useContext(userData)

import { createContext, useContext, useState } from "react";
const userData = createContext();

const DataContext = ({ children }) => {
  const [userId, setUserId] = useState("AdemideSSRL692");
  const [userProfile, setUserProfile] = useState({});
  const [userDashboard, setUserDashboard] = useState({});

  const value = {
    userId,
    setUserId,
    userProfile,
    setUserProfile,
    userDashboard,
    setUserDashboard,
  };
  return <userData.Provider value={value}>{children}</userData.Provider>;
};

export default DataContext;
export const useUserData = () => useContext(userData);

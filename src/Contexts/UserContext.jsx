import { createContext, useEffect, useState } from "react";
import usersData from "../userData/userData";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [loggedInUserObj, setLoggedInUserObj] = useState(null);
  const [errormsg, setErrormsg] = useState("");

  // Local dataset ko users state mein store kar rahe hain
  useEffect(() => {
    setAllUsers(usersData);
  }, []);

  const checkLogin = ({ email, password }) => {
    const response = allUsers.find((user) => {
      return user.email === email && user.password === password;
    });

    setLoggedInUserObj(response);

    if (!response) {
      setErrormsg("Email or password is invalid");
    } else {
      setErrormsg("");
    }
  };

  const login = (userval) => {
    checkLogin(userval);
    setLoggedInUser(userval);
  };

  const logout = () => {
    setIsLoggedin(false);
    setLoggedInUser(null);
    setLoggedInUserObj(null);
  };

  useEffect(() => {
    if (loggedInUserObj) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }, [loggedInUserObj]);

  return (
    <UserContext.Provider
      value={{
        login,
        logout,
        loggedInUser,
        isLoggedin,
        errormsg,
        loggedInUserObj,
        allUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
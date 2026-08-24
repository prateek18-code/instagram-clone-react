import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState({});
  const [allUsers, setAllUsers] = useState([]);
  const [loggedInUserObj, setLoggedInUserObj] = useState(null); //jo user login hai uska object
  const [errormsg, setErrormsg] = useState("")
  useEffect(() => {
    (async () => {
      const res = await fetch("https://dummyjson.com/users");
      const { users } = await res.json();
      setAllUsers(users);
    })();
  }, []);

  const checkLogin = ({ email, password }) => {
    const response = allUsers.find((user) => {
      return user.email == email && user.password == password;
    });
    setLoggedInUserObj(response);
    if(!response){
      setErrormsg("Email or password is invalid");
    }
  };
 
  const login = (userval) => {
    checkLogin(userval);
    setLoggedInUser(userval);
  };

  const logout = () => {
    setIsLoggedin(false);
    setLoggedInUser(null);
  };
  useEffect(()=>{
    const loginfunc = () =>{
    if (loggedInUserObj) {
      setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }
  loginfunc()
  },[loggedInUserObj])

  
  return (
    <UserContext.Provider value={{ login, loggedInUser, isLoggedin, errormsg, loggedInUserObj }}>
      {children}
    </UserContext.Provider>
  );
};

import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const StoryContext = createContext();

export const StoryProvider = ({ children }) => {
  const { loggedInUserObj, allUsers } = useContext(UserContext);

  const [newData, setNewData] = useState([]);

  useEffect(() => {
    if (!loggedInUserObj || !allUsers.length) {
      setNewData([]);
      return;
    }

    const filteredUsers = allUsers.filter(
      (user) => user.id !== loggedInUserObj.id
    );

    setNewData(filteredUsers);
  }, [loggedInUserObj, allUsers]);

  return (
    <StoryContext.Provider value={{ newData }}>
      {children}
    </StoryContext.Provider>
  );
};
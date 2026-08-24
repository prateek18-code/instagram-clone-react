import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const StoryContext = createContext();

export const StoryProvider = ({children}) =>{
    const { loggedInUserObj} = useContext(UserContext)
    
    const [newData, setNewData] = useState([])
    useEffect(() => {

    if (!loggedInUserObj) return;

    (async () => {
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();

        const users = data.users;

        const filteredUsers = users.filter(
            (user) => user.id !== loggedInUserObj.id
        );

        setNewData(filteredUsers);
    })();

}, [loggedInUserObj]);
    
    
    return (
        <StoryContext.Provider value={{newData}}>
            {children}
        </StoryContext.Provider>
    )
}
import { createContext, useState, useContext } from "react";


const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user] = useState({
    name: "Bochimu",
    email: "bochimu@mich.com",
    dob: "01/01/2001",
  });
  return <UserContext.Provider value={{ user }}></UserContext.Provider>;
};

export const useUser = () => useContext (UserContext);
//create a custom hook that wraps the use context hook, 
// which is the way to consume a context value. This external function is 
// created just for convenience, 
// so there's no need to export the user context to external components. 

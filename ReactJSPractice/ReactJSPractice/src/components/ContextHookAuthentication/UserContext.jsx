import { createContext, useState } from "react";

const [login, setLogin] = useState(false);

const [logout, setLogout] = useState(true);

// Create the context
const UserContext = createContext({
  //storing the following information inside our global context
  isLoggedIn: false,
});

// Create a provider component
const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider value={{ isLoggedIn, setLogin, setLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

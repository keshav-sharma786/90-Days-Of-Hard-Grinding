import React, { createContext, useContext, useEffect, useState } from "react";

// Create the context
const UserContext = createContext({
  //storing the following information inside our global context

  isLoggedIn: false,
});

// Create a provider component
const UserProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  const [logout, setLogout] = useState(true);

  return (
    <UserContext.Provider value={{ isLoggedIn, setLogin, setLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

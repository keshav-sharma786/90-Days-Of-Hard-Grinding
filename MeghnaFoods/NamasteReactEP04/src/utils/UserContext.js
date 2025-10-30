import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default User",
});

// console.log(UserContext);

export default UserContext;

import React from "react";
import { UserProvider } from "./UserContext";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

const Context = () => {
  return (
    <UserProvider>
      <div className="app">
        <Navbar />
        <Dashboard />
      </div>
    </UserProvider>
  );
};

export default Context;

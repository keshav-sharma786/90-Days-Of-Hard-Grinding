import React, { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem("admin")) || null
  );

  const loginAdmin = (email, password) => {
    // 🧠 Basic hardcoded credentials (you can later connect to backend)
    if (email === "Keshav@gmail.com" && password === "Keshav@2468") {
      const adminData = { email };
      setAdmin(adminData);
      localStorage.setItem("admin", JSON.stringify(adminData));
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setAdmin(null);
    localStorage.removeItem("admin");
  };

  return (
    <AdminContext.Provider value={{ admin, loginAdmin, logoutAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);

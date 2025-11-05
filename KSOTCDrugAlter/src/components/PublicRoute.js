// src/components/PublicRoute.js
import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../AuthContext";

const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    // ✅ Already logged in → go to /searchMedicines
    return <Navigate to="/searchMedicines" replace />;
  }

  // ❌ Not logged in → allow login/signup page
  return children;
};

export default PublicRoute;

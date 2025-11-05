// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../AuthContext";

const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    // ❌ Not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }

  // ✅ Logged in → allow access
  return children;
};

export default PrivateRoute;

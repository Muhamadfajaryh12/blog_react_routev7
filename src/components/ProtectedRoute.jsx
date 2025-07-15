import React from "react";
import { useAuth } from "../context/AuthContext";
import { Outlet } from "react-router";

const ProtectedRoute = () => {
  const { token } = useAuth();
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;

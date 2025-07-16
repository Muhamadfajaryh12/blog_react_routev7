import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
const ProtectedLayout = () => {
  const { token, loading } = useAuth();
  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }
  if (token == null) return <Navigate to="/" />;
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="p-6 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedLayout;

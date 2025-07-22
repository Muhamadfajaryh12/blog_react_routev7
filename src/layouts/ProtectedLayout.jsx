import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import { Bounce, ToastContainer } from "react-toastify";
const ProtectedLayout = () => {
  const { token, role, loading } = useAuth();
  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }
  if (!token || role !== "Author") return <Navigate to="/" />;
  return (
    <div className=" h-screen flex">
      <Sidebar />
      <div className="p-6 w-full">
        <Outlet />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default ProtectedLayout;

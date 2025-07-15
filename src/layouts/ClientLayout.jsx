import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { ModalProvider } from "../context/ModalContext";

const ClientLayout = () => {
  return (
    <>
      <ModalProvider>
        <Navbar />
        <div className="max-w-7xl mx-auto flex justify-center my-4">
          <Outlet />
        </div>
      </ModalProvider>
    </>
  );
};

export default ClientLayout;

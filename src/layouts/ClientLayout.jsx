import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { ModalProvider } from "../context/ModalContext";
import { Bounce, ToastContainer } from "react-toastify";

const ClientLayout = () => {
  return (
    <>
      <ModalProvider>
        <Navbar />
        <div className="max-w-7xl mx-auto flex justify-center my-4">
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
      </ModalProvider>
    </>
  );
};

export default ClientLayout;

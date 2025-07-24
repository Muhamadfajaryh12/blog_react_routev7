import React from "react";
import { Bounce, toast } from "react-toastify";

const ToastCustom = ({ type, message }) => {
  const options = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  };
  switch (type) {
    case "error":
      return toast.error(message, options);
    case "success":
      return toast.success(message, options);
    default:
      return;
  }
};

export default ToastCustom;

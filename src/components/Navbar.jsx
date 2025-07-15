import React from "react";
import { useModal } from "../context/ModalContext";
import Auth from "./form/Auth";

const Navbar = () => {
  const { showModal } = useModal();

  return (
    <div className="w-full border-b border-gray-300 p-4 flex justify-between items-center">
      <h1 className="font-bold text-2xl">Articles</h1>
      <button onClick={() => showModal(<Auth />)}>Login</button>
    </div>
  );
};

export default Navbar;

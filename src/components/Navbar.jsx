import React, { useEffect, useState } from "react";
import { useModal } from "../context/ModalContext";
import Auth from "./form/Auth";
import RegisterSection from "../section/RegisterSection";
import LoginSection from "../section/LoginSection";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { showModal } = useModal();
  const { token, logout } = useAuth();

  return (
    <div className="w-full border-b border-gray-300 p-4 flex justify-between items-center">
      <h1 className="font-bold text-2xl">Articles</h1>
      {token ? (
        <button type="button" onClick={logout}>
          Logout
        </button>
      ) : (
        <button onClick={() => showModal(<Auth />)}>Login</button>
      )}
    </div>
  );
};

export default Navbar;

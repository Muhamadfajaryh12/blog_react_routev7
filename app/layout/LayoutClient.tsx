import React from "react";
import { Outlet } from "react-router";
import Navbar from "~/components/Navbar";

const LayoutClient = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutClient;

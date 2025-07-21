import React from "react";
import { Link, useLocation } from "react-router";

const dataSidebar = [
  {
    link: "/dashboard",
    name: "Dashboard",
  },
  {
    link: "/articles",
    name: "Articles",
  },
];
const Sidebar = () => {
  const path = useLocation();
  const pathname = path.pathname.split("/");

  return (
    <div className="h-screen w-84 border-r border-gray-200">
      <h1 className="text-3xl font-extrabold text-center mt-10">Author</h1>
      <ul className="mx-10 my-10">
        {dataSidebar.map((item) => (
          <li
            key={item.link}
            className={`my-2 p-2 rounded-md  ${
              pathname.includes(item.name.toLowerCase())
                ? "font-semibold bg-gray-200"
                : ""
            }`}
          >
            <Link to={item.link}>
              <span className="text-black">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

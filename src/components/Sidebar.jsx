import React from "react";
import { Link, useLocation } from "react-router";

const dataSidebar = [
  {
    link: "/dashboard",
    name: "Dashboard",
  },
  {
    link: "/Articles",
    name: "Articles",
  },
];
const Sidebar = () => {
  const path = useLocation();
  console.log(path);
  return (
    <div className="h-screen w-72 border-r border-gray-200">
      <h1 className="text-3xl font-extrabold text-center">Author</h1>
      <ul className="mx-10">
        {dataSidebar.map((item) => (
          <li
            key={item.link}
            className={`my-2 p-2 rounded-md  ${
              path.pathname == item.link ? "font-semibold bg-gray-200" : ""
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

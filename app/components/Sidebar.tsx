import React from "react";
import { BsPaperclip } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { Link, useLocation, useParams } from "react-router";

const dataSidebar = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <MdDashboard />,
  },
  {
    name: "Articles",
    link: "/articles",
    icon: <BsPaperclip />,
  },
];
const Sidebar = () => {
  const router = useLocation();

  return (
    <div className="w-72 h-screen border-r">
      <div className="flex flex-col mx-5">
        <h1 className="text-center flex-1 font-extrabold mt-10 text-3xl">
          Author
        </h1>
        <div className="mt-5">
          <ul>
            {dataSidebar.map((item) => (
              <Link to={item.link}>
                <li
                  key={item.name}
                  className={`flex gap-2 items-center text-md p-2 rounded-md my-4 ${
                    item.link == router.pathname
                      ? "bg-gray-200 font-semibold"
                      : ""
                  }`}
                >
                  {item.icon} <span>{item.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

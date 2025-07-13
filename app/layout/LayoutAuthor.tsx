import { Outlet } from "react-router";
import Sidebar from "~/components/Sidebar";

const LayoutAuthor = () => {
  return (
    <div className="flex">
      <aside>
        <Sidebar />
      </aside>
      <main className="p-6 w-full">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutAuthor;

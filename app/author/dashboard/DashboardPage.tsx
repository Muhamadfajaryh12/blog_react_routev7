import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import BreadCrumb from "~/components/BreadCrumb";

const DashboardPage = () => {
  return (
    <div>
      <BreadCrumb dataCrumb={["Author", "Dashboard"]} />
    </div>
  );
};

export default DashboardPage;

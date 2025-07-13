import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const BreadCrumb = ({ dataCrumb }) => {
  return (
    <div className="flex items-center text-sm gap-1" id="Breadcrumbs">
      {dataCrumb.map((item, index) => (
        <>
          <span>{item}</span>
          {index < dataCrumb.length - 1 ? <IoIosArrowForward /> : ""}
        </>
      ))}
    </div>
  );
};

export default BreadCrumb;

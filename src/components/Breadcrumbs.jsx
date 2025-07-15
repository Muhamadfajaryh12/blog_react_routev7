import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumbs = ({ title }) => {
  return (
    <div className="flex gap-2 items-center text-sm">
      {title.map((item, index) => (
        <React.Fragment>
          <p>{item}</p>
          {index < title.length - 1 ? <IoIosArrowForward /> : ""}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;

import React from "react";
import { Link } from "react-router";
import BreadCrumb from "~/components/BreadCrumb";

const articles = () => {
  return (
    <div>
      <div>
        <BreadCrumb dataCrumb={["Author", "Articles"]} />
      </div>
      <div className="">
        <button className="bg-black text-white p-2 rounded-sm text-sm">
          <Link to="">Create article</Link>
        </button>
        <div className=""></div>
      </div>
    </div>
  );
};

export default articles;

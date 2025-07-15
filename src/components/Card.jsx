import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router";

const Card = ({ dataCard }) => {
  const { title, tags, image, id, view } = dataCard;

  return (
    <Link to={`/${id}`} className="h-64 w-96 relative">
      <div className="relative">
        <img
          src={`${import.meta.env.VITE_IMAGE_URL}/${image}`}
          alt={title}
          className="w-full h-48 object-cover  rounded-md relative"
        />
        <div className="absolute bottom-0 right-0">
          <span className="flex items-center justify-evenly gap-2 text-white bg-gray-800 w-14">
            {view}
            <FaEye />
          </span>
        </div>
      </div>
      <h6 className="mt-2 font-bold">{title}</h6>
      <div className="flex">{/* <span>{tags}</span> */}</div>
    </Link>
  );
};

export default Card;

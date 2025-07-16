import React from "react";

const TextArea = ({ name, label, register, errors }) => {
  return (
    <div>
      <label htmlFor={name} className="font-bold text-sm">
        {label}
      </label>
      <textarea
        name={name}
        {...register(name)}
        className={`block mt-1 focus:outline-gray-600 border rounded-md  w-full p-2
            ${errors[name] ? "border-red-500" : "border-gray-200"}
            `}
      />
    </div>
  );
};

export default TextArea;

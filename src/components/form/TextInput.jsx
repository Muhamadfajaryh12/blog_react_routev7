import React from "react";

const TextInput = ({ name, label, type, register, errors }) => {
  return (
    <div>
      <label htmlFor={name} className="font-semibold text-sm">
        {label}
      </label>
      <input
        type={type}
        name={name}
        {...register(name)}
        className={`block mt-1 focus:outline-gray-600 border rounded-md  w-full p-2
            ${errors[name] ? "border-red-500" : "border-gray-200"}
            `}
      />
    </div>
  );
};

export default TextInput;

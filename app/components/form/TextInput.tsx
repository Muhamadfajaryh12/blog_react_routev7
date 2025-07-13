import React from "react";

type InputType = {
  label: string;
  type: "text" | "number" | "email" | "password";
};

const TextInput = ({ label, type }: InputType) => {
  return (
    <div>
      <label htmlFor="" className="font-semibold text-sm tracking-wide">
        {label}
      </label>
      <input
        type={type}
        className="block my-1 border p-2 rounded-lg border-gray-400 w-full  focus:outline-blue-500"
      />
    </div>
  );
};

export default TextInput;

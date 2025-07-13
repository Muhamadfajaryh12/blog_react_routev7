import React from "react";

const TextArea = ({ label }: { label: string }) => {
  return (
    <div>
      <label htmlFor="" className="font-semibold text-sm tracking-wide">
        {label}
      </label>
      <textarea className="block my-1 border p-2 rounded-lg border-gray-400 w-full  focus:outline-blue-500" />
    </div>
  );
};

export default TextArea;

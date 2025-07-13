import React from "react";

const Select = ({ label, dataSelect, handleSelected }) => {
  return (
    <div>
      <label htmlFor="" className="font-bold text-sm tracking-wide">
        {label}
      </label>
      <select
        className="block border my-1 p-2 rounded-sm border-gray-400 w-full focus:outline-blue-500"
        onChange={(e) => handleSelected(e.target.value)}
      >
        <option value="">Select tag</option>
        {dataSelect.map((item, index) => (
          <option value={item.id} key={index}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

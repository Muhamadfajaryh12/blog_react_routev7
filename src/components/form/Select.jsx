import React from "react";

const Select = ({ label, name, placeholder, dataSelect, handleChange }) => {
  return (
    <div>
      <label htmlFor={name} className="font-semibold ">
        {label}
      </label>
      <select
        name={name}
        onChange={(e) => handleChange(e.target.value)}
        className="block mt-1  w-full border focus:outline-gray-600 p-2 rounded-md"
      >
        <option value="">{placeholder}</option>
        {dataSelect.map((item) => (
          <option value={item.id}>{item.value}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;

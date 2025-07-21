import React from "react";

const Select = ({
  label,
  name,
  placeholder,
  dataSelect,
  handleChange,
  register,
}) => {
  return (
    <div>
      <label htmlFor={name} className="font-semibold ">
        {label}
      </label>
      <select
        name={name}
        {...(register ? register(name) : {})}
        onChange={(e) => handleChange && handleChange(e.target.value)}
        className="block mt-1  w-full border border-gray-200 focus:outline-gray-600 p-2 rounded-md"
      >
        <option value="">{placeholder}</option>
        {dataSelect.map((item) => (
          <option value={item.id}>{item.tag}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;

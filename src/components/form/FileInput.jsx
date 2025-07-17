import React from "react";

const FileInput = ({ label, onChangeImage, preview }) => {
  return (
    <div className="w-full">
      <label htmlFor="" className="font-semibold">
        {label}
      </label>
      <input
        type="file"
        onChange={(e) => onChangeImage(e.target.files[0])}
        accept="jpg"
        className="block border w-full mt-1 p-2 rounded-md border-gray-200"
      />
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-xl rounded-md object-cover h-32 mt-4"
        />
      )}
    </div>
  );
};

export default FileInput;

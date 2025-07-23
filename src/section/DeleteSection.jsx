import React from "react";
import { useModal } from "../context/ModalContext";

const DeleteSection = ({ handleClick }) => {
  const { closeModal } = useModal();
  return (
    <section>
      <p className="text-center">Are you sure delete this article ?</p>
      <div className="flex gap-2 justify-center my-4">
        <button
          className="bg-black text-white rounded-md p-2 text-sm"
          onClick={closeModal}
        >
          Cancel
        </button>
        <button
          className="bg-red-600 text-white rounded-md p-2 text-sm"
          onClick={() => handleClick()}
        >
          Delete
        </button>
      </div>
    </section>
  );
};

export default DeleteSection;

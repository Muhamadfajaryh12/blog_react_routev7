import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  const showModal = (modalContent) => {
    setContent(modalContent);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
  };

  return (
    <ModalContext.Provider value={{ isOpen, showModal, closeModal }}>
      {children}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 flex justify-center items-center z-40"></div>
          <div
            className="fixed inset-0 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white p-4 rounded-md shadow-md min-w-[300px]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end">
                <button className="" type="button" onClick={closeModal}>
                  x
                </button>
              </div>
              {content}
            </div>
          </div>
        </>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

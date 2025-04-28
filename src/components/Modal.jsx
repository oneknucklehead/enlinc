// Modal.jsx
import React, { useEffect, useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      // Delay hiding until animation ends
      const timeout = setTimeout(() => setShowModal(false), 300); // match duration-300
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen && !showModal) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      } bg-black/50`}
      onClick={onClose}
    >
      <div
        className={`bg-white p-8 rounded-lg shadow-lg relative w-full max-w-lg mx-4 transform transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Modal Content */}
        {children}
      </div>
    </div>
  );
};

export default Modal;

import React from "react";

const Button = ({ children, classname, outline = false }) => {
  return (
    <div>
      {outline ? (
        <button
          className={`rounded-md border-2 border-[#142462] text-white ${classname} `}
        >
          {children}
        </button>
      ) : (
        <button
          className={`rounded-md bg-gradient-to-r from-[#142462] to-[#2A6A9E] text-white ${classname} `}
        >
          {children}
        </button>
      )}
    </div>
  );
};

export default Button;

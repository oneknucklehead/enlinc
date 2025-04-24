import React from "react";

const Button = ({ children, classname, outline = false, onClick }) => {
  return (
    <div>
      {outline ? (
        <button
          className={`rounded-md border-2 border-[#142462] text-[#142462] ${classname} text-center`}
          onClick={onClick}
        >
          {children}
        </button>
      ) : (
        <button
          className={`rounded-md bg-gradient-to-r from-[#142462] to-[#2A6A9E] text-white ${classname} text-center `}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </div>
  );
};

Button.defaultProps = {
  onClick: () => {},
};
export default Button;

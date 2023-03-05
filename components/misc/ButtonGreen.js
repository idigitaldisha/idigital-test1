import React from "react";

const ButtonGreen = ({ children, addClass }) => {
  return (
    <button
    style={{background:"#3cb043"}}
      className={
        "py-3 px-4 text-xs sm:text-sm lg:py-4 lg:text-lg px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-green-500 hover:shadow-green-md transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonGreen;

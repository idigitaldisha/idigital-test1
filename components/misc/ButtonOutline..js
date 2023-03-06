import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-white bg-gray-100  text-red-500
      outline-none
     rounded-l-full rounded-r-full capitalize  hover:text-white hover:bg-red-500 transition-all hover:shadow-orange ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;

import React from "react";

const Button = ({ textColor, colorName, bgColor, changeBgFn }) => {
  const Funx = () => {
    console.log(colorName);
  };
  return (
    <button
      className={`${bgColor} ${textColor} rounded-sm px-6 py-2  mr-3 font-semibold font-mono`}
      onClick={changeBgFn}
    >
      {colorName}
    </button>
  );
};

export default Button;

import React from "react";
import Button from "./Button";

const Footer = ({ changeBgFn }) => {
  return (
    <div className="bg-slate-500 absolute bottom-0 w-full p-5 flex justify-center align-middle">
      <Button
        bgColor="bg-black"
        textColor="text-white"
        colorName="Black"
        changeBgFn={() => changeBgFn("black")}
      />
      <Button
        bgColor="bg-white"
        textColor="text-black"
        colorName="White"
        changeBgFn={() => changeBgFn("white")}
      />
      <Button
        bgColor="bg-yellow-300"
        textColor="text-black"
        colorName="Yellow"
        changeBgFn={() => changeBgFn("yellow")}
      />
      <Button
        bgColor="bg-orange-500"
        textColor="text-black"
        colorName="Orange"
        changeBgFn={() => changeBgFn("orange")}
        onClick={() => Function}
      />
      <Button
        bgColor="bg-slate-800"
        textColor="text-white"
        colorName="Slate"
        changeBgFn={() => changeBgFn("darkslateblue")}
      />
      <Button
        bgColor="bg-blue-800"
        textColor="text-white"
        colorName="blue"
        changeBgFn={() => changeBgFn("blue")}
      />
    </div>
  );
};

export default Footer;

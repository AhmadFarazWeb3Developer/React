import React, { useState } from "react";
import "./App.css";
import Footer from "./Footer";

function App() {
  const [color, setColor] = useState("black");

  const changeBackgroundFn = (newColor) => {
    setColor(newColor);
    document.body.style.backgroundColor = newColor;
  };

  return (
    <>
      <div>
        <h1 className="bg-purple-700 text-white flex justify-center align-middle p-4 font-sans font-medium tracking-widest text-xl">
          Background Changer
        </h1>
        <Footer changeBgFn={changeBackgroundFn} />
      </div>
    </>
  );
}
export default App;

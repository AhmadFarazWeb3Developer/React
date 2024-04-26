import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  const myObj = {
    name: "Ahmad Faraz",
    id: 215154,
  };

  let array = [1, 2, 3];
  return (
    <>
      <Card Name="Ahmad Faraz" btnText="Visit my profile" />
      <Card Name="Pakistan" btnText="Visit Pakistan" />
    </>
  );
}

export default App;

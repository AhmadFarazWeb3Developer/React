import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  const Increment = () => {
    if (count >= 0 && count < 20) {
      count = count + 1;
      setCount(count);
    }
  };
  const Decrement = () => {
    if (count > 0 && count <= 20) {
      count = count - 1;
      setCount(count);
    }
  };

  return (
    <>
      <div>
        <p> Value {count}</p>
        <button className="inct" onClick={Increment}>
          Increment
        </button>
        <br></br>
        <button className="dect" onClick={Decrement}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;

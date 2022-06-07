import React from "react";
import { useState } from "react";

const Counter = () => {
  // counter activity
  let [count, setCount] = useState(0);

  const increaseClick = () => {
    setCount((count += 1));
  };
  const decreaseClick = () => {
    setCount((count -= 1));
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1 className="countArea">{count}</h1>
      <div className="counterBox">
        <button className="decreaseButton" onClick={decreaseClick}>
          -
        </button>
        <button className="increaseButton" onClick={increaseClick}>
          +
        </button>
      </div>
      <button className="reset" onClick={reset}>
        reset
      </button>
    </div>
  );
};

export default Counter;

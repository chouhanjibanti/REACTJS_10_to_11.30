import React, { useState } from "react";

function UseCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  function Increment() {
    setCount(count + 1);
  }

  function Decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(initialValue);
  }

  return [count, Increment, Decrement, reset];
}

export default UseCounter;

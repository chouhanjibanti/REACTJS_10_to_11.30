import React, { useEffect, useState } from "react";
import Unmount from "./Unmount";
// function components life cycle
function App() {
  const [count, setCount] = useState(10); // count =0

  function incrementCount() {
    setCount((count) => count + 1);
  }

  // mouting phase
  useEffect(() => {
    console.log("Mouting Phase");
  }, []); // load / render  only one time

  // updating phase
  useEffect(() => {
    console.log("updating phase");
  }, [count]);

  // unmouting phase
  useEffect(() => {
    return () => {
      console.log("unmouting phase");
    };
  }, []);

  return (
    <>
      <button onClick={() => incrementCount()}>Inrement</button>
      <h1>{count}</h1>
      {/* <Unmount /> */}
    </>
  );
}

export default App;

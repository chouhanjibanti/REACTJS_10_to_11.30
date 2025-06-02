import React from "react";
import { useMemo } from "react";
import { useState } from "react";

function UseMemoHook() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incre1 = () => {
    setCount1(count1 + 1);
  };

  const incre2 = () => {
    setCount2(count2 + 1);
  };

  const checkEven = useMemo(() => {
    let i = 0;
    while (i < 200000) i++;
    return count1 % 2 == 0;
  }, [count1]);

  return (
    <>
      <div>{count1}</div>
      <button onClick={incre1}>Increment1</button>

      <div>{count2}</div>
      <button onClick={incre2}>Increment2</button>

      <div>{checkEven ? "even" : "odd"}</div>
    </>
  );
}

export default UseMemoHook;

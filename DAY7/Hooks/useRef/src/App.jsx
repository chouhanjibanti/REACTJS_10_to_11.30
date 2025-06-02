import React, { useRef, useState } from "react";

function App() {
  const [name, setName] = useState("kritanhsu");
  const refElement = useRef("");
  console.log(refElement);

  function changeOn(e) {
    setName(e.target.value);
  }

  function ResetButton() {
    setName("");
    refElement.current.focus();
  }

  function ColorChange() {
    refElement.current.style.color = "red";
    refElement.current.style.backgroundColor = "yellow";
  }

  return (
    <>
      <h1>Debugshala</h1>
      <input type="text" ref={refElement} value={name} onChange={changeOn} />

      <button onClick={ResetButton}>Reset</button>
      <button onClick={ColorChange}>Handle Color</button>
    </>
  );
}
export default App;

import React, { useState } from "react";
import MessageBox from "./components/MessageBox";
import MessageBox1 from "./components/MessageBox1";

function App() {
  const [name, setName] = useState("debugshala");

  // return (
  //  <>
  //  <h1>Props Example</h1>
  //  <MessageBox name="diksha" color1="red" age={23}/>
  //  <MessageBox name="kritanshu" color1="yellow" age={22}/>
  //  <MessageBox name="Goutam" color1="green" age={21}/>
  //  </>
  // )

  // default props example
  // return (
  //  <>
  //  <MessageBox/>
  //  </>
  // )

  // Example of props and state at a time
  return (
    <>
      <h1>parent components</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name} // kritanshu
        // update state
        onChange={(e) => setName(e.target.value)}
      />

      {/* pass state as props */}
      <MessageBox1 name={name} textColor="blue" />
    </>
  );
}

export default App;

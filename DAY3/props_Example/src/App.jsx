import React from "react";
import MessageBox from "./components/MessageBox";

function App() {
  return (
    <>
    <h1>Props Example</h1>
     <MessageBox name="kritanshu" color="red" age={23}/>
    </>


 // example of default props
    // <>
    // <MessageBox/>
    // </>
  )
}

export default App;

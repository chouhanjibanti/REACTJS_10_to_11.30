// import React from "react";
// import UseCounter from "./UseCounter";

// function App() {
//   const [count, Increment, Decrement, reset] = UseCounter();
//   return (
//     <>
//       <h2>{count}</h2>
//       <button onClick={Increment}>Increment</button>
//       <button onClick={Decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </>
//   );
// }

// export default App;

import React from "react";
import UseInput from "./UseInput";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function App() {
  return (
    <>
    <LoginForm/>

    <RegisterForm/>
    </>
  );
}

export default App;

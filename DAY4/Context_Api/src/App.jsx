import React from "react";
import { createContext } from "react";
import Child from "./Child";

const dataContext = createContext(); // provider // consumer
function App() {
  const name = "BIzfy";
  return (
    <>
      <dataContext.Provider value={name}>
        <Child />
      </dataContext.Provider>
      {/* {console.log(dataContext)} */}
    </>
  );
}
export default App;
export { dataContext };

// ======================================================

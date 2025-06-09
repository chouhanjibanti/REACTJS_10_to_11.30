import React from "react";
// import { dataContext } from './App'
// import { useContext } from 'react'

// first type
// function Child() {
//     const name = useContext(dataContext)
//   return (
//    <>
//    <h1>{name}</h1>
//    </>
//   )
// }

// second way
function Child() {
  return (
    <>
      <dataContext.Consumer>
        {function name1(name) {
          return (
            <>
              <h1>{name}</h1>
            </>
          );
        }}
      </dataContext.Consumer>
    </>
  );
}

export default Child;

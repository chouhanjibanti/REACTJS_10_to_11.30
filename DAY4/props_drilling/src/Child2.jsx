import React from "react";
import Child3 from "./Child3";

function Child2({ name }) {
  return (
    <>
      <p>{name}</p>
      <Child3 name={name} />
    </>
  );
}

export default Child2;

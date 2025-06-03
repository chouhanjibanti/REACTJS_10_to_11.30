import React from "react";

function ListWithoutKey() {
  const items = ["India", "Bangaldesh", "pakistan", "srilanka", "US"];

  const listItems = items.map((item) => <li>{item}</li>);
  return (
    <>
      <h1>Countries List</h1>
      <ul>{listItems}</ul>
    </>
  );
}

export default ListWithoutKey;

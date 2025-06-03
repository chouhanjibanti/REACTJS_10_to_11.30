import React, { useState } from "react";

function List_Add_key() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6]);

  const addItemBeginging = () => {
    // setItems([7, ...items])
    setItems((preItems) => [5, ...preItems]);
  };

  const addItemEnding = () => {
    // setItems([...items , 8])
    setItems((preItems) => [...preItems, 6]);
  };
  return (
    <>
      <h1>List is here in the form String</h1>
      <button onClick={addItemBeginging}>Add at begining</button>
      <button onClick={addItemEnding}>Add at ending</button>

      <ul>
        {items.map((item) => (
          <li key={`item-${item}`}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default List_Add_key;

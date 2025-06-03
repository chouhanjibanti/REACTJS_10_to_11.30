import React, { useState } from 'react'

function List_Add_item() {

    const[items , setItems] = useState([1,2,3,4,5,6])

    const addItemBeginging = () =>{
        setItems([7, ...items])
    }

    const addItemEnding = () =>{
        setItems([...items , 8])
    }
  return (
    <>
       <h1>List is here in the form index</h1>
       <button onClick={addItemBeginging}>Add at begining</button>
       <button onClick={addItemEnding}>Add at ending</button>


       <ul>
        {items.map((item,index) =>
        <li key={index}>{item}</li> )}
       </ul>
    </>
  )
}

export default List_Add_item
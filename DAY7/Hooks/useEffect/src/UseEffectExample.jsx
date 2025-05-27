import React, { useEffect, useState } from 'react'

function UseEffectExample() {

    const[number,setNumber] = useState(0);

useEffect(()=>{
    console.log(`current state is :${number}`);

    // using clean up function
    return()=>{
        console.log("clean up function is working ,useEffect is going to destroy itself");
    }
},[number]) 

  return (
    <>
    <button onClick={()=>setNumber(number+1)}> Increment </button>
    <h1>{number}</h1>
        <button onClick={()=>setNumber(number-1)}> Decrement </button>

    </>
  )
}

export default UseEffectExample

// mount
// unmount
// update
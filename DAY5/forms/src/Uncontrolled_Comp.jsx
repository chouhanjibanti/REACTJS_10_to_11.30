import React, { useRef } from 'react'

const Uncontrolled_Comp = () => {

    // useRef
   const  refObject = useRef();// hook
   console.log(refObject);

   function handleSubmit(e){
         e.preventDefault();// html form dafault behaiour 
         console.log((refObject.current.value).toUpperCase());
   }

  return (
    <>
     <form action="" onSubmit={handleSubmit}>
        <label for="fname">FirstName</label>
        <input type="text" ref={refObject}/> <br />

        <button>Submit</button>
     </form>
    </>
  )
}

export default Uncontrolled_Comp
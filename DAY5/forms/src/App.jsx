import React from "react";
import { useState } from "react";

// function App() {
//   return (
//     <>
//       <form action="">
//         <label for="fname" id="fname">
//           First name
//         </label>
//         <input type="text" value="diksha" />
//       </form>
//     </>
//   );
// }

// export default App;


// ===========================================
// useState// react from 


function App() {

  const[name,setName] = useState("");
  const[pswd,setPswd]  = useState("")

  function handleName(e){
     console.log(e.target.value);
    const capName= e.target.value.toUpperCase();
    setName(capName)
    // setName(e.target.value)
    
  }

    const handlePassword =(e) =>{
        console.log(e.target.value);
        setPswd(e.target.value)
    }

    const btn = () =>{
       alert("submitted")
    }

  return (
<>
  <form action="">
    <label for="fname">First Name:</label>
    <input type="text" value={name} name="akaskh" onChange={handleName}/><br/>
    <label for="pass">Password:</label>
    <input type="password" name="password" value={pswd} onChange={handlePassword}/><br/>
    <button type="submit" onClick={btn}>Submit</button>
  </form>
</>  
)
}

export default App

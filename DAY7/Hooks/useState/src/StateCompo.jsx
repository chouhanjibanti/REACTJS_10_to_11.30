import React, { useState } from 'react'
function StateCompo() {

    // const[state,setState] = useState(()=>{
    //     console.log("Component Rendered first time ");
    // })

    // const changeState = () =>{
    //     setState(state+10);// 10 20 30 40 
    //     console.log("Component Re-rendered");
    // }
    const[userData,setUserData] = useState({
       fullName: "Kritanshu",
       email : "kritanshu@gmail.com",
       password :"kittu@123"
    })
    const changePassword = () =>{
        setUserData(prevState => ({...prevState ,password :"kitti@1234"}))
    }

  return (
    <>
    {/* <h2>{state}</h2> */}
      {/* <button onClick={changeState}>Change State</button> */}


      {/* main example */}

      <div style={{
        display:"flex",
        placeContent :"center",
        placeItems :"center",
        fontSize : "30px"
      }}>
        <button onClick={changePassword}>Change password</button> &nbsp;
           <div>
            {userData.fullName}
            <br />
            {userData.email}
            <br />
            {userData.password}
            <br />
           </div>
      </div>
    </>
  )
}

export default StateCompo
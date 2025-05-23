import React from 'react'
import {Link , useNavigate} from "react-router-dom"


function Contact() {
    // using the link component 

     const navigate = useNavigate();

    function goHome(){
      navigate("/")
    }

    function goAbout(){
      navigate("/about")
    }
  return (
    <>
     <div>i am Contact Page</div>
     <Link to="/">Click for Home Page</Link> <br />
    <Link to="/about">click for About page</Link> <br />


<button onClick={goHome}>Home</button> <br />
    <button onClick={goAbout}>About</button>

    </>
  )
}

export default Contact
import React from 'react'
import {Link , useLocation, useNavigate} from "react-router-dom"


function About() {
    // using the link component 
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state.name);

    function goHome(){
      navigate("/")
    }

    function goContact(){
      navigate("/contact")
    }
  return (
    <>
     <div>i am About Page</div>
     <Link to="/">Click for Home Page</Link> <br />
    <Link to="/contact">click for contact page</Link> <br />

    <button onClick={goHome}>Home</button> <br />
    <button onClick={goContact}>Contact</button>

    </>
   

  )
}

export default About
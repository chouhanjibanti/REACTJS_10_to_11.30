import React from 'react'
import {Link, useNavigate} from "react-router-dom"

function Home() {
  // using the link component 
  // return (
  //   <>
  //   <div>i am HomePage</div>
  //   <Link to="/about">Click for About Page</Link> <br />
  //   <Link to="/contact">click for contact page</Link>
  //   </>
  // )
      const myName = "debugshala";
    const navigate = useNavigate();

    function goAbout(){
      navigate("/about", {state : {name:myName}});
    }

    function goContact(){
      navigate("/contact")
    }
return (
    <>
    <div>This is Home Page</div>
    <Link to="/about">Click for about page</Link><br />
    <Link to="/contact">click for contact page</Link> <br />

    <button onClick={goAbout}>About</button> <br />
    <button onClick={goContact}>Contact</button>
    </>
  )
}

export default Home
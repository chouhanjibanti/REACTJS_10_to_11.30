import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

// function App() {
//   return (
//     <Routes>
//      <Route  path="/" element={<div>HomePage</div>}/>
//       <Route  path="/about" element={<div>About page</div>}/>
//      <Route  path="/contact" element={<div>I am contact page</div>}/>
//     </Routes>
//   )
// }

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;

// import React from "react";
import StateChildComponent from "./components/StateChildComponent";

// function App() {
//   return (
//        <>
//        <h1>Bunty Chouhan</h1>
//        <p>Java Developer</p>
//        {/* child component */}
//        <StateChildComponent/>
//        </>
//   )
// }

// export default App

//  state in the parent com
// app,jsx  , darkModeButton
import React from "react";
import { useState } from "react";
import DarkModeButton from "./components/DarkModeButton";
import DarkModeContent from "./components/DarkModeContent";

function App() {
  const [darkMode, setDarkMode] = useState(false); // false-> white

  const toggleTheme = () => {
    setDarkMode(!darkMode); // true
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#121212" : "#ffffff",
        color: darkMode ? "#ffffff" : "#121212",
        height: "1000px",
        padding: "20px",
      }}
    >
      <h1>social media app</h1>
      <DarkModeButton darkMode={darkMode} onToggle={toggleTheme} />
      <DarkModeContent darkMode={darkMode} />
    </div>
  );
}

export default App;

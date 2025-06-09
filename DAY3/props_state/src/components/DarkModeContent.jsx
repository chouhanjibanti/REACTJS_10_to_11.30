import React from "react";

function DarkModeContent({ darkMode }) {
  return (
    <div
      style={{
        backgroundColor: darkMode ? "grey" : "yellow",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>{darkMode ? "dark mode " : "light mode"}</h2>
      <p>this is content</p>
    </div>
  );
}

export default DarkModeContent;

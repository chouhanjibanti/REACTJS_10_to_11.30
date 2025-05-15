import React from "react";

function DarkModeButton({ darkMode, onToggle }) {
  return (
    
      <button
        onClick={onToggle}
        style={{
          padding: "10px",
          backgroundColor: darkMode ? "green" : "blue",
          color: darkMode ? "white" : "black",
          border: "none",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        {darkMode ? "LightMode" : "Dark Mode"}
      </button>
    
  );
}

export default DarkModeButton;

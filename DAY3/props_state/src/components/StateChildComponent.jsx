import React from "react";
import { useState } from "react";

function StateChildComponent() {
  const [followers, setFollowers] = useState(100);

  // we use arrow function // expression
  const follow = () => setFollowers(followers + 1);
  const unfollow = () => setFollowers(followers - 1);

  return (
    <>
      <h1>Followers :{followers}</h1>
      <button
        onClick={follow}
        style={{
          marginRight: "10px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {" "}
        Follow
      </button>
      <button
        onClick={unfollow}
        style={{
          marginRight: "10px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        UnFollow
      </button>
    </>
  );
}

export default StateChildComponent;

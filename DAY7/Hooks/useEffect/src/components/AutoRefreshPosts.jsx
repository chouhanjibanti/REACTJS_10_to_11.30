import React, { useEffect, useState } from "react";

function AutoRefreshPosts() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("fetching new posts");
      setCount((preCount) => preCount + 1);
    }, 5000); // har 5 sec fetch new posts

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <h2>Auto refresh count : {count}</h2>
    </>
  );
}
export default AutoRefreshPosts;

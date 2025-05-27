import React, { useEffect, useState } from "react";

function SociaMediaFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // fake api
      .then((response) => response.json())
      .then((data) => setPosts(data.slice(0, 10)))
      .catch((err)=> console.log(err));
  });

  return (
    <>
      <h2>User Feed</h2>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{ border: "1px solid red", margin: "10px", padding: "10px" }}
        >
          <h2>{post.id}</h2>
          <h2>{post.userId}</h2>
           <h2>{post.title}</h2>
          <h2>{post.body}</h2>
        </div>
      ))}
    </>
  );
}

export default SociaMediaFeed;

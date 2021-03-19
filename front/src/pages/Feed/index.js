import React, { useEffect, useState } from "react";
import Post from "../../components/Post";
import Service from "../../services/Services";
import "./style.css";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  function getPosts() {
    Service.posts.getAll().then((res) => {
      setPosts(res.data);
    });
  }

  return (
    <div className="container feed">
      {posts.map((post) => (
        <Post post={post} usuario={post.usuario}></Post>
      ))}
    </div>
  );
}

export default Feed;

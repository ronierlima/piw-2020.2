import React from "react";
import Post from "../../components/Post";
import './style.css'

function Feed() {
  let posts = [
    {
      id: "1",
      usuario: "Ronier",
      texto:
        "Vivamus fringilla lectus vulputate magna.",
      likes: 75,
    },
    {
      id: "2",
      usuario: "Geíslia",
      texto:
        "Vivamus non semper dolor. Aenean.",
      likes: 50,
    },
    {
      id: "3",
      usuario: "Victor",
      texto:
        "Duis sit amet justo eros.",
      likes: 25,
    },
    {
      id: "4",
      usuario: "Ronier",
      texto:
        "Cras ullamcorper nisi et arcu.",
      likes: 50,
    },
    {
      id: "5",
      usuario: "Pedro",
      texto:
        "Phasellus tempor feugiat condimentum. Etiam.",
      likes: 75,
    },
    {
      id: "6",
      usuario: "Kaio",
      texto:
        "Curabitur a ipsum eget neque.",
      likes: 100,
    },
  ];

  return (
    <div className="container feed">
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
}

export default Feed;

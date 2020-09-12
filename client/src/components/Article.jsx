import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import posts from "../data";

export default function Article() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    setPost(posts.find((e) => e.id == id));
  }, []);
  return (
    <>
      {post ? (
        <article>
          <h1>{post.title}</h1>
          <p>{post.author}</p>
          <p>{post.date}</p>
          <p>{post.category}</p>
          <img src={post.imageUrl} alt={post.imageAlt} />
          <p>{post.content}</p>
        </article>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}

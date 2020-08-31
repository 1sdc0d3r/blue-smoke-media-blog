import React from "react";
//* Images
//* Data
import posts from "../blog";
import image from "../chart.jpg";

export default function Home() {
  console.log(posts);
  return (
    <div className="blog">
      <div className="posts">
        {posts.map((post) => {
          return (
            <div className="post">
              <img src={image} alt="post url" />
              <div className="content">
                <span>{post.category}</span>
                <h3>{post.title}</h3>
                <span>
                  by {post.author} · {post.date}
                </span>
                <p>
                  {post.snippet} <a href={`/article/${post.id}`}>Read More.</a>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="sidebar">
        <h3>Our Sidebar</h3>
        <p class="">
          You can put any information here you'd like.
          <ul class="list-group">
            <li>Latest Posts</li>
            <li>Announcements</li>
            <li>Calendars</li>
            <li>etc</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

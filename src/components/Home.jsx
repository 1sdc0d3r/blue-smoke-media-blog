import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    const email = document.querySelector("input[name='email']");
    email.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        // enter key
        document.querySelector("button[type='submit']").click();
      }
    });
    return () => {
      email.removeEventListener("keyup");
    };
  }, []);
  // useEffect(() => {
  //   const message = document.getElementById("newsletter-message");
  // });
  const [newsletterMessage, setNewsletterMessage] = useState("");

  return (
    <div className="home">
      <div>
        <h1>
          Blue Smoke
          <br />
          <span>Designer and Techie</span>
          <br />
          Nomads
        </h1>
      </div>
      <div className="content">
        <div className="posts">
          <article>
            <h2>
              <span>Best practices:</span> How to market yourself like a
              corporation.
            </h2>
            <h5>Got a favorite brand?</h5>
            <p>
              Something that inspires confidence his is the best value? Most of
              use would answer yes. THere is a specific toothpaste you seek, or
              brand of trash bags you avoid.{" "}
            </p>
          </article>
          <article>
            Necessitatibus tempore quis, et animi voluptate placeat. Mollitia,
            recusandae in et aspernatur nesciunt sapiente laudantium! Libero,
            quaerat. Placeat corporis ab repellat debitis?
          </article>
          <article>
            Necessitatibus tempore quis, et animi voluptate placeat. Mollitia,
            recusandae in et aspernatur nesciunt sapiente laudantium! Libero,
            quaerat. Placeat corporis ab repellat debitis?
          </article>
        </div>
        <div className="sidebar">
          <div className="popular">
            Most Popular Articles{" "}
            <span className="coming-soon">Coming Soon!</span>
          </div>
          <div className="topics">
            Popular Topics
            <br />
            <span className="coming-soon">Coming Soon!</span>
          </div>
          <div className="newsletter">
            <p>
              Enter your email below to join our <span>Inside Look</span> to
              help you compete with the big guys!
            </p>
            <span id="newsletter-message">{newsletterMessage}</span>
            <input type="text" name="email" placeholder="email" />
            <button type="submit" onClick={() => registerEmail()}>
              Sign Up
            </button>
          </div>
          <div className="facebook">
            <p>Like us on facebook</p>
            <div
              class="fb-page"
              data-href="https://www.facebook.com/bluesmokemedia/"
              data-tabs=""
              data-width=""
              data-height=""
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/bluesmokemedia/"
                class="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/bluesmokemedia/">
                  Blue Smoke Digital and Printed Media
                </a>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="authors">
          <h3>Authors</h3>
          <p>author1</p>
          <p>author2</p>
        </div>
        <div className="category">
          <h3>Category</h3>
          <p>branding</p>
          <p>social media</p>
          <p>website design</p>
        </div>
        <div className="tags">
          <h3>Tags</h3>
          <p>tag1</p>
          <p>tag2</p>
          <p>tag3</p>
        </div>
      </div>
      <div className="comments">COMMENTS</div>
      <div className="new-articles">NEW ARTICLES MAPPED</div>
    </div>
  );

  function registerEmail() {
    const email = document.querySelector("input[name='email']").value;
    axios
      .post("http://localhost:3000/api", { email: email })
      .then((res) => setNewsletterMessage(res.data.message))
      .catch((err) => console.log(err));
  }
}

/*
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
*/

import React from "react";

export default function Home() {
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus tempore quis, et animi voluptate placeat. Mollitia,
            recusandae in et aspernatur nesciunt sapiente laudantium! Libero,
            quaerat. Placeat corporis ab repellat debitis? Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Necessitatibus tempore quis,
            et animi voluptate placeat. Mollitia, recusandae in et aspernatur
            nesciunt sapiente laudantium! Libero, quaerat. Placeat corporis ab
            repellat debitis?Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Necessitatibus tempore quis, et animi voluptate placeat.
            Mollitia, recusandae in et aspernatur nesciunt sapiente laudantium!
            Libero, quaerat. Placeat corporis ab repellat debitis?
          </article>
          <article>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus tempore quis, et animi voluptate placeat. Mollitia,
            recusandae in et aspernatur nesciunt sapiente laudantium! Libero,
            quaerat. Placeat corporis ab repellat debitis? Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Necessitatibus tempore quis,
            et animi voluptate placeat. Mollitia, recusandae in et aspernatur
            nesciunt sapiente laudantium! Libero, quaerat. Placeat corporis ab
            repellat debitis?Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Necessitatibus tempore quis, et animi voluptate placeat.
            Mollitia, recusandae in et aspernatur nesciunt sapiente laudantium!
            Libero, quaerat. Placeat corporis ab repellat debitis?
          </article>
          <article>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Necessitatibus tempore quis, et animi voluptate placeat. Mollitia,
            recusandae in et aspernatur nesciunt sapiente laudantium! Libero,
            quaerat. Placeat corporis ab repellat debitis? Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Necessitatibus tempore quis,
            et animi voluptate placeat. Mollitia, recusandae in et aspernatur
            nesciunt sapiente laudantium! Libero, quaerat. Placeat corporis ab
            repellat debitis?Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Necessitatibus tempore quis, et animi voluptate placeat.
            Mollitia, recusandae in et aspernatur nesciunt sapiente laudantium!
            Libero, quaerat. Placeat corporis ab repellat debitis?
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
            <span>Stay Informed</span>
            <p>Enter you email below to join our newsletter</p>
            <input />
            <button>Sign Up</button>
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

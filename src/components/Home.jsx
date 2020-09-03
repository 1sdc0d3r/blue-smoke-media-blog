import React from "react";

export default function Home() {
  return (
    <div className="home">
      <div>
        <h1>
          Blue Smoke
          <br />
          <span>Designer and Techie</span>
        </h1>
        <h2>Nomads</h2>
      </div>
      <div className="home-content">
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
            <ol class="list-group">
              <li>Latest Posts</li>
              <li>Announcements</li>
              <li>Calendars</li>
              <li>etc</li>
              <li>etc</li>
            </ol>
            <p>See More Posts</p>
          </div>
          <div className="topics">
            <p>item</p>
            <p>item</p>
            <p>item</p>
            <p>item</p>
            <p>item</p>
            <p>item</p>
            <p>item</p>
            <p>item</p>
            <p>item</p>
            <p>item</p>
          </div>
          <div className="newsletter">
            <p>Stay Informed</p>
            <p>Enter you email below to join our newsletter</p>
            <input />
            <button>Sign Up</button>
          </div>
          <div className="facebook">
            <p>Like us on facebook</p>
            <div
              class="fb-page"
              data-href="https://www.facebook.com/bluesmokemedia/"
              data-tabs="timeline"
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
        <div className="about">
          <div className="authors">
            <h5>Authors</h5>
            <p>author1</p>
            <p>author2</p>
          </div>
          <div className="category">
            <h5>Category</h5>
            <p>branding</p>
            <p>social media</p>
            <p>website design</p>
          </div>
          <div className="tags">
            <p>tag1</p>
            <p>tag2</p>
            <p>tag3</p>
            <p>tag4</p>
            <p>tag5</p>
          </div>
        </div>
        <div className="comments">COMMENTS</div>
        <div className="new-articles">NEW ARTICLES MAPPED</div>
      </div>
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

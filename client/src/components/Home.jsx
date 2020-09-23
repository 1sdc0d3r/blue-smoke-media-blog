import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as emailjs from "emailjs-com";
import bigGuys from "../assets/competing-with-the-big-guys.jpg";
import socialMedia from "../assets/Social-media-changes-every-small-business-should-know- about.jpeg";
import invertedCommas from "../assets/inverted-commas.png";

export default function Home() {
  useEffect(() => {
    const email = document.querySelector("input[name='email']");
    email.addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        // enter key
        document.querySelector("button[type='submit']").click();
      }
    });
  }, []);

  const [newsletterMessage, setNewsletterMessage] = useState("");
  const API_URL = "https://blue-smoke-blog.herokuapp.com";
  // const API_URL = "http://localhost:5000";

  const newArticles = [
    {
      title: "About Paris that has never been revealed....",
      img: bigGuys,
      tags: ["magic", "life", "work"],
      author: "Yulia Purple",
      date: "Dec 12, 2020",
    },
    {
      title: "About Paris that has never been revealed....",
      img: bigGuys,
      tags: ["magic", "life", "work"],
      author: "Yulia Purple",
      date: "Dec 12, 2020",
    },
    {
      title: "About Paris that has never been revealed....",
      img: bigGuys,
      tags: ["magic", "life", "work"],
      author: "Yulia Purple",
      date: "Dec 12, 2020",
    },
    {
      title: "About Paris that has never been revealed....",
      img: bigGuys,
      tags: ["magic", "life", "work"],
      author: "Yulia Purple",
      date: "Dec 12, 2020",
    },
  ];

  return (
    <div className="home">
      {/* <div> */}
      <h1>
        Blue Smoke Media
        <br />
        <span className="orange">Nomad Techies</span>
      </h1>
      {/* </div> */}
      <div className="content">
        <div className="posts">
          <section>
            <h2>
              Best practices:{" "}
              <span className="orange">
                How to market yourself like a corporation.
              </span>
            </h2>
            <h4>Got a favorite brand?</h4>
            <p>
              Something that inspires the confidence that _____ is the best
              value? Most of us would answer yes. There is a specific toothpaste
              you seek, or brand of trash bags you avoid. Out of so many choices
              in this age of options- How did you grow this relationship? Of all
              the toothpastes in the world, why did you walk over to that one?
              Aside from the dollar in your wallet that serves as your ballot-
              this is a pretty one-sided affinity. How did this loyalty begin?
              More importantly, how can you use the same tools to inspire
              confidence that you are the best choice out of a stack of resumes?
            </p>
            <h4>Let’s talk about how they did it.</h4>
            <p>
              {" "}
              Corporations are people is probably not a new concept to you.
              Collective ownership not bound to a single lifetime started with
              an argument of a wealthy robber baron who wanted his business to
              exploit the 14th amendment. Here is a bit on the dubious journey
              from business to personhood if you want to{" "}
              {/* //todo learn more link to contact page */}
              <span className="orange">learn more.</span> As ridiculous as the
              idea started, it was successful.{" "}
            </p>
            <p className="author">— Ramona Lucius, (August, 2020)</p>
            <Link to="/article/1">Read More</Link>
          </section>
          <section>
            <img src={invertedCommas} alt="inverted commas" id="commas" />
            <p>
              Decisions to buy or not to buy from a company have increasingly
              less to do with place, packaging, or promotion and almost
              everything to do with how much your friends, family, and even
              strangers provide online assurance that the product or service is
              worth the cost.”
            </p>
            <br />
            <p className="author">— Elaine Cheng</p>
          </section>
          <section>
            <img src={socialMedia} alt="img" />
            <h2>
              Social Media:{" "}
              <span className="orange">
                Why It Is 100% Essential (and How to Use It Well).
              </span>
            </h2>
            <p>
              In today’s society, word of mouth IS digital. Think about the
              questions you constantly ask about products, services or
              businesses; your customers are asking the SAME questions.
              Addressing these common points of confusion could be your key to
              converting casual website visitors into new clients. The biggest
              question of all though, is whether potential customers will WANT
              to visit your website based on your social media presence. So,
              start or join a conversation, and participate with the idea in
              mind that you can achieve a significant influence. Take a hold and
              grow your brand by taking hold of your social media presence!
            </p>
            <p className="author">— Constance Beebe, (August, 2020)</p>
            <Link to="/article/2">Read More</Link>
          </section>
          <section>
            <img src={bigGuys} alt="img" />
            <h2>
              Competing
              <span className="orange"> with the Big Guys!</span>
            </h2>
            <p>
              When starting a business or web site on the Internet, it is often
              easy to become intimidated by large companies or web sites
              offering similar services to you. While you may not be able to
              match the million dollar advertising budgets, or employee numbers
              of your competitors, there are many things you can do to make your
              business or web site stand out from the rest. The aim of this
              article is to provide you with an approach, and the motivation to
              take on those competitors you never thought you could match!
            </p>
            <p className="author">— Constance Beebe, (August, 2020)</p>
            <Link to="/article/3">Read More</Link>
          </section>
        </div>
        {/* //! SIDEBAR */}
        <div className="sidebar">
          <div className="popular">
            Most Popular divs <span className="coming-soon">Coming Soon!</span>
          </div>
          <div className="topics">
            Popular Topics
            <br />
            <span className="coming-soon">Coming Soon!</span>
          </div>
          <div className="newsletter">
            <p>
              Get a <span>Inside Look</span> to help compete with the big guys!
            </p>
            <span id="newsletter-message">{newsletterMessage}</span>
            <input type="text" name="email" placeholder="Enter Your Email" />
            <input name="antiSpam" type="text" style={{ display: "none" }} />
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
          <p>Ramona Lucius</p>
          <p>Constance Beebe</p>
        </div>
        <div className="category">
          <h3>Category</h3>
          <p>Branding</p>
          <p>Social Media</p>
          <p>Website Design</p>
        </div>
        <div className="tags">
          <h3>Tags</h3>
          <p>Strategic Social Media Marketing</p>
          <p>Affordable Custom Website Design</p>
          <p>Consumer Loyalty</p>
          <p>Typography</p>
        </div>
      </div>
      <div className="comments">
        <div>
          <h2>Comments</h2>
          <button onClick={() => addComment}>Add Your Comment</button>
        </div>
      </div>
      <div className="new-articles">
        {newArticles?.map((e) => newArticle(e))}
      </div>
    </div>
  );

  function registerEmail() {
    const email = document.querySelector("input[name='email']");
    const antiSpam = document.querySelector("input[name='antiSpam']");
    const templateParams = {
      reply_to: email.value,
      from_name: "blog subscriber",
      message_subject: "Blog Subscriber",
      message_html: email.value,
    };
    console.log(email.value, !antiSpam.value);
    if (!email.value.includes("@") & !email.value.includes(".")) {
      setNewsletterMessage("Please provide a valid email.");
    } else if (!antiSpam.value) {
      console.log("SENT");
      emailjs.send(
        "service_kys3ouv",
        "template_fd7rhre",
        templateParams,
        "user_AKrWjfONfbrIagrKBIYq0"
      );
    }
    /* //todo axios
      .post(`${API_URL}/api/email`, { email: email.value })
      .then((res) => {
        if (res.status === 200) {
          setNewsletterMessage("Successfully Subscribed!");
          setTimeout(() => {
            email.value = "";
            setNewsletterMessage("");
          }, 2000);
        } else setNewsletterMessage(res.data.message);
      })
    .catch((err) => console.log(err));*/
  }
}
function addComment() {
  console.log("comment");
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
                  {post.snippet} <a href={`/div/${post.id}`}>Read More.</a>
                </p>
              </div>
            </div>
          );
        })}
*/
function newArticle(article) {
  return (
    <div className="new-article">
      <img src={article.img} alt="post url" />
      <div className="text">
        <p>{article.tags?.map((e, i) => (i == 0 ? e : `, ${e}`))}</p>
        <h3>{article.title}</h3>
        <p>
          by {article.author} · {article.date}
        </p>
      </div>
    </div>
  );
}

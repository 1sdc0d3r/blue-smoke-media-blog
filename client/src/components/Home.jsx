import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// * Components
import Sidebar from "./Sidebar";
// * Images
const invertedCommas =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/Blog/inverted-commas.png";
const bigGuys =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/Blog/competing-with-the-big-guys.jpg";
const socialMedia =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/Blog/Social-media-changes-every-small-business-should-know-about.jpeg";

export default function Home() {
  const [newArticles, setNewArticles] = useState([]);
  useEffect(() => {
    axios
      .get("https://blue-smoke-blog.herokuapp.com/api/blog")
      .then(({ data }) => {
        // console.log(data.length);
        let random = Math.floor(Math.random() * (data.length - 1));
        if (random < 6) random = 6;
        setNewArticles(
          data.sort((a, b) => b.date - a.date).slice(random - 6, random)
        );
      })
      .catch((err) => console.log(err));
  }, []);
  //todo sort date

  return (
    <>
      <div className="home">
        <h1>
          Blue Smoke Media
          <br />
          <span className="orange">Nomad Techies</span>
        </h1>
        <div className="content">
          <div className="posts">
            <section>
              <h2>
                Best practices:{" "}
                <span className="orange">
                  How To Market Yourself Like A Corporation.
                </span>
              </h2>
              <h4>Got a favorite brand?</h4>
              <p>
                Something that inspires the confidence that _____ is the best
                value? Most of us would answer yes. There is a specific
                toothpaste you seek, or brand of trash bags you avoid. Out of so
                many choices in this age of options- How did you grow this
                relationship? Of all the toothpastes in the world, why did you
                walk over to that one? Aside from the dollar in your wallet that
                serves as your ballot- this is a pretty one-sided affinity. How
                did this loyalty begin? More importantly, how can you use the
                same tools to inspire confidence that you are the best choice
                out of a stack of resumes?
              </p>
              <h4>Let’s talk about how they did it.</h4>
              <p>
                {" "}
                <a
                  href="https://www.npr.org/2014/07/28/335288388/when-did-companies-become-people-excavating-the-legal-evolution"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Corporations are people is probably not a new concept to you.
                </a>{" "}
                Collective ownership not bound to a single lifetime started with
                an argument of a wealthy robber baron who wanted his business to
                exploit the 14th amendment. Here is a bit on the{" "}
                <a
                  href="https://www.theatlantic.com/business/archive/2018/03/corporations-people-adam-winkler/554852/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dubious journey
                </a>{" "}
                from business to personhood if you want to{" "}
                <a
                  href="https://bluesmokedigitalandprintedmedia.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  learn more.
                </a>{" "}
                As ridiculous as the idea started, it was successful.
              </p>
              <p className="author">— Ramona Lucius, (August, 2020)</p>
              {/* todo READ MORE LINKS */}
              <Link to="/article/18" className="more-btn">
                Read More
              </Link>
            </section>
            <section>
              <img src={invertedCommas} alt="inverted commas" id="commas" />
              <p>
                Decisions to buy or not to buy from a company have increasingly
                less to do with place, packaging, or promotion and almost
                everything to do with how much your friends, family, and even
                strangers provide online assurance that the product or service
                is worth the cost.”
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
                mind that you can achieve a significant influence. Take a hold
                and grow your brand by taking hold of your social media
                presence!
              </p>
              <p className="author">— Constance Beebe, (August, 2020)</p>
              {/* todo */}
              <Link to="/article/17" className="more-btn">
                Read More
              </Link>
            </section>
            <section>
              <img src={bigGuys} alt="img" />
              <h2>
                Competing
                <span className="orange"> with the Big Guys!</span>
              </h2>
              <p>
                When starting a business or website on the Internet, it is often
                easy to become intimidated by large companies or websites
                offering similar services to you. While you may not be able to
                match the million dollar advertising budgets, or employee
                numbers of your competitors, there are many things you can do to
                make your business or website stand out from the rest. The aim
                of this article is to provide you with an approach, and the
                motivation to take on those competitors you never thought you
                could match!
              </p>
              <p className="author">— Constance Beebe, (August, 2020)</p>
              {/* todo */}
              <Link to="/article/19" className="more-btn">
                Read More
              </Link>
            </section>
          </div>
          {/* //! SIDEBAR */}
          <Sidebar articles={newArticles} />
        </div>

        {/* <div className="about">
        <div className="authors">
          <h3>Authors</h3>
          <Link to="/author/Ramona">Ramona Lucius</Link>
          <Link to="/author/Constance">Constance Beebe</Link>
        </div>
        <div className="category">
          <h3>Category</h3>
          <Link to="/category/Branding">Branding</Link>
          <Link to="/category/Social Media">Social Media</Link>
          <Link to="/category/Website Design">Website Design</Link>
        </div>
        <div className="tags">
          <h3>Tags</h3>
          <Link to="/tag/Strategic Social Media Marketing">
            Strategic Social Media Marketing
          </Link>
          <Link to="/tag/Affordable Custom Website Design">
            Affordable Custom Website Design
          </Link>
          <Link to="/tag/Consumer Loyalty">Consumer Loyalty</Link>
          <Link to="/tag/Typography">Typography</Link>
        </div>
      </div> */}
        {/* <div className="comments">
        <div>
          <h2>Comments</h2>
          <button onClick={() => addComment}>Add Your Comment</button>
        </div>
      </div> */}
        <div className="new-articles">
          <hr />
          <h2>New Articles</h2>
          <div>
            {newArticles?.map((e) => (
              <div className="new-article">
                <Link to={`/article/${e.id}`}>
                  <img
                    src={`https://blue-smoke-media.s3-us-west-1.amazonaws.com/Blog/thumbnail/${e.imageUrl}`}
                    alt={e.imageAlt}
                  />
                  <div className="text">
                    <h4>{e.title}</h4>
                    {/* <div className="text"><span>{e.category}</span></div> */}
                    <p className="author">
                      –{e.author}
                      {/* {e.date ? `· ${e.date}` : ""} */}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

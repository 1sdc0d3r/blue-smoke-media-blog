import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import ReactHtmlParser from "react-html-parser";
import serverURL from "../utils";

import { FiMail } from "react-icons/fi";

//* Images
const twitter =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/Blog/social+media/twitter.png";
const facebook =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/Blog/social+media/facebook.png";
const linkedIn =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/Blog/social+media/linkedIn.png";

export default function Article({ history }) {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [loadingMessage, setLoadingMessage] = useState("Loading...");
  const encodedURL = encodeURI(
    `https://www.bluesmokemedia.com${history.location.pathname}`
  );
  useEffect(() => {
    axios
      .get(`${serverURL[1]}${id}`)
      .then(({ data }) =>
        data[0] ? setPost(data[0]) : setLoadingMessage(data.message)
      )
      .catch((err) => console.log(err));
  }, [id]);
  return (
    <>
      {post ? (
        <>
          <article>
            <img
              src={`https://blue-smoke-media.s3-us-west-1.amazonaws.com/Blog/primary/${post.imageUrl}`}
              alt={post.imageAlt}
              className="primary-img"
            />
            <h1>{post.title}</h1>
            {/* todo check with CoBe */}
            <pre className="content">{ReactHtmlParser(post.content)}</pre>
            <div className="share-info">
              <div className="share">
                <ul>
                  Share:
                  <li>
                    <a
                      href={`https://facebook.com/sharer/sharer.php?u=${encodedURL}`}
                    >
                      <img
                        src={facebook}
                        alt="facebook icon"
                        className="icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodedURL}`}
                      data-size="large"
                    >
                      <img src={twitter} alt="twitter icon" className="icon" />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedURL}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={linkedIn}
                        alt="LinkedIn icon"
                        className="icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:?subject=${post.title}&body=${encodedURL}`}
                    >
                      <FiMail color="#1e92f6" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="info">
                <h4>Author {post.date ? "• Date" : ""}</h4>
                <p className="author">
                  <Link to={`/author/${post.author}`}>{post.author}</Link>
                  {post.date ? ` • ${post.date}` : ""}
                </p>
                <h4>Category</h4>
                <p>
                  <Link to={`/category/${post.category}`}>
                    {" "}
                    {post.category}
                  </Link>
                </p>
              </div>
            </div>
            <div className="tags">
              <h4>Tags</h4>
              <p>
                {post.tags.split(",").map((e, i) => (
                  <Link to={`/tags/${e}`}>{i !== 0 ? ` • ${e}` : e}</Link>
                ))}
              </p>
            </div>

            {/* //todo category tags here */}
          </article>
          <Helmet>
            <title>{post.title}</title>
            <meta name="keywords" content={post.tags} />
            <meta name="description" content={post.snippet} />
            <meta name="author" content={post.author} />
          </Helmet>
        </>
      ) : (
        <p id="loading">{loadingMessage}</p>
      )}
    </>
  );
}

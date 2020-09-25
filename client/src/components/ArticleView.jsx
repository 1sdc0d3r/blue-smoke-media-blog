import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import { FiMail } from "react-icons/fi";

//* Images
import twitter from "../assets/Twitter.png";
import facebook from "../assets/faceBook.png";
import linkedIn from "../assets/linkedIn_social_media_button.png";

export default function Article({ history }) {
  const { id } = useParams();
  const [post, setPost] = useState();
  //todo change URL to proper url (SOCIAL MEDIA SHARING)
  const encodedURL = encodeURI(
    `https://www.bluesmokemedia.com${history.location.pathname}`
  );
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/blog/${id}`)
      .then((res) => setPost(res.data[0]))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {/* <h1>
        Blue Smoke Media
        <br />
        <span className="orange">Nomads</span>
      </h1> */}
      {post ? (
        <article>
          <img
            src={post.imageUrl}
            alt={post.imageAlt}
            className="primary-img"
          />
          <h2>{post.title}</h2>
          <p className="content">{post.content}</p>
          <p className="info">
            <Link to={`/author/${post.author}`}>{post.author}</Link> •{" "}
            {post.date}
          </p>
          <div className="share-info">
            <ul>
              Share:
              <li>
                <a
                  href={`https://facebook.com/sharer/sharer.php?u=${encodedURL}`}
                >
                  <img src={facebook} alt="facebook icon" className="icon" />
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
                >
                  <img src={linkedIn} alt="LinkedIn icon" className="icon" />
                </a>
              </li>
              <li>
                <a href={`mailto:?subject=${post.title}&body=${encodedURL}`}>
                  <FiMail color="#1e92f6" />
                </a>
              </li>
            </ul>
            <p className="tags">
              {/* todo link to tags */}
              {post.tags.split(",").map((e, i) => (
                <Link to={`/tag/${e}`}>{i !== 0 ? ` • ${e}` : e}</Link>
              ))}
            </p>
          </div>

          {/* //todo category tags here */}
        </article>
      ) : (
        <p id="loading">No Article Found</p>
      )}
    </>
  );
}

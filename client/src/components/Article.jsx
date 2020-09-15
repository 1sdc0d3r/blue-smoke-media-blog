import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import posts from "../data";
import twitter from "../assets/Twitter.png";
import facebook from "../assets/faceBook.png";
import linkedIn from "../assets/linkedIn_social_media_button.png";
import MailOutlineRoundedIcon from "@material-ui/icons/MailOutlineRounded";

export default function Article({ history }) {
  const { id } = useParams();
  const [post, setPost] = useState({});
  //todo change URL to proper url
  const encodedURL = encodeURI(
    `https://www.bluesmokemedia.com${history.location.pathname}`
  );

  useEffect(() => {
    setPost(posts.find((e) => e.id == id));
  }, []);
  return (
    <>
      <h1>
        Blue Smoke Media
        <br />
        <span className="orange">Nomads</span>
      </h1>
      {post ? (
        <article>
          <img src={post.imageUrl} alt={post.imageAlt} />
          <p className="category">{post.category}</p>
          <h2>{post.title}</h2>
          <p className="author">
            {post.author} / {post.date}
          </p>
          <ul>
            <li>
              <a
                href={`https://facebook.com/sharer/sharer.php?u=${encodedURL}`}
              >
                <img src={facebook} alt="facebook icon" />
              </a>
            </li>
            <li>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodedURL}`}
                data-size="large"
              >
                <img src={twitter} alt="twitter icon" />
              </a>
            </li>
            <li>
              {/* //todo LINKEDIN ICON */}
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedURL}`}
                target="_blank"
              >
                <img src={linkedIn} alt="LinkedIn icon" />
              </a>
            </li>
            <li>
              <a href={`mailto:?subject=${post.title}&body=${encodedURL}`}>
                mail img
              </a>
            </li>
          </ul>
          <p className="content">{post.content}</p>
          {/* //todo category tags here */}
        </article>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}

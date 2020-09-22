import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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
      .then((res) => {
        console.log(res.data);
        setPost(res.data[0]);
      })
      .catch((err) => console.log(err));
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
        <p id="loading">No Article Found</p>
      )}
    </>
  );
}

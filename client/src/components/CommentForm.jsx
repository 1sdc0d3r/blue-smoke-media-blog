import React, { useState, useEffect } from "react";
import * as emailjs from "emailjs-com";
import axios from "axios";
import serverURL from "../utils";

export default function CommentForm() {
  const [articleTitles, setArticleTitles] = useState([]);
  useEffect(() => {
    axios
      .get(serverURL[1])
      .then(({ data }) => setArticleTitles(data))
      .catch((err) => console.log(err));
  }, []);
  const [data, setData] = useState({
    name: "",
    email: "",
    date: new Date(),
    comment: "",
    article: "",
    antiSpan: null,
  });

  const onChangeHandler = (evt) => {
    setData({
      ...data,
      [evt.target.name]: evt.target.value,
    });
  };

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    const templateParams = {
      name: data.name,
      email: data.email,
      date: data.date,
      comment: data.comment,
      article: data.article,
    };
    console.log(data);
    // if (data.antiSpam === null) {
    //   emailjs.send(
    //     "service_kys3ouv",
    //     "template_x9c27y2",
    //     templateParams,
    //     "user_AKrWjfONfbrIagrKBIYq0"
    //   );
    // }
    const messageDisplay = document.querySelector(".comments span");

    messageDisplay.style.display = "inline-block";
    setTimeout(() => {
      messageDisplay.style.display = "none";
    }, 5000);

    resetHandler();
  };

  const resetHandler = () => {
    setData({
      name: "",
      email: "",
      date: new Date(),
      comment: "",
      article: "",
      antiSpan: null,
    });
  };

  return (
    <div className="comment-form">
      <div className="top">
        <div>
          <h3>Leave a comment</h3>
          <p>Your email will not be published. All fields are required.</p>
        </div>
        <div className="date">
          <h3>Date</h3>
          <p>
            {`${
              data.date.getUTCMonth() + 1
            }/${data.date.getUTCDate()}/${data.date.getFullYear()}`}
          </p>
        </div>
      </div>
      <form onSubmit={onSubmitHandler}>
        <label for="comment">
          Comment
          <textarea
            name="comment"
            id="comment"
            rows="5"
            value={data.comment}
            onChange={onChangeHandler}
          />
        </label>
        <div className="info">
          <label for="name">
            Name
            <input
              type="text"
              name="name"
              id="name"
              value={data.name}
              onChange={onChangeHandler}
            />
          </label>
          <label for="email">
            Email
            <input
              type="text"
              name="email"
              id="email"
              value={data.email}
              onChange={onChangeHandler}
            />
          </label>
          <label for="article">
            Article
            <select
              id="articleSelect"
              name="article"
              onChange={onChangeHandler}
            >
              {articleTitles.map(({ id, title }) => (
                <option value={`${id}`}>{title}</option>
              ))}
            </select>
          </label>
          <input
            className="antiSpam"
            name="antiSpam"
            type="text"
            onChange={onChangeHandler}
            value={data.antiSpam}
            style={{ display: "none" }}
          />
        </div>
        {/* <div className="actions"> */}
        <button type="submit" className="submit">
          Post Comment
        </button>
      </form>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blog")
      .then(({ data }) => setArticles(data.sort((a, b) => b.date - a.date)))
      .catch((err) => console.log(err));
  }, []);
  console.log(articles);

  return (
    <div className="articles">
      <h1>Articles</h1>
      {/* <div>
        <h4>Filter</h4>
        <ul>
          <li>item</li>
        </ul>
      </div> */}
      <ul>
        {articles.map((e) => (
          <Link to={`/article/${e.id}`}>
            <li key={e.id}>
              <img src={e.imageUrl} alt={e.imageAlt} />
              <div className="content">
                <h2>{e.title}</h2>
                <span>{e.author}</span>
                <p>{e.snippet.split(" ").splice(0, 40).join(" ")}...</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

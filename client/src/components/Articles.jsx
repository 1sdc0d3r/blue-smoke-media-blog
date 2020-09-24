import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const { category, tag } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blog")
      .then(({ data }) => {
        if (category) {
          setArticles(
            data
              .filter((e) => e.category == category)
              .sort((a, b) => b.date - a.date)
          );
        } else if (tag) {
          setArticles(
            data
              .filter((e) => e.tags.includes(tag))
              .sort((a, b) => b.date - a.date)
          );
        } else {
          setArticles(data.sort((a, b) => b.date - a.date));
        }
      })
      .catch((err) => console.log(err));
  }, []);

  console.log({ articles });
  return (
    <div className="articles">
      <h1>
        {category || tag
          ? articles.length
            ? category || tag
            : `No articles found for ${category || tag}`
          : "Articles"}
      </h1>
      <ul>
        {articles.map((e) => (
          <Link to={`/article/${e.id}`}>
            <li key={e.id}>
              <img src={e.imageUrl} alt={e.imageAlt} />
              <div className="content">
                <h2>{e.title}</h2>
                <p className="snippet">{e.snippet}...</p>
                <span className="info">
                  {e.author} {e.date}
                </span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

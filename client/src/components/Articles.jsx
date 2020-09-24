import React, { useEffect, useState } from "react";
import { Link, useParams, withRouter } from "react-router-dom";
import axios from "axios";

export default withRouter(function Articles({ location }) {
  const [articles, setArticles] = useState([]);
  const [query] = useState(Object.entries(useParams())[0]);
  useEffect(() => {
    // console.log("QUERY", query);
    console.log({ location });
    axios
      .get("http://localhost:5000/api/blog")
      .then(({ data }) => {
        if (query) {
          setArticles(
            data
              .filter((e) => {
                return e[query[0]]
                  .toLowerCase()
                  .includes(query[1].toLowerCase());
              })
              .sort((a, b) => b.date - a.date)
          );
        } else {
          setArticles(data.sort((a, b) => b.date - a.date));
        }
      })
      .catch((err) => console.log(err));
  }, [query]);
  //todo change on path change

  console.log({ articles });
  return (
    <div className="articles">
      <h1>
        {query
          ? `${articles.length} articles found for ${query[1]}`
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
});

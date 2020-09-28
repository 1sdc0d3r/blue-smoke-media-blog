import React, { useEffect, useState } from "react";
import { Link, useParams, withRouter } from "react-router-dom";
import axios from "axios";
import Pagination from "./Pagination";
import articleList from "../data/articles.js";

export default withRouter(function Articles({ match }) {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState(Object.entries(useParams())[0]);
  const [pagination, setPagination] = useState({
    limit: 5,
    offset: 0,
    page: 1,
  });

  useEffect(() => {
    setQuery(Object.entries(match.params)[0]);
  }, [match.params]);
  useEffect(() => {
    setPagination({
      limit: 5,
      offset: 0,
      page: 1,
    });
    if (query) {
      setArticles(
        articleList
          .filter((e) => {
            console.log(e[query]);
            return e[query[0]].toLowerCase().includes(query[1].toLowerCase());
          })
          .sort((a, b) => b.date - a.date)
      );
    } else {
      setArticles(articleList.sort((a, b) => b.date - a.date));
    }
  }, [query]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/blog")
  //     .then(({ data }) => {
  //       if (query) {
  //         setArticles(
  //           data
  //             .filter((e) => {
  //               console.log("here2", e[query[0]]);
  //               return e[query[0]]
  //                 .toLowerCase()
  //                 .includes(query[1].toLowerCase());
  //             })
  //             .sort((a, b) => b.date - a.date)
  //         );
  //       } else {
  //         setArticles(data.sort((a, b) => b.date - a.date));
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // }, [query]);
  //todo pagination
  const { offset, limit } = pagination;
  return (
    <div className="articles">
      <h1>
        {query
          ? `${articles.length} articles found for ${query[1]}`
          : "Articles"}
      </h1>
      <ul>
        {articles.slice(offset, offset + limit).map((e) => (
          <Link to={`/article/${e.id}`} key={e.id}>
            <li key={e.id}>
              <img src={e.imageUrl} alt={e.imageAlt} />
              <div className="content">
                <h2>{e.title}</h2>
                <p className="snippet">{e.snippet}...</p>
                <span className="info">
                  {e.author} {e.date ? ` • ${e.date}` : ""}
                </span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      <Pagination
        state={pagination}
        setState={setPagination}
        itemLen={articles.length}
      />
    </div>
  );
});

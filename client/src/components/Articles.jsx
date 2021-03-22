import React, { useEffect, useState } from "react";
import { Link, useParams, withRouter } from "react-router-dom";
import axios from "axios";
import Pagination from "./Pagination";
import serverURL from "../utils";

export default withRouter(function Articles({ match }) {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState(Object.entries(useParams())[0]);
  const [pagination, setPagination] = useState({
    limit: 5,
    offset: 0,
    page: 1,
  });
  const { offset, limit } = pagination;
  console.log(serverURL[1]);

  useEffect(() => {
    setQuery(Object.entries(match.params)[0]);
  }, [match.params]);
  //? todo merge these useEffects?
  useEffect(() => {
    // console.log(process.env);
    setPagination({
      limit: 5,
      offset: 0,
      page: 1,
    });
    axios
      .get(serverURL[1])
      .then(({ data }) => {
        if (query)
          setArticles(
            data.filter((e) =>
              e[query[0]].toLowerCase().includes(query[1].toLowerCase())
            )
          );
        else setArticles(data);
      })
      .catch((err) => console.log(err));
  }, [query]);
  //todo sort by date
  // console.log(new Date(2020, 11));

  return (
    <div className="articles">
      <h1>
        {query
          ? `${articles.length} ${
              articles.length > 1 ? "articles" : "article"
            } found for ${query[1]}`
          : "Articles"}
      </h1>
      <ul>
        {articles.slice(offset, offset + limit).map((e) => (
          <Link to={`/article/${e.id}`} key={e.id}>
            <li key={e.id}>
              <img
                src={`https://bluesmokemedia.s3-us-west-1.amazonaws.com/Blog/thumbnail/${e.imageUrl}`}
                alt={e.imageAlt}
              />
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

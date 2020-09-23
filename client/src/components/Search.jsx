import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Search() {
  // const [queryType, setQueryType] = useState("");
  const [query, setQuery] = useState();
  // const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const excludedKeys = ["id", "imageUrl", "imageAlt"];
  const resultsList = document.querySelector(".search ul");
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blog")
      .then(({ data }) => {
        if (query) {
          resultsList.style.border = "2px solid black";
          setFiltered(
            data.filter((e) => {
              for (var key in e) {
                if (excludedKeys.indexOf(key) == -1) {
                  if (e[key].toString().toLowerCase().includes(query)) {
                    return e;
                  }
                }
              }
            })
          );
        } else {
          resultsList.style.border = "none";
          setFiltered([]);
        }
      })
      .catch((err) => console.log(err));
    console.log(filtered);
  }, [query]);

  return (
    <div className="search">
      <input
        name="search"
        type="text"
        placeholder="Search..."
        onChange={(evt) => setQuery(evt.target.value.toLowerCase())}
      />
      <ul>
        {filtered.map((e) => (
          <Link to={`/article/${e.id}`}>
            <li key={e.id}>
              <h4>{e.title}</h4>
              <span>{e.author}</span>
              <p>{e.snippet.split(" ").splice(0, 20).join(" ")}...</p>
            </li>
          </Link>
        ))}
        <li id="no-results">No Results Found...</li>
      </ul>
    </div>
  );
}

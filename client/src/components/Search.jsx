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
    // console.log(filtered);
  }, [query]);
  //todo set limit then scroll

  return (
    <div className="search">
      <input
        name="search"
        type="text"
        placeholder="Search..."
        onChange={(evt) => setQuery(evt.target.value.toLowerCase())}
        onFocus={() =>
          (document.querySelector(".search ul").style.display = "block")
        }
      />
      <ul>
        {/* todo set dropdown limit w/ scroll */}
        {filtered.map((e) => (
          <Link
            to={`/article/${e.id}`}
            onClick={() => (resultsList.style.display = "none")}
          >
            <li key={e.id}>
              <img src={e.imageUrl} alt={e.imageAlt} />
              <div className="content">
                <h4>{e.title}</h4>
                <span className="info">
                  {e.author} {e.date}
                </span>
                <p>{e.snippet.split(" ").splice(0, 15).join(" ")}...</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [queryType, setQueryType] = useState("");
  const [query, setQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const exclude = ["id", "imageUrl", "imageAlt"];
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blog")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setFiltered(
      posts.filter((e) => {
        for (var key in e) {
          if (exclude.indexOf(key) == -1) {
            if (e[key].toString().toLowerCase().includes(query)) {
              return e;
            }
          }
        }
      })
    );
  }, [query]);

  return (
    <div className="search">
      <h2>Searching for {query}</h2>
      <ul>{filtered.map((e) => e.title)}</ul>
      <input
        onChange={(evt) => setQuery(evt.target.value.toLowerCase())}
        placeholder="Search..."
        name="search"
      />
    </div>
  );
}

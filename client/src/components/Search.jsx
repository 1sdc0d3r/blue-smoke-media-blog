import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Search() {
  const [queryType, setQueryType] = useState("");
  const [query, setQuery] = useState();
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const excludedKeys = ["id", "imageUrl", "imageAlt"];
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/blog")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);
  // todo fix when empty
  useEffect(() => {
    setFiltered(
      posts.filter((e) => {
        for (var key in e) {
          if (excludedKeys.indexOf(key) == -1) {
            if (e[key].toString().toLowerCase().includes(query)) {
              console.log(key, e);
              return e;
            }
          }
        }
      })
    );
  }, [query]);

  return (
    <div className="search">
      <input
        name="search"
        placeholder="Search..."
        onChange={(evt) => setQuery(evt.target.value.toLowerCase())}
      />
      <ul>
        {filtered.map((e) => (
          <li>{e.title}</li>
        ))}
      </ul>
    </div>
  );
}

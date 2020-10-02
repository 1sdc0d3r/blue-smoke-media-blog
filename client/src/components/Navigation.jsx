import React, { useState, useEffect } from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import Search from "./Search";
import Axios from "axios";

export default withRouter(function Navigation({ history }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const searchInput = document.querySelector("input[name='search']");
    const searchResults = document.querySelector(".search ul");
    Axios.get("https://blue-smoke-blog.herokuapp.com/api/blog")
      .then(({ data }) =>
        setCategories(
          Array.from(new Set(data.map(({ category }) => category))).sort()
        )
      )
      .catch((err) => console.log(err));

    history.listen(() => {
      searchInput.value = "";
      searchResults.style.display = "none";
    });
  }, []);

  const dropArrow = (
    <svg className="drop-arrow">
      <polygon points="5,5 13,15 20,5" />
    </svg>
  );
  return (
    <nav className="main-nav">
      <NavLink to="/" className="nav-item">
        Home
      </NavLink>
      <a
        href="https://bluesmokedigitalandprintedmedia.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-item"
      >
        Our Website
      </a>
      <NavLink to="/articles" className="nav-item">
        Articles
      </NavLink>
      <div className="dropdown">
        <button className="drop-btn nav-item">Categories{dropArrow}</button>
        <div className="dropdown-content">
          <ul>
            {categories.map((e) => (
              <li>
                <Link to={`/category/${e}`}>{e}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <a
        href="https://bluesmokedigitalandprintedmedia.com/contact"
        className="nav-item"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </a>
      <Search />
    </nav>
  );
});

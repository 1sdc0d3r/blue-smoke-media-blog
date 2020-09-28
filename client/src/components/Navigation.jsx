import React from "react";
import { NavLink, Link } from "react-router-dom";
import Search from "./Search";
import articleList from "../data/articles";

export default function Navigation() {
  const categories = Array.from(
    new Set(articleList.map(({ category }) => category))
  ).sort();

  const dropArrow = (
    <svg
      style={{
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        color: "#7ff76f",
      }}
    >
      <polygon points="5,5 13,15 20,5" fill="#7ff76f" />
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
      >
        Contact
      </a>
      <Search />
    </nav>
  );
}

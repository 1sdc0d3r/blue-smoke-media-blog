import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import Axios from "axios";
import serverURL from "../utils";

import { FiChevronDown } from "react-icons/fi";

export default withRouter(function DropMenu({ history }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const searchInput = document.querySelector("input[name='search']");
    const searchResults = document.querySelector(".search ul");
    Axios.get(serverURL[1])
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
  history.listen(() => {
    document.getElementById("menu").classList.remove("show-drop");
  });
  const chevron = <FiChevronDown color="#f52618" />;
  return (
    <nav role="navigation" className="drop-menu">
      <h2
        onClick={() => {
          const menu = document.getElementById("menu");
          dropdown("menu");
          if (menu.classList.contains("show-drop"))
            document
              .getElementById("categories-content")
              .classList.remove("show-drop");
        }}
      >
        Menu
      </h2>
      <ul id="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a
            href="https://www.bluesmokedigitalandprintedmedia.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Our Website
          </a>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li
          id="categories"
          onClick={() => dropdown("categories-content", "categories")}
        >
          Categories{chevron}
        </li>
        <ul id="categories-content" className="drop-content">
          {categories.map((e, i) => (
            <li key={i}>
              <Link to={`/category/${e}`}>{e}</Link>
            </li>
          ))}
        </ul>
        <li>
          <a
            href="https://bluesmokedigitalandprintedmedia.com/contact"
            className="nav-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
});

function dropdown(list, active) {
  document.getElementById(list).classList.toggle("show-drop");
  const orange = "rgb(251, 52, 0)";
  const blue = "#1e92f6";

  if (active) {
    const aStyle = document.getElementById(active).style;
    aStyle.color === orange ? (aStyle.color = blue) : (aStyle.color = orange);
  }
  // todo close sub drop menu's on closing of menu
  // if (active === "services") {
  //   const categoryList = document.getElementsByClassName("sub-drop-content");
  //   // console.log(categoryList);
  //   for (let i = 0; i < categoryList.length; i++) {
  //     console.log(categoryList[i]);
  //     categoryList[i].classList.remove("show-drop");
  //     categoryList[i].style.color = blue;
  //   }
  // }
}

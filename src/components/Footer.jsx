import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <div className="top">
          <div className="about">
            <h3>
              Blue Smoke <span>Digital and Printed Media</span>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem neque repellendus!
            </p>
          </div>
          <div className="newsletter">
            <h3>Get the Newsletter</h3>
            <div>
              <input type="text" placeholder="Your email" />
              <button>Join Now!</button>
            </div>
          </div>
          <div className="follow">
            <p>FB</p>
            <p>TW</p>
            <p>LI</p>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <p className="copy">
            © 2019-2020 Blue Smoke Digital and Printed Media
          </p>
          <div className="sitemap">
            <NavLink to="#about">about</NavLink>
            <NavLink to="#contact">contact</NavLink>
            <NavLink to="#fashion">fashion</NavLink>
            <NavLink to="#music">music</NavLink>
            <NavLink to="#design">design</NavLink>
            <NavLink to="#lifestyle">lifestyle</NavLink>
            <NavLink to="#travel">travel</NavLink>
            <NavLink to="#photo">photo</NavLink>
            <NavLink to="#food">food</NavLink>
            <NavLink to="#tech">tech</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

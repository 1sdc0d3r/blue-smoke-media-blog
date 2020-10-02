import React from "react";
import { Link, withRouter } from "react-router-dom";
import Search from "./Search";

export default withRouter(function HamburgerMenu({ history }) {
  history.listen(() => {
    document.querySelector("input[type='checkbox']").checked = false;
  });
  return (
    <nav role="navigation" className="hamburger-menu">
      <div id="menuToggle">
        {/* <!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    --> */}
        <input type="checkbox" />
        {/* Spans act as a hamburger */}
        <span />
        <span />
        <span />

        <ul id="menu">
          <Link to="/">
            {" "}
            <li>Home</li>
          </Link>
          <a
            href="https://bluesmokedigitalandprintedmedia.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>Our Website</li>
          </a>
          <Link to="/articles">
            <li>Articles</li>
          </Link>
          <li className="sub-menu-btn" uk-icon="icon: triangle-right">
            Categories
          </li>
          <ul className="sub-drop-menu">
            <div className="dropdown-content">
              <ul>
                <li>
                  <Link to="/category/Ad-Copywriting">Ad-Copywriting</Link>
                </li>
                <li>
                  <Link to="/category/Affordable Custom Website Design">
                    Affordable Custom Website Design
                  </Link>
                </li>
                <li>
                  <Link to="/category/Brand Loyalty">Brand Loyalty</Link>
                </li>
                <li>
                  <Link to="/category/Coding and Programming">
                    Coding and Programming
                  </Link>
                </li>
                <li>
                  <Link to="/category/Consumer Loyalty">Consumer Loyalty</Link>
                </li>
                <li>
                  <Link to="/category/Digital and Print Logo Design">
                    Digital and Print Logo Design
                  </Link>
                </li>
                <li>
                  <Link to="/category/Digital Graphic Design">
                    Digital Graphic Design
                  </Link>
                </li>
                <li>
                  <Link to="/category/E-Commerce Website Development">
                    E-Commerce Website Development
                  </Link>
                </li>
                <li>
                  <Link to="/category/Organic SEO">Organic SEO</Link>
                </li>
                <li>
                  <Link to="/category/Printed Media Graphic Design">
                    Printed Media Graphic Design
                  </Link>
                </li>
                <li>
                  <Link to="/category/Reputation Management">
                    Reputation Management
                  </Link>
                </li>
                <li>
                  <Link to="/category/Search Engine Optimization (SEO)">
                    Search Engine Optimization (SEO)
                  </Link>
                </li>
                <li>
                  <Link to="/category/Strategic Social Media Marketing">
                    Strategic Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/category/Typography">Typography</Link>
                </li>
                <li>
                  <Link to="/category/Website Content Writing">
                    Website Content Writing
                  </Link>
                </li>
                <li>
                  <Link to="/category/Website Maintenance">
                    Website Maintenance
                  </Link>
                </li>
                <li>
                  <Link to="/category/Website Usability: It EQUALS SALES!">
                    Website Usability: It EQUALS SALES!
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
          <a
            href="https://bluesmokedigitalandprintedmedia.com/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
});

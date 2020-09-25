import React from "react";
import { NavLink, Link } from "react-router-dom";
import Search from "./Search";

export default function Navigation() {
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
      </div>
      {/* todo direct to contact on website */}
      <NavLink to="/contact" className="nav-item">
        Contact
      </NavLink>
      <Search />
    </nav>
  );
}

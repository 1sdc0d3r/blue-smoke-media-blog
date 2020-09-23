import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import Search from "./Search";

export default function Navigation(props) {
  const dropArrow = (
    <svg
      style={{
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        color: "#7ff76f",
      }}
    >
      <polygon points="7.5 10.5 20.5 10.5 15 18"></polygon>
    </svg>
  );
  return (
    <nav className="main-nav">
      <div className="dropdown">
        <NavLink to="/" className="nav-item">
          Home
        </NavLink>
      </div>
      <a
        href="#blog"
        target="_blank"
        rel="noopener noreferrer"
        className="nav-item"
      >
        Our Website
      </a>
      <div className="dropdown">
        <button className="drop-btn nav-item">
          Categories
          {dropArrow}
        </button>
        <div className="dropdown-content">
          <ul>
            <li>Ad-Copywriting</li>
            <li>Affordable Custom Website Design</li>
            <li>Brand Loyalty</li>
            <li>Coding and Programming</li>
            <li>Consumer Loyalty</li>
            <li>Digital and Print Logo Design</li>
            <li>Digital Graphic Design</li>
            <li>E-Commerce Website Development</li>
            <li>Organic SEO</li>
          </ul>
          <ul>
            <li>Printed Media Graphic Design</li>
            <li>Reputation Management</li>
            <li>Search Engine Optimization (SEO)</li>
            <li>Strategic Social Media Marketing</li>
            <li>Typography</li>
            <li>Website Content Writing</li>
            <li>Website Maintenance</li>
            <li>Website Usability: It EQUALS SALES!</li>
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

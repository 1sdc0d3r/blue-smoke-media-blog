import React from "react";
import { NavLink, withRouter } from "react-router-dom";
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
            <li>Ad-Copywriting</li>
            <li>Affordable Custom Website Design</li>
            <li>Brand Loyalty</li>
            <li>Coding and Programming</li>
            <li>Consumer Loyalty</li>
            <li>Digital and Print Logo Design</li>
            <li>Digital Graphic Design</li>
            <li>E-Commerce Website Development</li>
            <li>Organic SEO</li>
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

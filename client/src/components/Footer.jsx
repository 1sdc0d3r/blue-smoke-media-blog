import React, { useEffect, useRef, useLayoutEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".ctct-form-element").placeholder = "Your Email";
    }, 2000);
  }, []);
  return (
    <footer>
      <div className="wrapper">
        <div className="top">
          <div className="about">
            <h3>
              Blue Smoke <span>Digital and Printed Media</span>
            </h3>
            <p>
              P.O. Box 813
              <br />
              Erwin, TN 37650
            </p>
          </div>
          <div className="newsletter">
            <h4>The Inside Scoope</h4>
            {/* <!-- Constant Contact Form --> */}
            <div
              className="ctct-inline-form ctct-form"
              data-form-id="3b0b5c17-e6f4-4707-8090-bb39de378c16"
            />
          </div>
          <div className="follow">
            <p>Follow Us</p>
            <div className="icons">
              <p>FB</p>
              <p>LI</p>
              <p>TW</p>
            </div>
          </div>
        </div>
        <hr />

        <div className="bottom">
          <p className="copy">
            © 2019-2020 Blue Smoke Digital and Printed Media
          </p>
          {/* todo links */}
          <div>
            <NavLink to="#team">about</NavLink>
            <NavLink to="#inquiry">contact</NavLink>
          </div>
          {/* 
          <NavLink to="#custom">Custom Website Design</NavLink>
          <NavLink to="#music">Organic SEO</NavLink>
          <NavLink to="#design">Social Media Marketing</NavLink>
          <NavLink to="#lifestyle">Brand Loyalty</NavLink>
          <NavLink to="#travel">Logos</NavLink>
  <NavLink to="#photo">Reputation Management</NavLink>*/}
        </div>
      </div>
    </footer>
  );
}

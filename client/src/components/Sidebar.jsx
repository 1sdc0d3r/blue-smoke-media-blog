import React from "react";
// import { Link } from "react-router-dom";
// todo check facebook on navigation to home
export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="popular">
          <h4>Most Popular</h4>
          {/* <Link>tag1</Link>
          <Link>tag1</Link>
          <Link>tag1</Link>
          <Link>tag1</Link>
          <Link>tag1</Link>
          <Link>tag1</Link> */}
        </div>
        <div className="topics">
          <h4>Popular Topics</h4>
          {/* <span className="coming-soon">Coming Soon!</span> */}
        </div>
        <div className="newsletter">
          <p>
            Get an <span>Inside Look</span> to Help Compete With the Big Guys!
          </p>
          <div
            className="ctct-inline-form ctct-form"
            data-form-id="3b0b5c17-e6f4-4707-8090-bb39de378c16"
          />
          {/* <span id="newsletter-message">{newsletterMessage}</span>
            <input type="text" name="email" placeholder="Enter Your Email" />
            <input name="antiSpam" type="text" style={{ display: "none" }} />
            <button type="submit" onClick={() => registerEmail()}>
              Sign Up
            </button> */}
        </div>
        <div className="facebook">
          <p>Like Us On Facebook</p>
          <div
            className="fb-page"
            data-href="https://www.facebook.com/bluesmokemedia/"
            data-tabs=""
            data-width=""
            data-height=""
            data-small-header="false"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="true"
          >
            <blockquote
              cite="https://www.facebook.com/bluesmokemedia/"
              className="fb-xfbml-parse-ignore"
            >
              <a
                href="https://www.facebook.com/bluesmokemedia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blue Smoke Digital and Printed Media
              </a>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
}
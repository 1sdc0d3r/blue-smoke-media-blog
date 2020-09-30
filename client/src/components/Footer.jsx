import React, { useEffect } from "react";
//* Images
import twitter from "../assets/Twitter.png";
import linkedIn from "../assets/linkedIn_social_media_button.png";
import facebook from "../assets/faceBook.png";

export default function Footer() {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".ctct-form-element").placeholder = "Your Email";
    }, 3500);
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
              <a
                href="https://www.facebook.com/bluesmokemedia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebook} alt="Facebook Social Media Button" />
              </a>
              <a
                href="https://twitter.com/bluesmokemedia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="Twitter Social Media Button" />
              </a>
              <a
                href="https://www.linkedin.com/company/blue-smoke-digital-and-printed-media/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedIn} alt="LinkedIn Social Media Button" />
              </a>
            </div>
          </div>
        </div>
        <hr />

        <div className="bottom">
          <p className="copy">
            © 2019-2020 Blue Smoke Digital and Printed Media
          </p>
          <div>
            <a
              href="https://bluesmokedigitalandprintedmedia.com/team"
              target="_blank"
              rel="noopener noreferrer"
            >
              about
            </a>
            <a
              href="https://bluesmokedigitalandprintedmedia.com/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

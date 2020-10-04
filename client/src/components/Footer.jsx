import React from "react";
//* Images
const twitter =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/Blog/social+media/twitter.png";
const facebook =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/Blog/social+media/facebook.png";
const linkedIn =
  "https://blue-smoke-media.s3-us-west-1.amazonaws.com/Blog/social+media/linkedIn.png";

export default function Footer() {
  // useEffect(() => {
  //   setTimeout(() => {
  //   }, 3500);
  // }, []);

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
            <h4>The Inside Scoop</h4>
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

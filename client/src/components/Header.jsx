import React from "react";
const blueSmoke =
  "https://bluesmokemedia.s3-us-west-1.amazonaws.com/blue-smoke.webp";
const flame = "https://bluesmokemedia.s3-us-west-1.amazonaws.com/flame.webp";
const silhouettes =
  "https://bluesmokemedia.s3-us-west-1.amazonaws.com/black-silhouettes.webp";

export default function Header() {
  return (
    <header>
      <img src={flame} alt="logo-flame" id="flame" />
      <div className="blue-smoke">
        <img src={blueSmoke} alt="blue-smoke" />
        <p>Digital and Printed Media</p>
      </div>
      <div className="center">
        <p>
          Getting <span>your</span> business
        </p>
        <p>
          <span>Back</span> into Business!!
        </p>
      </div>
      <div className="silhouette-div">
        <img
          src={silhouettes}
          alt="people silhouettes"
          className="silhouettes"
        />
      </div>
    </header>
  );
}

import React from "react";
import phone from "../assets/phone.png";
import email from "../assets/Mail Icon.png";

export default function cta() {
  return (
    <div className="cta">
      <p>
        Request
        <br /> A <span>FREE</span>
        <br />
        Consultation
      </p>
      <div className="btns">
        <a href="mailto:services@bluesmokemedia.net">
          <img src={email} alt="contact-mail" className="cta-mail cta-btn" />
        </a>
        <a href="tel:+1.865.274.1371‬">
          <img src={phone} alt="contact-phone" className="cta-phone cta-btn" />
        </a>
      </div>
    </div>
  );
}

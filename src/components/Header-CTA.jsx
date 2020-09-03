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
        {/* //todo email here */}
        <a href="mailto:email.com">
          <img src={email} alt="contact-mail" className="cta-mail cta-btn" />
        </a>
        <a href="tel:+1 801.690.1189">
          <img src={phone} alt="contact-phone" className="cta-phone cta-btn" />
        </a>
      </div>
    </div>
  );
}

import React from "react";
import "./Footer.scss";

// Component
const Footer = () => (
  <footer className="footer">
    <div style={{ marginBottom: "10px" }}>
      <a href="https://github.com/mohamasia" className="footer-link">
        About me
      </a>
      <a href="/privacy" className="footer-link">
        Privacy Policy
      </a>
      <a href="/terms" className="footer-link">
        Terms & Conditions
      </a>
    </div>
    <div>
      © {new Date().getFullYear()} Asia Mohammed. All rights reserved.
    </div>
  </footer>
);

export default Footer;

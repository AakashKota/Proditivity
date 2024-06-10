import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";

import Marquee from "./marquee";


function Footer() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
    <div className="footer1">
    <Marquee />
    </div>
    
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section company-info">
          <h4>Offices</h4>
          <p>Khazipet,</p>
          <p>Warangal,</p>
          <p>Telangana</p>
          <br/>
          <h4>Email</h4>
          <p>info@poditivity.com</p>
          <p>poditivity.company@gmail.com</p>
        </div>
        <div className="footer-section quick-links">
          <h4>Quick Links</h4>
          <p>Home</p>
          <p>Services</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="footer-section social-media">
          <h4>Follow Us</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Instagram</p>
        </div>
        <div className="footer-section contact-info">
          <h4>Contact Us</h4>
          <p>Email: info@company.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Street, City, Country</p>
        </div>
      </div>
    </footer>
  
    </>
  );
}

export default Footer;

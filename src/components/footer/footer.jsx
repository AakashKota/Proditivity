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
    <h4>Let's Pod Together</h4>
    <img src="https://i0.wp.com/www.techdigest.tv/wp-content/uploads/2021/02/get-it-on-google-play-badge.png?ssl=1" style={{ width: '150px', height: '50px', margin: '0px' }} />
    <img src="https://freeiconshop.com/wp-content/uploads/edd/app-store-badge.png" style={{ width: '150px', height: '150px', marginLeft: '30px', marginBottom: '0px' }} />
    <div/>
    <div className="footer-section quick-links">
    <h5>Certified By</h5>
    <img src="https://www.globemoving.net/wp-content/uploads/2016/04/start-up-1-1024x420.png" style={{width:'100px', height:'50px'}}/>
  
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYGIHPDntPteVnPmuNSLm3mdJJ4RwzASkRN4CEoEYqCVH7UjwhfqoIOahR&amp;s=10" style={{width:'100px', height:'50px', marginLeft:'30px'}} />
    </div>
</div>

        
        
      </div>
    </footer>
  
    </>
  );
}

export default Footer;

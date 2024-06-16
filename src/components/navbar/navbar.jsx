import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { MdOutlineEmail } from "react-icons/md";


function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <div className="navbar-container">
        <div className="hi-line">Hello! <p className="hi-line1">Welcome to PODITIVITY.</p></div>
        <div className="hi-line2">
  <MdOutlineEmail size={20} style={{ marginRight: '5px'}} />
  Poditivity.company@gmail.com
</div>

      </div>
      <nav className="navbar">
        <div className="nav-container">
          <hr className="hr" />
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/student"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                For Students
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Institute"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                For Institutions
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/poditivitycenter"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Poditivity Center
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact us
              </NavLink>
            </li>
            <li className="nav-item">
              <div className="login">
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Sign In/ Login
                </NavLink>
              </div>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
              <span className="icon">
                {/* <HamburgetMenuOpen /> */}
              </span>
            ) : (
              <span className="icon">
                {/* <HamburgetMenuClose /> */}
              </span>
            )}
          </div>
        </div>
      </nav>
      <br />
    </>
  );
}

export default NavBar;

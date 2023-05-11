import React from "react";
import { NavbarContainer } from "./navbarStyle";
import Logo from "../../assets/tiizLogo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        <img src={Logo} alt="Tiiza Logo" />
      </div>
      <ul className="navbar__links">
        <li className="Home hide">Help</li>
        <li className="hide">Create Report</li>
        <li className="hide">Contact Us</li>
        <Link to="/login">
          <button className="btnn">Login</button>
        </Link>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;

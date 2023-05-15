import React from "react";
import { NavbarContainer } from "./navbarStyle";
import Logo from "../../assets/tiizLogo.svg";
// import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { MenuModalState } from "../../atoms/menu";
import Menu from "../Modal/Menu/menu";

const Navbar = () => {
  const [logOut, setLogOut] = useRecoilState(MenuModalState);
  const handleClick = () => {
    setLogOut(true);
  };

  return (
    <NavbarContainer>
      <div>
        <a href="/">
          <img src={Logo} alt="Tiiza Logo" />
        </a>
      </div>
      <ul className="navbar__links">
        <a href="/help">
          <li className="Home hide">Help</li>
        </a>
        <a href="/report-lost-item">
          <li className="hide">Create Report</li>
        </a>
        <li className="hide">Contact Us</li>
        <div className="menu">
          <li className="hide" onClick={handleClick}>
            My account
          </li>
          {logOut && <Menu />}
        </div>
        {/* <Link to="/login">
          <button className="btnn">Login</button>
        </Link> */}
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;

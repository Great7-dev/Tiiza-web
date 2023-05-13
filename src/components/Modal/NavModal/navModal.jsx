import React from "react";
import Logo2 from "../../../assets/Vector(3).svg";
import Logo3 from "../../../assets/Vector(4).svg";
import Logo4 from "../../../assets/Vector(2).svg";
import Logo5 from "../../../assets/Vector(5).svg";
import Logo6 from "../../../assets/Vector(6).svg";
import Logo7 from "../../../assets/Vector(7).svg";
import Logo9 from "../../../assets/Vector(9).svg";
import { NavModalContainer } from "../../Founditems/founditemsStyle";

const NavModal = () => {
  return (
    <NavModalContainer>
      <div className="nav-cont">
        <div className="nav">
          <div className="list-cont">
            <div className="nav-list">
              <img src={Logo2} alt="logo2" className="dash" />
              <a href="/dashboard">
                <p>Dashboard</p>
              </a>
            </div>
            <div className="nav-list">
              <img src={Logo3} alt="logo2" className="dash" />
              <a href="/report-lost-item">
                <p>Report lost item</p>
              </a>
            </div>
            <div className="nav-list">
              <img src={Logo4} alt="logo2" className="dash" />
              <a href="/report-found-item">
                <p>Report found item</p>
              </a>
            </div>
            <div className="nav-list">
              <img src={Logo5} alt="logo2" className="dash" />
              <a href="/subscription">
                <p>Subscription</p>
              </a>
            </div>
            <div className="nav-list">
              <img src={Logo6} alt="logo2" className="dash" />
              <a href="/all-missing-items">
                <p>All missing items</p>
              </a>
            </div>
            <div className="nav-list">
              <img src={Logo9} alt="logo2" className="dash" />
              <a href="/found-items">
                <p>Found Item</p>
              </a>
            </div>
            <div className="nav-list">
              <img src={Logo7} alt="logo2" className="dash" />
              <a href="/">
                <p>Community</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </NavModalContainer>
  );
};

export default NavModal;

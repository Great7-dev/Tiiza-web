import React from "react";
import { NavigationContainer } from "./navigationStyle";
import Logo from "../../../assets/car.svg";
import Logo2 from "../../../assets/Vector(3).svg";
import Logo3 from "../../../assets/Vector(4).svg";
import Logo4 from "../../../assets/Vector(2).svg";
import Logo5 from "../../../assets/Vector(5).svg";
import Logo6 from "../../../assets/Vector(6).svg";
import Logo7 from "../../../assets/Vector(7).svg";
import Logo9 from "../../../assets/Vector(9).svg";

const Navigation = () => {
  return (
    <NavigationContainer>
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
              <a href="/">
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
        <div className="details">
          <div className="img-cont">
            <div className="deta-con">
              <h1 className="detal">Lexus RX33O</h1>
              <p className="detal">Color: Red</p>
              <p className="detal">Missing: 3days ago</p>
              <p className="detal">Last seen: Lekki</p>
            </div>
            <div className="imgcontainer">
              <img src={Logo} alt="logo" className="img" />
            </div>
          </div>
        </div>
      </div>
    </NavigationContainer>
  );
};

export default Navigation;

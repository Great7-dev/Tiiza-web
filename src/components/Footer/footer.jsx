import React from "react";
import { FooterContainter } from "./footerStyle";
import Logo from "../../assets/Vector.svg";
import Logo2 from "../../assets/image3.svg";

const Footer = () => {
  return (
    <FooterContainter>
      <div className="contentCont">
        <div className="compCont">
          <h2>Company</h2>
          <p>Our Story</p>
          <p>Blog</p>
          <p>Contact Us</p>
          <p>Carreers</p>
        </div>
        <div className="SuppCont">
          <h2>Support</h2>
          <p className="subtext">Help Center</p>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
        <div className="download">
          <h2 className="downloadText">Download the App</h2>
          <div className="apps">
            <div className="apple">
              <img src={Logo} alt="apple" />
              <p className="DownloadSub">
                Download on the
                <br /> App Store
              </p>
            </div>
            <div className="apple">
              <img src={Logo2} alt="apple" className="googleimg" />
              <p className="DownloadSub">
                Download on the
                <br /> Google Play
              </p>
            </div>
          </div>
        </div>
      </div>
    </FooterContainter>
  );
};

export default Footer;

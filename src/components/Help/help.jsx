import React from "react";
import Footer from "../Footer/footer";
import { HelpContainer } from "./helpStyle";

const Help = () => {
  return (
    <HelpContainer>
      <div className="header">
        <h1 className="sub">Help</h1>
      </div>
      <div className="grid-container">
        <div className="grid-item">
          <p className="text">QR CODE TRACKER</p>
        </div>
        <div className="grid-item">
          <p className="text">BLUETOOTH TRACKER</p>
        </div>
        <div className="grid-item">
          <p className="text">GPS TRACKER</p>
        </div>
      </div>
      <Footer />
    </HelpContainer>
  );
};

export default Help;

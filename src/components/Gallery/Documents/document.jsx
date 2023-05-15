import React from "react";
import { DocumentContainer } from "./documentStyle";
import Logo from "../../../assets/Doc.svg";

const Document = () => {
  return (
    <DocumentContainer>
      <div className="header">
        <h1 className="sub">
          Save all your important things you don’t want to lose
        </h1>
      </div>
      <div className="gallery-cont">
        <div className="sub-text">
          <p className="text"> Document</p>
        </div>
        <div className="img-cont">
          <img src={Logo} alt="img" className="img" />
          <p className="doctext">Tiiza board meeting file</p>
          <p className="docdate">10/20/2023</p>
        </div>
        <div className="img-cont">
          <img src={Logo} alt="img" className="img" />
          <p className="doctext">Tiiza board meeting file</p>
          <p className="docdate">10/20/2023</p>
        </div>
        <div className="img-cont">
          <img src={Logo} alt="img" className="img" />
          <p className="doctext">Tiiza board meeting file</p>
          <p className="docdate">10/20/2023</p>
        </div>
        <div className="img-cont">
          <img src={Logo} alt="img" className="img" />
          <p className="doctext">Tiiza board meeting file</p>
          <p className="docdate">10/20/2023</p>
        </div>
        <div className="img-cont">
          <img src={Logo} alt="img" className="img" />
          <p className="doctext">Tiiza board meeting file</p>
          <p className="docdate">10/20/2023</p>
        </div>
        <div className="img-cont">
          <img src={Logo} alt="img" className="img" />
          <p className="doctext">Tiiza board meeting file</p>
          <p className="docdate">10/20/2023</p>
        </div>
        <div className="img-cont">
          <img src={Logo} alt="img" className="img" />
          <p className="doctext">Tiiza board meeting file</p>
          <p className="docdate">10/20/2023</p>
        </div>
      </div>
    </DocumentContainer>
  );
};

export default Document;

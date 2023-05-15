import React from "react";
import { VidContainer } from "./videosStyle";
import Logo from "../../../assets/Vid.svg";

const Videos = () => {
  return (
    <VidContainer>
      <div className="header">
        <h1 className="sub">
          Save all your important things you don’t want to lose
        </h1>
      </div>
      <div className="gallery-cont">
        <div className="sub-text">
          <p className="text"> Videos</p>
        </div>
        <div className="img-cont">
          <img src={Logo} alt="img" className="img" />
          <p className="doctext">My Project from ozone</p>
          <p className="docdate">10/20/2023</p>
        </div>
      </div>
    </VidContainer>
  );
};

export default Videos;

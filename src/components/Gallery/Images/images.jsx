import React from "react";
import { ImageContainer } from "./imagesStyle";
import Logo from "../../../assets/Addidas.svg";

const Images = () => {
  return (
    <ImageContainer>
      <div className="header">
        <h1 className="sub">
          Save all your important things you don’t want to lose
        </h1>
      </div>
      <div className="gallery-cont">
        <div className="sub-text">
          <p className="text"> Images</p>
        </div>
        <div className="img-cont">
          <img src={Logo} alt="img" className="img" />
          <div className="doctext">
            <p>Adiddas Bag</p>
            <p>Color: Blue</p>
          </div>
          <p className="docdate">10/20/2023</p>
        </div>
        <div className="img-cont">
          <img src={Logo} alt="img" className="img" />
          <div className="doctext">
            <p>Adiddas Bag</p>
            <p>Color: Blue</p>
          </div>
          <p className="docdate">10/20/2023</p>
        </div>
        <div className="img-cont">
          <img src={Logo} alt="img" className="img" />
          <div className="doctext">
            <p>Adiddas Bag</p>
            <p>Color: Blue</p>
          </div>
          <p className="docdate">10/20/2023</p>
        </div>
        <div className="img-cont">
          <img src={Logo} alt="img" className="img" />
          <div className="doctext">
            <p>Adiddas Bag</p>
            <p>Color: Blue</p>
          </div>
          <p className="docdate">10/20/2023</p>
        </div>
        <div className="img-cont">
          <img src={Logo} alt="img" className="img" />
          <div className="doctext">
            <p>Adiddas Bag</p>
            <p>Color: Blue</p>
          </div>
          <p className="docdate">10/20/2023</p>
        </div>
        <div className="img-cont">
          <img src={Logo} alt="img" className="img" />
          <div className="doctext">
            <p>Adiddas Bag</p>
            <p>Color: Blue</p>
          </div>
          <p className="docdate">10/20/2023</p>
        </div>
        <div className="img-cont">
          <img src={Logo} alt="img" className="img" />
          <div className="doctext">
            <p>Adiddas Bag</p>
            <p>Color: Blue</p>
          </div>
          <p className="docdate">10/20/2023</p>
        </div>
        <div className="img-cont">
          <img src={Logo} alt="img" className="img" />
          <div className="doctext">
            <p>Adiddas Bag</p>
            <p>Color: Blue</p>
          </div>
          <p className="docdate">10/20/2023</p>
        </div>
      </div>
    </ImageContainer>
  );
};

export default Images;

import React from "react";
import { AllmissingContainer } from "./allmissingStyle";
import Carousel from "react-elastic-carousel";
import Logo from "../../../../src/assets/car.svg";

const breakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Allmissing = () => {
  return (
    <AllmissingContainer>
      <div className="mising-cont">
        <div className="header">
          <h1 className="missing">All missing item</h1>
        </div>
        <Carousel breakPoints={breakpoints} pagination={false}>
          <div className="slide">
            <img src={Logo} alt="logo" className="logo" />
            <div className="slide__text1">
              <div className="deta-con">
                <h1 className="text2">Name: Lexus RX33O</h1>
                <p className="text2">Color: Red</p>
                <p className="text2">Missing: 3days ago</p>
                <p className="text2">Last seen: Lekki</p>
              </div>
            </div>
          </div>
          <div className="slide">
            <img src={Logo} alt="logo" className="logo" />
            <div className="slide__text1">
              <div className="deta-con">
                <h1 className="text2">Name: Lexus RX33O</h1>
                <p className="text2">Color: Red</p>
                <p className="text2">Missing: 3days ago</p>
                <p className="text2">Last seen: Lekki</p>
              </div>
            </div>
          </div>
          <div className="slide">
            <img src={Logo} alt="logo" className="logo" />
            <div className="slide__text1">
              <div className="deta-con">
                <h1 className="text2">Name: Lexus RX33O</h1>
                <p className="text2">Color: Red</p>
                <p className="text2">Missing: 3days ago</p>
                <p className="text2">Last seen: Lekki</p>
              </div>
            </div>
          </div>
          <div className="slide">
            <img src={Logo} alt="logo" className="logo" />
            <div className="slide__text1">
              <div className="deta-con">
                <h1 className="text2">Name: Lexus RX33O</h1>
                <p className="text2">Color: Red</p>
                <p className="text2">Missing: 3days ago</p>
                <p className="text2">Last seen: Lekki</p>
              </div>
            </div>
          </div>
          <div className="slide">
            <img src={Logo} alt="logo" className="logo" />
            <div className="slide__text1">
              <div className="deta-con">
                <h1 className="text2">Name: Lexus RX33O</h1>
                <p className="text2">Color: Red</p>
                <p className="text2">Missing: 3days ago</p>
                <p className="text2">Last seen: Lekki</p>
              </div>
            </div>
          </div>
          <div className="slide">
            <img src={Logo} alt="logo" className="logo" />
            <div className="slide__text1">
              <div className="deta-con">
                <h1 className="text2">Name: Lexus RX33O</h1>
                <p className="text2">Color: Red</p>
                <p className="text2">Missing: 3days ago</p>
                <p className="text2">Last seen: Lekki</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </AllmissingContainer>
  );
};

export default Allmissing;
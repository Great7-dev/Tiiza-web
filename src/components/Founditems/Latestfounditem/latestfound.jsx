import React from "react";
import Carousel from "react-elastic-carousel";
import Logo from "../../../../src/assets/car.svg";
import { LatestfoundContainer } from "./latestfoundStyle";
import Logo2 from "../../../../src/assets/guccibag.svg";
import Logo3 from "../../../../src/assets/Housekey.svg";
import Logo4 from "../../../../src/assets/Videos.svg";

const breakpoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Latestfound = () => {
  return (
    <LatestfoundContainer>
      <div className="mising-cont">
        <div className="header">
          <h1 className="missing">Latest found item</h1>
        </div>
        <Carousel breakPoints={breakpoints} pagination={false}>
          <div className="slide">
            <img src={Logo4} alt="logo" className="logo" />
            <div className="slide__text1">
              <div className="deta-con">
                <h1 className="text2">Name: Backpack</h1>
                <p className="text2">Color: Orange</p>
                <p className="text2">Missing: 3days ago</p>
                <p className="text2">Last seen: Banana Island</p>
              </div>
            </div>
          </div>
          <div className="slide">
            <img src={Logo2} alt="logo" className="logo" />
            <div className="slide__text1">
              <div className="deta-con">
                <h1 className="text2">Name: Gucci Bag</h1>
                <p className="text2">Color: Brown</p>
                <p className="text2">Missing: 3days ago</p>
                <p className="text2">Last seen: Sululere</p>
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
            <img src={Logo2} alt="logo" className="logo" />
            <div className="slide__text1">
              <div className="deta-con">
                <h1 className="text2">Name: Gucci Bag</h1>
                <p className="text2">Color: Brown</p>
                <p className="text2">Missing: 3days ago</p>
                <p className="text2">Last seen: Sululere</p>
              </div>
            </div>
          </div>
          <div className="slide">
            <img src={Logo3} alt="logo" className="logo" />
            <div className="slide__text1">
              <div className="deta-con">
                <h1 className="text2">Name: House Key</h1>
                <p className="text2">Color: Sliver</p>
                <p className="text2">Missing: 3days ago</p>
                <p className="text2">Last seen: Sangotedo</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </LatestfoundContainer>
  );
};

export default Latestfound;

import React, { useEffect, useRef } from "react";
import { AweekContainer } from "./aweekStyle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo from "../../../../src/assets/car.svg";

const Aweek = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Start autoplaying when the component mounts
    sliderRef.current.slickPlay();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <AweekContainer>
      <div className="mising-cont">
        <div className="header">
          <h1 className="missing">A week ago</h1>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {/* {items.map((item, index) => ( */}
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
          {/* ))} */}
        </Slider>
      </div>
    </AweekContainer>
  );
};

export default Aweek;

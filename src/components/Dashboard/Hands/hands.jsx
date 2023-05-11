import React from "react";
import { HandContainer } from "./handStyle";
import Logo from "../../../assets/Hands.svg";

const Hands = () => {
  return (
    <HandContainer>
      <div className="cont">
        <div className="img-text">
          <img src={Logo} alt="logo" className="img" />
          <p className="text">
            With Tiiza community you are <br /> not alone searching for your{" "}
            <br />
            missing items. Your worry is ours <br /> too{" "}
          </p>
        </div>
      </div>
    </HandContainer>
  );
};

export default Hands;

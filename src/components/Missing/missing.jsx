import React from "react";
import { MissingContainer } from "./missingStyle";
import Logo from "../../assets/wallet.svg";

const Missing = () => {
  return (
    <MissingContainer>
      <div className="missingcontainer">
        <img src={Logo} alt="Tiiza Logo" className="img" />
        <div className="textCont">
          <h1 className="header">Found the missing item.</h1>
          <p className="sub-text">
            You have been looking for your missing item <br /> and can not
            remember how it got lost or the <br /> last place it got missing,
            use the Tiiza platform <br /> to reach out to the world for help
          </p>
        </div>
      </div>
    </MissingContainer>
  );
};

export default Missing;

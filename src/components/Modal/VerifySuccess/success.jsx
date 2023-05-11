import React from "react";
import { EmailModalContainer } from "../EmailModal/emailModalStyle";
import Logo from "../../../assets/Ellipse65.svg";
import Logo2 from "../../../assets/Vector(1).svg";
import { StyledButton } from "../../Register/registerStyle";

const Success = () => {
  return (
    <EmailModalContainer>
      <div className="mymodal">
        <div className="successCont">
          <div className="verifyimg">
            <img src={Logo} alt="logo" className="circle" />
            <img src={Logo2} alt="logo" className="goodmark" />
          </div>
          <div className="sucesstext">
            <p className="verifytext">Verified!</p>
            <p className="verifySub">Registration Successful</p>
          </div>
          <a href="/login">
            <StyledButton className="submit-btn" type="submit">
              Proceed To Login
            </StyledButton>
          </a>
        </div>
      </div>
    </EmailModalContainer>
  );
};

export default Success;

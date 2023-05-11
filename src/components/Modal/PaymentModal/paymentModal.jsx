import React from "react";
import { EmailModalContainer } from "../EmailModal/emailModalStyle";
import Logo from "../../../assets/Ellipse65.svg";
import Logo2 from "../../../assets/Vector(1).svg";
import { StyledButton } from "../../Register/registerStyle";

const PaymentModal = () => {
  return (
    <EmailModalContainer>
      <div className="mymodal">
        <div className="successCont">
          <div className="verifyimg">
            <img src={Logo} alt="logo" className="circle" />
            <img src={Logo2} alt="logo" className="goodmark" />
          </div>
          <div className="sucesstext">
            <p className="verifytext">Submitted</p>
            <p className="verifySub">
              Report will be displayed <br /> upon review
            </p>
          </div>
          <a href="/dashboard">
            <StyledButton className="submit-btn" type="submit">
              Back Home
            </StyledButton>
          </a>
        </div>
      </div>
    </EmailModalContainer>
  );
};

export default PaymentModal;

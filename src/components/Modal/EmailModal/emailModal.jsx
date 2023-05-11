import React from "react";
import { EmailModalContainer } from "./emailModalStyle";
import Logo2 from "../../../assets/Rectangle124.svg";
import ReactOtpInput from "../../../utils/otpInput";
import { StyledButton } from "../../Register/registerStyle";
import { ImCancelCircle } from "react-icons/im";
import { RegModalState } from "../../../atoms/Regverification";
import { useRecoilState } from "recoil";
import { SuccessModalState } from "../../../atoms/Success";
import Success from "../VerifySuccess/success";

const EmailModal = () => {
  const [showModal, setShowModal] = useRecoilState(RegModalState);
  const [showSucModal, setShowSucModal] = useRecoilState(SuccessModalState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    setShowSucModal(true);
    console.log("submitted");
  };

  return (
    <EmailModalContainer>
      <div className="mymodal">
        <div className="cancel">
          <ImCancelCircle
            className="cancelIcon"
            onClick={() => setShowModal(false)}
          />
        </div>
        <div className="imgContainer">
          {/* <img src={Logo} alt="logo" className="foundimg" /> */}
          <img src={Logo2} alt="logo" className="foundimg2" />
        </div>
        <div className="textCont">
          <p className="verify">Verify your email</p>
          <p className="verifySub">
            Please enter the 6 degit code sent to nil@gmail.com
          </p>
        </div>
        <div className="otp-container">
          <ReactOtpInput />
        </div>
        <div className="">
          <StyledButton
            className="submit-btn"
            type="submit"
            onClick={handleSubmit}
          >
            Verify
          </StyledButton>
        </div>
        <div className="">
          <StyledButton className="submit-btn2" type="submit">
            Resend Code
          </StyledButton>
        </div>
      </div>
      {showSucModal && <Success />}
    </EmailModalContainer>
  );
};

export default EmailModal;

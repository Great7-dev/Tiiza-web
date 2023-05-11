import React from "react";
import { EmailModalContainer } from "../EmailModal/emailModalStyle";
import { ImCancelCircle } from "react-icons/im";
import Logo from "../../../assets/image2.svg";
import ReactOtpInput from "../../../utils/otpInput";
import { StyledButton } from "../../Register/registerStyle";
import { LoginModalState } from "../../../atoms/loginMod";
import { useRecoilState } from "recoil";

const LoginModal = () => {
  const [logModal, setLogModal] = useRecoilState(LoginModalState);

  return (
    <EmailModalContainer>
      <div className="mymodal">
        <div className="cancel">
          <ImCancelCircle
            className="cancelIcon"
            onClick={() => setLogModal(false)}
          />
        </div>
        <div className="imgContainer">
          <img src={Logo} alt="logo" className="foundimg" />
          {/* <img src={Logo2} alt="logo" className="foundimg2" /> */}
        </div>
        <div className="textCont">
          <p className="verify">Verification Code</p>
        </div>
        <div className="otp-container">
          <ReactOtpInput />
        </div>
        <div className="textConta">
          <p className="verifySub">I didn't recieve a message</p>
          <span className="resend">Resend</span>
        </div>
        <a href="/dashboard">
          <StyledButton className="submit-btn3" type="submit">
            Verify
          </StyledButton>
        </a>
      </div>
    </EmailModalContainer>
  );
};

export default LoginModal;

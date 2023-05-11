import React from "react";
import { EmailModalContainer } from "../EmailModal/emailModalStyle";
import { ImCancelCircle } from "react-icons/im";
import Logo from "../../../assets/lock1.svg";
import InputField from "../../../utils/input";
import { StyledButton } from "../../Register/registerStyle";
import { LoginModalState } from "../../../atoms/loginMod";
import { useRecoilState } from "recoil";
import { ResetModalState } from "../../../atoms/ResetMod";

const ResetModal = () => {
  const [ResMod, setResModal] = useRecoilState(ResetModalState);

  return (
    <EmailModalContainer>
      <div className="mymodal">
        <div className="cancel">
          <ImCancelCircle
            className="cancelIcon"
            onClick={() => setResModal(false)}
          />
        </div>
        <div className="imgContainer">
          <img src={Logo} alt="logo" className="foundimg2" />
        </div>
        <div className="header">
          <h1 className="title">Reset Password?</h1>
        </div>
        <div className="">
          <InputField
            name="confirmpassword"
            type="password"
            className="input"
            label="New Password"
            //   value={user?.confirmpassword}
            //   change={handleChange}
            placeholder="New password"
          />
        </div>
        <div className="">
          <InputField
            name="confirmpassword"
            type="password"
            className="input"
            label="Confirm Password"
            //   value={user?.confirmpassword}
            //   change={handleChange}
            placeholder="Confirm password"
          />
        </div>
        <div className="">
          <StyledButton className="submit-btn" type="submit">
            Reset Password
          </StyledButton>
        </div>
      </div>
    </EmailModalContainer>
  );
};

export default ResetModal;

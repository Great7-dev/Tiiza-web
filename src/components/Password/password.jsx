import React from "react";
import { PasswordContainer } from "./passwordStyle";
import Logo from "../../assets/lock1.svg";
import InputField from "../../utils/input";
import { StyledButton } from "../Register/registerStyle";
import { ResetModalState } from "../../atoms/ResetMod";
import { useRecoilState } from "recoil";
import ResetModal from "../Modal/ResetModal/reset";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const Password = () => {
  const [ResMod, setResMod] = useRecoilState(ResetModalState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setResMod(true);
    console.log("submitted");
  };

  return (
    <PasswordContainer>
      <div className="passCont">
        <a href="/login" className="bck_btn">
          <MdOutlineArrowBackIosNew className="back" />
        </a>
        <img src={Logo} alt="Logo" className="imglock" />
        <div className="header">
          <h1 className="title">Reset Password?</h1>
          <p className="subtext">
            Enter the email address associated <br />
            with your account with instruction to <br /> reset password
          </p>
        </div>
        <div className="input-cont">
          <InputField
            name="email"
            type="email"
            className="input"
            label="Email address"
            //   value={user?.email}
            //   change={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="">
          <StyledButton
            className="submit-btn"
            type="submit"
            onClick={handleSubmit}
          >
            Continue
          </StyledButton>
        </div>
      </div>
      {ResMod && <ResetModal />}
    </PasswordContainer>
  );
};

export default Password;

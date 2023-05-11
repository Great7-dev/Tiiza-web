import React from "react";
import { LoginContainer } from "./loginStyle";
import Logo from "../../assets/foundItem1.svg";
import { StyledButton, StyledForm } from "../Register/registerStyle";
import InputField from "../../utils/input";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { LoginModalState } from "../../atoms/loginMod";
import { useRecoilState } from "recoil";
import LoginModal from "../Modal/LoginModal/loginModal";

const Login = () => {
  const [logModal, setLogModal] = useRecoilState(LoginModalState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLogModal(true);
    console.log("submitted");
  };
  return (
    <LoginContainer>
      <div className="formCont">
        <a href="/" className="bck_btn">
          <MdOutlineArrowBackIosNew className="back" />
        </a>
        <img src={Logo} alt="logo" className="foundimg" />
        <p className="logintext">Login to disclose the item found</p>
        <StyledForm onSubmit={handleSubmit}>
          <div className="">
            <InputField
              name="email"
              type="email"
              className="input"
              label="Email"
              //   value={user?.email}
              //   change={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <div className="">
            <InputField
              name="password"
              type="password"
              className="input"
              label="Password"
              //   value={user?.password}
              //   change={handleChange}
              pattern="(^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
              placeholder="Enter your password"
            />
          </div>
          <a href="/reset-password" className="forgot">
            Forgot Password
          </a>
          <div className="">
            <StyledButton className="submit-btn" type="submit">
              Login
            </StyledButton>
          </div>
        </StyledForm>
        <div className="loginFooter">
          <label>Already have an account?</label>
          <a href="/register" className="register">
            {" "}
            Register
          </a>
        </div>
      </div>
      {logModal && <LoginModal />}
    </LoginContainer>
  );
};

export default Login;

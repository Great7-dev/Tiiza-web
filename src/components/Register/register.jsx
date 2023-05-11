import React from "react";
import { RegisterContainer, StyledButton, StyledForm } from "./registerStyle";
import Logo from "../../assets/lost1.svg";
import InputField from "../../utils/input";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import EmailModal from "../Modal/EmailModal/emailModal";
import { RegModalState } from "../../atoms/Regverification";
import { useRecoilState } from "recoil";

const Register = () => {
  const [showModal, setShowModal] = useRecoilState(RegModalState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
    console.log("submitted");
  };

  return (
    <RegisterContainer>
      <div className="regform">
        <a href="/" className="bck_btn">
          <MdOutlineArrowBackIosNew className="back" />
        </a>
        <img src={Logo} alt="Tiiza Logo" className="img" />
        {/* <h1 className="regtext">Register</h1> */}
        <p className="regtext">Create account to report your lost item</p>
        <StyledForm onSubmit={handleSubmit}>
          <div className="">
            <InputField
              name="fullName"
              type="text"
              className="input"
              label="Full Name"
              //   value={user?.firstname}
              //   change={handleChange}
              pattern="^[A-Za-z0-9]{3,16}$"
              placeholder="Enter your full name"
            />
          </div>
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
              Register
            </StyledButton>
          </div>
        </StyledForm>
        <div className="SignUpFooter">
          <label>Already have an account?</label>
          <a href="/login" className="login">
            {" "}
            Login
          </a>
        </div>
      </div>
      {showModal && <EmailModal />}
    </RegisterContainer>
  );
};

export default Register;

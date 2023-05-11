import React from "react";
import { SignupContainer } from "./signupStyle";
import Logo from "../../assets/people.svg";

const Signup = () => {
  return (
    <SignupContainer>
      <div className="startedcontainer">
        <div className="textContainer">
          <h1 className="getstartedText">
            Looking for your Missing <br />
            item? worry not you are <br /> not alone
          </h1>
          <p className="joinText">
            Join Tiiza community for free to recover your <br /> missing item at
            ease.
          </p>
          <a href="/register">
            <button className="btnn">Get Started</button>
          </a>
        </div>
        <div>
          <img src={Logo} alt="Tiiza Logo" className="img" />
        </div>
      </div>
      <h3 className="adtext">
        Enough of missing your items such wallet, bags, phones, keys and other{" "}
        <br />
        valuables without retrieving it
      </h3>
    </SignupContainer>
  );
};

export default Signup;

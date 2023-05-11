import React, { useState } from "react";
import OtpInput from "react18-input-otp";
import "../components//Modal//EmailModal//emailModalStyle.js";

export default function ReactOtpInput() {
  const [otp, setOtp] = useState("");
  const handleChange = (enteredOtp) => {
    setOtp(enteredOtp);
  };
  return (
    <OtpInput
      inputStyle="inputStyle"
      isInputNum={true}
      shouldAutoFocus
      value={otp}
      onChange={handleChange}
      numInputs={6}
      separator={<span className="otp-separator">-</span>}
    />
  );
}

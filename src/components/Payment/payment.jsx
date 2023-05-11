import React from "react";
import { PaymentContainer } from "./paymentStyle";
import Logo from "../../assets/card1.svg";
import { StyledButton } from "../Register/registerStyle";
import { useRecoilState } from "recoil";
import { PaymentModalState } from "../../atoms/paymentMod";
import PaymentModal from "../Modal/PaymentModal/paymentModal";

const Payment = () => {
  const [payMod, setPayMod] = useRecoilState(PaymentModalState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPayMod(true);
  };

  return (
    <PaymentContainer>
      <div className="header">
        <h1 className="sub">Payment</h1>
      </div>
      <div className="payment-cont">
        <div className="header-cont">
          <p>
            Account information: <br />
            bas***sth@gmail.com <a>Change Account</a>
          </p>
        </div>
        <div className="payment-method">
          <p>Payment method</p>
          <div className="img-div">
            <img src={Logo} alt="card" className="img" />
            <p>Card</p>
          </div>
        </div>
        <div className="card-cont">
          <p className="text2">Card number</p>
          <input
            className="input3"
            type="text"
            placeholder="Enter card number"
            // onChange={handleItemNameChange}
          />
        </div>
        <div className="card-cont">
          <p className="text2">Card name</p>
          <input
            className="input3"
            type="text"
            placeholder="Enter card name"
            // onChange={handleItemNameChange}
          />
        </div>
        <div className="exp-cont">
          <div className="first">
            <p className="text2">Expiry date</p>
            <input
              className="input4"
              type="text"
              placeholder="MM/YY"
              // onChange={handleCategoryChange}
            />
          </div>
          <div className="second-input">
            <p className="text2">CVV</p>
            <input
              className="input4"
              type="text"
              placeholder="***"
              // onChange={handleCategoryChange}
            />
          </div>
        </div>
        <StyledButton
          className="submit-btn2"
          type="submit"
          onClick={handleSubmit}
        >
          Continue
        </StyledButton>
        <div className="text-cont">
          <p className="text3">
            By placing your order, you acknowledge that you have
            <br /> read the{" "}
            <span className="terms">General Terms and Conditions,</span> the
            information
            <br />
            regarding the <span className="terms">Right of Withdrawal</span> and
            the <span className="terms">Privacy Policy.</span>
          </p>
        </div>
      </div>
      {payMod && <PaymentModal />}
    </PaymentContainer>
  );
};

export default Payment;

import React from "react";
import Footer from "../Footer/footer";
import { SubscriptionContainer } from "./subscriptionStyle";
import Logo from "../../assets/Vector(10).svg";
import { StyledButton } from "../Register/registerStyle";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment");
  };

  return (
    <SubscriptionContainer>
      <div className="header">
        <h1 className="sub">Subscription</h1>
      </div>
      <div className="subcript-cont">
        <div className="first-cont">
          <div className="head">
            <h1 className="head-text">Tiiza Minor Promo</h1>
            <p className="sub-text">
              {" "}
              Search item worth from N1,000 - N10,000 <br /> within 2 weeks
            </p>
          </div>
          <h1 className="sub-type">Free</h1>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text">Community search</p>
          </div>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text">Limited to your state</p>
          </div>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text">
              No extension of days if the item is
              <br /> not found
            </p>
          </div>
          <StyledButton
            className="submit-btn"
            type="submit"
            onClick={handleSubmit}
          >
            Subscribe
          </StyledButton>
        </div>
        <div className="sec-cont">
          <div className="head">
            <h1 className="head-text">Tiiza Real Promo</h1>
            <p className="sub-text">
              {" "}
              Search item worth from N10,000 - N100,000 <br /> within 2 weeks
            </p>
          </div>
          <h1 className="sub-type">N2,500</h1>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text">Community search</p>
          </div>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text">Not limited to your state</p>
          </div>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text">
              Extension of 1 week if the item is
              <br /> not found within 2 weeks
            </p>
          </div>
          <StyledButton
            className="submit-btn"
            type="submit"
            onClick={handleSubmit}
          >
            Subscribe
          </StyledButton>
        </div>
      </div>
      <div className="subcript-cont">
        <div className="third-cont">
          <div className="head">
            <h1 className="head-text2">Tiiza Real Promo</h1>
            <p className="sub-text2">
              {" "}
              Search item worth from N10,000 - N100,000 <br /> within 2 weeks
            </p>
          </div>
          <h1 className="sub-type2">N5,000</h1>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text2">Community search</p>
          </div>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text2">Not limited to your state</p>
          </div>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text2">Contact search</p>
          </div>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text2">General search</p>
          </div>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text2">
              Extension of 1 week if the item is
              <br /> not found within 2 weeks
            </p>
          </div>
          <StyledButton
            className="submit-btn2"
            type="submit"
            onClick={handleSubmit}
          >
            Subscribe
          </StyledButton>
        </div>
        <div className="fourth-cont">
          <div className="head">
            <h1 className="head-text">Tiiza Real Promo</h1>
            <p className="sub-text">
              {" "}
              Search item worth from N101,000 - N1M <br /> within 2 weeks
            </p>
          </div>
          <h1 className="sub-type">N25,000</h1>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text">Community search</p>
          </div>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text">Not limited to your state</p>
          </div>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text">Contact search</p>
          </div>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text">General search</p>
          </div>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text">Life search</p>
          </div>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text">
              Extension of 1 week if the item is
              <br /> not found within 2 weeks
            </p>
          </div>
          <StyledButton
            className="submit-btn"
            type="submit"
            onClick={handleSubmit}
          >
            Subscribe
          </StyledButton>
        </div>
      </div>
      <div className="subcript-cont2">
        <div className="fifth-cont">
          <div className="head">
            <h1 className="head-text">Tiiza Real Promo</h1>
            <p className="sub-text">
              {" "}
              Search item worth from N1M and above
              <br /> within 2 weeks
            </p>
          </div>
          <h1 className="sub-type">N50,000</h1>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text">Community search</p>
          </div>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text">Not limited to your state</p>
          </div>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text">Contact search</p>
          </div>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text">General search</p>
          </div>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text">Life search</p>
          </div>
          <div className="img-cont">
            <img src={Logo} alt="logo" className="logo" />
            <p className="img-text">
              Extension of 1 week if the item is
              <br /> not found within 2 weeks
            </p>
          </div>
          <StyledButton
            className="submit-btn"
            type="submit"
            onClick={handleSubmit}
          >
            Subscribe
          </StyledButton>
        </div>
      </div>
      <Footer />
    </SubscriptionContainer>
  );
};

export default Subscription;

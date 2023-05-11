import React from "react";
import Advert from "../components/Advert/advert";
import Footer from "../components/Footer/footer";
import Missing from "../components/Missing/missing";
import Navbar from "../components/Navbar/navbar";
import Signup from "../components/Signup/signup";
import { LandingPageContainer } from "./landingPageStyle";

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Navbar />
      {/* <Advert /> */}
      <Signup />
      <Missing />
      <Footer />
    </LandingPageContainer>
  );
};

export default LandingPage;

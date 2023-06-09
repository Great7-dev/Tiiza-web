import React, { useEffect, useRef } from "react";
import Search from "../Dashboard/Search/search";
import { AllmissitemCont } from "./allmissitemStyle";
import Logo from "../../assets/car.svg";
import Latestmiss from "./Latestmissitem/latestmiss";
import Aweek from "./Aweek/aweek";
import Twoweeks from "./Twoweeks/twoweeks";
import Footer from "../Footer/footer";
import { FiMenu } from "react-icons/fi";
import { useRecoilState } from "recoil";
import { NavModalState } from "../../atoms/navMod";
import NavModal from "../Modal/NavModal/navModal";
const Allmissitem = () => {
  const [show, setShow] = useRecoilState(NavModalState);
  const ref = useRef();
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    const checkIfClickedOutside = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
      document.body.style.overflow = "unset";
    };
  }, [show]);
  return (
    <AllmissitemCont>
      <div className="search-cont" ref={ref}>
        <FiMenu className="menu" onClick={() => setShow(!show)} />
        <Search />
      </div>
      <div className="nav-cont">
        <div className="details">
          <div className="img-cont">
            <div className="details-con">
              <h1 className="detal">Lexus RX33O</h1>
              <p className="detal">Color: Red</p>
              <p className="detal">Missing: 3days ago</p>
              <p className="detal">Last seen: Lekki</p>
            </div>
            <div className="imgcontainer">
              <img src={Logo} alt="logo" className="img" />
            </div>
          </div>
        </div>
      </div>
      <Latestmiss />
      <Aweek />
      <Twoweeks />
      <Footer />
      {show && <NavModal />}
    </AllmissitemCont>
  );
};

export default Allmissitem;

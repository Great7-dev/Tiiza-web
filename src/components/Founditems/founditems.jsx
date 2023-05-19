import React, { useEffect, useRef } from "react";
import Search from "../Dashboard/Search/search";
import { FounditemsContainer } from "./founditemsStyle";
import Logo from "../../assets/Videos.svg";
import Latestfound from "./Latestfounditem/latestfound";
import Aweek from "./Aweek/aweek";
import Twoweeks from "./Twoweeks/twoweeks";
import Footer from "../Footer/footer";
import { FiMenu } from "react-icons/fi";
import { useRecoilState } from "recoil";
import { NavModalState } from "../../atoms/navMod";
import NavModal from "../Modal/NavModal/navModal";

const Founditems = (props) => {
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
    <FounditemsContainer>
      <div className="search-cont" ref={ref}>
        <FiMenu className="menu" onClick={() => setShow(!show)} />
        <Search />
      </div>
      <div className="nav-cont">
        <div className="details">
          <div className="img-cont">
            <div className="details-con">
              <h1 className="detal">Backpack</h1>
              <p className="detal">Color: Orange</p>
              <p className="detal">Missing: 3days ago</p>
              <p className="detal">Last seen: Sululere</p>
            </div>
            <div className="imgcontainer">
              <img src={Logo} alt="logo" className="img" />
            </div>
          </div>
        </div>
      </div>
      <Latestfound />
      <Aweek />
      <Twoweeks />
      <Footer />
      {show && <NavModal />}
    </FounditemsContainer>
  );
};

export default Founditems;

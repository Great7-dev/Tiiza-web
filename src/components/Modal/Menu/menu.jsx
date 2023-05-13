import React, { useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { MenuModalState } from "../../../atoms/menu";
import { MenuStyle } from "../../Navbar/navbarStyle";

const Menu = () => {
  const [logOut, setLogOut] = useRecoilState(MenuModalState);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          //   alert("You clicked outside of me!");
          setLogOut(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <MenuStyle>
      <ul ref={wrapperRef}>
        <li className="red">
          <a href="/gallery">My gallery</a>
        </li>
        <li className="red">
          <a href="/">My profile</a>
        </li>
      </ul>
      {/* {logOut && < />} */}
    </MenuStyle>
  );
};

export default Menu;

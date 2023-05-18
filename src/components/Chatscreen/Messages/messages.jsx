import React from "react";
import { ChatContainer } from "../chatscreenStyle";
import Logo from "../../../assets/Avatar.svg";

const Messages = () => {
  return (
    <ChatContainer>
      <div className="img-cont2">
        <img src={Logo} alt="Logo" className="img3" />
        <div className="comet-cont">
          <p className="text5">
            imaging someone snashing my bag at mushin area yesterday. Am feeling
            so bad because of the tralma i had to go to
          </p>
        </div>
      </div>
      <div className="img-cont3">
        <img src={Logo} alt="Logo" className="img3" />
        <div className="comet-cont2">
          <p className="text5">
            imaging someone snashing my bag at mushin area yesterday. Am feeling
            so bad because of the tralma i had to go to
          </p>
        </div>
      </div>
    </ChatContainer>
  );
};

export default Messages;

import React from "react";
import { ChatContainer } from "../chatscreenStyle";
import Logo from "../../../assets/Avatar.svg";
import { FaRegThumbsUp } from "react-icons/fa";

const Discussion = () => {
  return (
    <ChatContainer>
      <div className="img-cont2">
        <img src={Logo} alt="Logo" className="img2" />
        <p className="text5">
          imaging someone snashing my bag at mushin area yesterday. Am feeling
          so bad because of the tralma i had to go to
        </p>
      </div>
      <div className="like-cont">
        <div className="thumb">
          <FaRegThumbsUp className="icon" />
          <p className="like">5000</p>
        </div>
        <p className="share">38 share</p>
        <p className="comment">38 comment</p>
      </div>
      <div className="inpt-cont">
        <input className="comment-input" placeholder="Comment" />
      </div>
      <div className="Name-status">
        <p className="name">Emeka John</p>
        <p className="status"> Active</p>
      </div>
      <div className="img-commet">
        <img src={Logo} alt="Logo" className="img2" />
        <div className="comet-cont">
          <p className="text5">How are you? hope you are okay</p>
        </div>
      </div>
      <div className="like-reply">
        <p>5 Like</p>
        <p>Reply</p>
      </div>
      <div className="Name-status">
        <p className="name">Emeka John</p>
        <p className="status"> Active</p>
      </div>
      <div className="img-commet">
        <img src={Logo} alt="Logo" className="img2" />
        <div className="comet-cont">
          <p className="text5">true</p>
        </div>
      </div>
      <div className="like-reply">
        <p>5 Like</p>
        <p>Reply</p>
      </div>
    </ChatContainer>
  );
};

export default Discussion;

import React from "react";
import { ChatContainer } from "./chatscreenStyle";
import Logo from "../../assets/Avatar.svg";
import Discussion from "./Discussion/discussion";
import Messages from "./Messages/messages";

const Chatscreen = () => {
  return (
    <ChatContainer>
      <div className="header">
        <div className="sub-head1">
          <p className="text">Discussions</p>
          <div className="search-Cont">
            <input placeholder="Topics" className="input" type="text" />
          </div>
          <div className="topic-cont">
            <div className="img-cont">
              <img src={Logo} alt="Logo" className="img" />
              <p className="text2">
                imaging someone snashing my bag at mushin area yesterday
              </p>
            </div>
            <div className="img-cont">
              <img src={Logo} alt="Logo" className="img" />
              <p className="text2">
                Can anyone plesa tell me how is Ajar today
              </p>
            </div>
            <div className="img-cont">
              <img src={Logo} alt="Logo" className="img" />
              <p className="text2">
                Looking for my lost phone, Osho di, can i get update please
              </p>
            </div>
          </div>
        </div>
        <div className="sub-head2">
          <p className="text">Conversation</p>
          <div className="conv-cont">
            {/* <Discussion /> */}
            <Messages />
          </div>
        </div>
        <div className="sub-head3">
          <p className="text">Messages</p>
          <div className="search-Cont">
            <input
              placeholder="Names, Conversation"
              className="input2"
              type="text"
            />
          </div>
          <div className="topic-cont">
            <div className="onli-cont">
              <p className="text3">Online (400)</p>
            </div>
            <span className="border"></span>
            <div className="img-cont">
              <img src={Logo} alt="Logo" className="img" />
              <p className="text4">
                Hello,How are you doing today? We are supposed to have a meeting
                today by 2pm i hope you wil be in attendance.
              </p>
            </div>
            <div className="img-cont">
              <img src={Logo} alt="Logo" className="img" />
              <p className="text4">Hope you slept well last night?</p>
            </div>
          </div>
        </div>
      </div>
    </ChatContainer>
  );
};

export default Chatscreen;

import styled from "styled-components";

export const SignupContainer = styled.div`
  width: 100%;
  height: fit-content;

  .startedcontainer {
    background: rgba(135, 206, 250, 0.2);
    width: 100%;
    display: flex;
    /* flex-direction: row; */
    /* align-items: center; */
    justify-content: space-between;
  }
  .getstartedText {
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    color: #012454;
    margin-top: 10%;
  }
  .joinText {
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    color: #000000;
    margin-top: 4%;
  }
  .textContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 3%;
    margin: 0;
  }

  .btnn {
    background: #012454;
    border-radius: 30px;
    width: 174px;
    height: 51px;
    color: #fff;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    margin-top: 8%;
    border: none;
  }
  .adtext {
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 42px;
    text-align: center;
    color: rgba(1, 36, 84, 0.8);
    margin-top: 5%;
  }
`;

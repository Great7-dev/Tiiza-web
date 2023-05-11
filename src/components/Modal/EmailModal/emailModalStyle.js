import styled from "styled-components";

export const EmailModalContainer = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .mymodal {
    width: 510px;
    height: 710px;
    background-color: #ffffff;
    /* box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 5px -1px rgba(0, 0, 0, 0.75); */
    margin: auto;
    display: flex;
    flex-direction: column;
    border-radius: 50px;
  }
  .imgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .foundimg2 {
    width: 20%;
    top: 0;
    left: 0;
  }
  .textCont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .verify {
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
  }
  .verifySub {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
  }
  .otp-separator {
    margin: 0px 10px;
    font-size: 24px;
    font-weight: bold;
    color: #555;
    border: none;
  }
  .inputStyle {
    padding-left: 10%;
    width: 100%;
    height: 30px;
    font-size: 34px;
    font-weight: bold;
  }
  .otp-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    margin-bottom: 10%;
  }
  .submit-btn2 {
    border: none;
    background: #a8c2fb;
    color: #f5f5f5;
    width: 85%;
    height: 48px;
    margin: 4% 7%;
    box-sizing: border-box;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
  }
  .cancel {
    display: flex;
    width: 85%;
    height: 48px;
    margin: 4% 7%;
    flex-direction: row-reverse;
    cursor: pointer;
  }
  .cancelIcon {
    font-size: 30px;
    color: #012454;
  }
  .successCont {
    display: flex;
    width: 362px;
    height: 340px;
    flex-direction: column;
    align-self: center;
    justify-content: center;
    background: #a8c2fb;
    border-radius: 10px;
    margin-top: 30%;
  }
  .verifyimg {
    position: relative;
    display: flex;
    width: 100%;
    height: 20%;
    justify-content: center;
    align-items: center;
  }
  .circle {
    position: absolute;
  }
  .goodmark {
    position: absolute;
  }
  .sucesstext {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .verifytext {
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    margin: 0;
    padding: 5%;
  }
  .verifySub {
    display: flex;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin: 0;
  }
  .textConta {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0% 23%;
    text-align: center;
  }
  .resend {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    background: rgba(135, 206, 250, 0.2);
    border-radius: 7px;
    padding: 3%;
    cursor: pointer;
  }
  .submit-btn3 {
    border: none;
    background: #041434;
    color: #f5f5f5;
    width: 75%;
    height: 48px;
    margin: 10% 14%;
    box-sizing: border-box;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
  }
  .input-label {
    padding: 1% 8%;
    color: #012454;
  }
  .input-cont {
    padding-bottom: 6%;
  }
  .header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    /* text-align: center; */
    align-items: center;
  }
  .title {
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    color: #012454;
  }
`;

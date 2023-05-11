import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: #e5e5e5;
  height: 100vh;
  .formCont {
    display: flex;
    flex-direction: column;
    width: 40rem;
    height: 736px;
    margin-top: 3%;
    background-color: #fff;
  }
  .foundimg {
    width: 30%;
    padding-top: 5%;
    align-self: center;
  }
  .logintext {
    display: flex;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #000000;
    padding: 0 0 4% 8%;
  }
  .forgot {
    display: flex;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    flex-direction: row-reverse;
    text-decoration: none;
    color: #000000;
    padding: 1% 8% 1% 0;
  }
  .register {
    text-decoration: none;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #012454;
  }
  .loginFooter {
    display: flex;
    justify-content: center;
  }
  .back {
    display: flex;
    text-decoration: none;
    flex-direction: left;
  }
  .bck_btn {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    padding: 4% 0 0 8%;
  }
`;

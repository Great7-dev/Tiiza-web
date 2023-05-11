import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100%;
  display: flex;
  /* padding: 5% 20%; */
  flex-direction: column;
  align-items: center;
  background: #e5e5e5;
  height: 100vh;
  .regform {
    width: 40rem;
    height: 736px;
    margin-top: 3%;
    background-color: #fff;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
  }
  .img {
    width: 100%;
    height: 20%;
    margin-top: 5%;
  }
  .regtext {
    display: flex;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    flex-direction: left;
    padding-left: 8%;
  }
  .login {
    text-decoration: none;
    color: #012454;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
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
  .SignUpFooter {
    margin-left: 35%;
  }
`;

export const StyleInput = styled.input`
  background: #ffffff;
  border: solid #d9d9d9;
  border-width: 1px;
  padding: 8px 16px 8px 16px;
  margin: 0% 0 1% 7%;
  outline: none;
  width: 80%;
  height: 28px;
  border-radius: 10px;
  /* border:5px solid green; */
`;

export const StyledForm = styled.form`
  & .input-label {
    color: #000000;
    text-align: left;
    font-size: 12px;
    position: relative;
    width: 100%;
    padding-left: 8%;
    /* border:5px solid green; */
  }
`;

export const StyledButton = styled.button`
  border: none;
  background: #012454;
  color: #f5f5f5;
  width: 85%;
  height: 48px;
  margin: 4% 7%;
  box-sizing: border-box;
  font-weight: 600;
  border-radius: 10px;
  /* line-height: 14.52px; */
  cursor: pointer;
`;

import styled from "styled-components";

export const PasswordContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e5e5e5;
  height: 100vh;
  .passCont {
    width: 40rem;
    height: 736px;
    margin-top: 3%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }
  .imglock {
    width: 100%;
    height: 20%;
    margin-top: 5%;
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
  .subtext {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.76);
    padding-bottom: 10%;
  }
  .input-label {
    padding: 1% 8%;
    color: #012454;
  }
  .input-cont {
    padding-bottom: 6%;
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

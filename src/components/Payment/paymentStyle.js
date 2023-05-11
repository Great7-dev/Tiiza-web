import styled from "styled-components";

export const PaymentContainer = styled.div`
  width: 100%;
  background: rgba(217, 217, 217, 0.35);
  height: 100vw;
  .header {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 80px;
    background: #fff;
  }
  .sub {
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
  }
  .payment-cont {
    width: 510px;
    height: 900px;
    background-color: #ffffff;
    margin: 2rem 0 4rem 30rem;
    box-shadow: 0px 0px 25px rgba(168, 194, 251, 0.25);
    display: flex;
    flex-direction: column;
  }
  .header-cont {
    display: flex;
    /* justify-content: center; */
    margin-top: 2rem;
    margin-left: 5rem;
  }
  .payment-method {
    display: flex;

    flex-direction: column;
    margin-left: 5rem;
    /* border: 1px solid #e5e5e5; */
    padding: 0;
  }
  .img {
    height: 40%;
  }
  .img-div {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 172px;
    height: 50px;
    box-sizing: border-box;
    border: 1px solid #012454;
    border-radius: 10px;
    padding-left: 2.5rem;
    margin-bottom: 2rem;
  }
  .input3 {
    width: 365px;
    height: 45px;
    background: rgba(217, 217, 217, 0.2);
    border-radius: 5px;
    border: none;
    padding-left: 10px;
    outline: none;
  }
  .input4 {
    width: 100px;
    height: 45px;
    background: rgba(217, 217, 217, 0.2);
    border-radius: 5px;
    border: none;
    padding-left: 10px;
    outline: none;
  }
  .card-cont {
    margin-left: 5rem;
    margin-bottom: 2rem;
  }
  .text2 {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #012454;
  }
  .exp-cont {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 5rem;
  }
  .submit-btn2 {
    margin: 4rem 5rem;
    width: 377px;
  }
  .text-cont {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-left: 2rem;
  }
  .text3 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
  }
  .terms {
    font-weight: 700;
  }
`;

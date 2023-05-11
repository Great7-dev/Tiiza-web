import styled from "styled-components";

export const DetailContainer = styled.div`
  width: 100%;
  background: rgba(217, 217, 217, 0.35);
  /* height: fit-content; */
  .header {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 100%;
    height: 80px;
    background: #fff;
  }
  .det-cont {
    width: 550px;
    height: 900px;
    background-color: #ffffff;
    margin: 2rem 0 4rem 29rem;
    box-shadow: 0px 0px 25px rgba(168, 194, 251, 0.25);
    display: flex;
    flex-direction: column;
  }
  .sub {
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
  }
  .repot-cont {
    margin: 1rem 0 4rem 3rem;
    width: 450px;
    height: 900px;
    background-color: #ffffff;
    box-shadow: 0px 0px 25px rgba(168, 194, 251, 0.25);
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .circular-container {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    margin: 2rem 0 0 0;
    background: #c4c4c4;
  }

  .imginput {
    border: none;
    outline: none;
    margin-left: 4rem;
    margin-top: 4rem;
    /* margin-bottom: 5rem; */
  }
  .text {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    padding-top: 2rem;
  }
  .text-cont {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .detail-cont {
    display: flex;
    justify-content: space-between;
  }
  .text1 {
    padding-left: 5rem;
  }
  .text2 {
    padding-right: 5rem;
  }
  .image-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .image-container {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

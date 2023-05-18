import styled from "styled-components";

export const QrContainer = styled.div`
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
  .gallery-cont {
    width: 700px;
    height: 800px;
    background-color: #ffffff;
    margin: 5rem 0 1rem 23rem;
    box-shadow: 0px 0px 25px rgba(168, 194, 251, 0.25);
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    /* max-height: 250px; */
  }
  .sub-text {
    display: flex;
    justify-content: center;
  }
  .text {
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
  }
  .img-cont {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    padding: 30px;
  }
  .doctext {
    padding-right: 50%;
    cursor: pointer;
  }
  .img {
    width: 10%;
    padding-left: 5%;
    /* height: 20%; */
  }
`;

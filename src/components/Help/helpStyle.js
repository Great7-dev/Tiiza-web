import styled from "styled-components";

export const HelpContainer = styled.div`
  width: 100%;
  background: rgba(217, 217, 217, 0.35);
  height: fit-content;
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
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1FR;
    grid-gap: 20px;
    padding: 20px;
    margin-top: 20px;
    height
  }
  .grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 296px;
height: 237px;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .text{
    font-style: normal;
font-weight: 400;
font-size: 25px;
color: #012454;
  }
`;

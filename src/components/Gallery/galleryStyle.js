import styled from "styled-components";

export const GalleryContainer = styled.div`
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
    width: 800px;
    height: 1000px;
    background-color: #ffffff;
    margin: 2rem 0 4rem 25rem;
    box-shadow: 0px 0px 25px rgba(168, 194, 251, 0.25);
    display: flex;
    flex-direction: column;
  }
  .sub-text {
    padding: 1rem 0 4rem 2rem;
  }
  .text {
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
  }
  .fist-cont {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    padding: 20px;
  }
  .text2 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
  }
  .add {
    display: flex;
    text-decoration: none;
    flex-direction: left;
    position: absolute;
    color: #fff;
    padding: 1% 0 0 1%;
    font-size: 55px;
    cursor: pointer;
  }
`;

import styled from "styled-components";

export const LatestfoundContainer = styled.div`
  width: 100%;
  .mising-cont {
    width: 1334px;
    height: 489px;
    background: #d9d9d9;
    margin-left: 50px;
  }
  .header {
    width: 1334px;
    height: 50px;
    background: #012454;
  }
  .missing {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    color: #ffffff;
    padding-top: 5px;
  }
  .slide {
    display: flex;
    flex-direction: column;
    margin: 10px;
    background: #f5f5f5;
    /* padding: 1% 2%; */
    height: 25em;
  }
  .rec.rec-arrow {
    background-color: #f5f5f5;
  }
  .rec.rec-arrow:hover {
    background-color: #bcb8b8 !important;
  }
  .slide__text1 {
    display: flex;
    flex-direction: column;
  }
  .deta-con {
    display: flex;
    align-items: center;
    flex-direction: column;
    /* padding: 5%; */
  }
  .logo {
    width: 100%;
    height: 60%;
    padding: 0;
    margin: 0;
  }
  .text1 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #012a4a;
  }
  .text2 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #012a4a;
    margin: 0;
    padding-top: 5%;
  }

  @media (max-width: 525px) {
    .slide {
      padding: 5% 7%;
      height: 11em;
    }
    .text {
      margin: 0;
      margin-top: 12px;
    }
    .text2 {
      font-size: 12px;
      line-height: 20px;
    }
  }

  @media (max-width: 417px) {
    .slide {
      /* font-size: 14px; */
      height: 12rem;
    }
    .text {
      margin: 0;
      margin-top: 12px;
    }
  }
  @media (max-width: 360px) {
    .slide {
      padding: 2% 2%;
      height: 12rem;
    }
    .text {
      margin: 0;
      margin-top: 12px;
    }
    .text2 {
      margin-bottom: 0;
    }
  }
  @media (max-width: 280px) {
    .text2 {
      font-size: 10px;
      line-height: 15px;
    }
  }
`;

import styled from "styled-components";

export const FooterContainter = styled.div`
  width: 100%;
  height: 225px;
  background: #012454;
  .contentCont {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .apple {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000000;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 10px;
    cursor: pointer;
  }
  .apps {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 15px;
  }
  .googleimg {
    width: 25%;
  }
  .compCont {
    color: #ffffff;
    padding: 0 50px;
  }
  .SuppCont {
    color: #ffffff;
  }
  .downloadText {
    color: #ffffff;
    display: flex;
    justify-content: right;
  }
  .download {
    padding: 0 40px;
  }
  .DownloadSub {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
  }
`;

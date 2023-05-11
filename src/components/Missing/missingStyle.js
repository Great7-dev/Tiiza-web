import styled from "styled-components";

export const MissingContainer = styled.div`
  width: 100%;

  .missingcontainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 4%;
    padding: 4%;
    gap: 10px;
  }
  .textCont {
    background: rgba(217, 217, 217, 0.5);
    width: 609px;
    height: 549px;
    text-align: left;
  }
  .header {
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    color: #012454;
    padding: 50px 0 40px 20px;
  }
  .sub-text {
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    padding-left: 20px;
  }
`;

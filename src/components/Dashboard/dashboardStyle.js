import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;

  .tabstyle {
    width: 100%;
    margin: -0.5rem auto 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2% 5% 0 0;
    color: #012a4a;
    border: none;
  }
  .active {
    position: relative;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: #012454;
    font-weight: 600;
  }
  .active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #012454;
    border: none;
  }
`;

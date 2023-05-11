import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  z-index: 50;
  top: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .navbar__links {
    display: flex;
    align-items: center;
    gap: 30px;
    color: #012454;
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    text-align: center;
    padding: 30px;
    cursor: pointer;
  }
  .btnn {
    background: #012454;
    border-radius: 30px;
    width: 100px;
    height: 51px;
    color: #fff;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;
    border: none;
  }
`;

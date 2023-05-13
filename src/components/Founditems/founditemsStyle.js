import styled from "styled-components";

export const FounditemsContainer = styled.div`
  width: 100%;
  .nav-cont {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(168, 194, 251, 0.5);
    height: 30rem;
    margin-top: 2rem;
  }

  .search-cont {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .menu {
    font-size: 50px;
    margin-left: 80px;
    margin-top: 15px;
  }
  .details {
    width: 806px;
    height: 400px;
    /* background: rgba(66, 66, 64, 0.5);
    box-shadow: 0px 0px 25px rgba(168, 194, 251, 0.25); */
    padding-left: 30%;
  }
  .nav {
    width: 291px;
    height: 406px;
    background: #ffffff;
    border: 1px solid rgba(168, 194, 251, 0.5);
    border-radius: 10px;
    margin-left: 100px;
  }
  .img {
    height: 91%;
    width: 100%;
  }
  .img-cont {
    display: flex;
  }
  .details-con {
    width: 300px;
    height: 400px;
  }
  .nav-list {
    display: flex;
    align-self: center;
    margin-left: 60px;
  }
  .dash {
    width: 10%;
    height: 10%;
    margin-top: 5%;
    margin-right: 8%;
  }
  .list-cont {
    margin-top: 8%;
  }
  .detal {
    padding-bottom: 20%;
  }
  a {
    text-decoration: none;
    color: #000000;
  }
  a :hover {
    color: blue;
  }
`;
export const NavModalContainer = styled.div`
  width: 100%;
  .nav-cont {
    position: fixed;
    z-index: 200;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
    overflow: auto;
    opacity: 90%;
    margin-top: 17rem;
  }
  .details {
    width: 806px;
    height: 400px;
    margin-right: 50px;
  }
  .nav {
    width: 291px;
    height: 406px;
    background: #ffffff;
    border: 1px solid rgba(168, 194, 251, 0.5);
    border-radius: 10px;
    margin-left: 100px;
  }
  .img {
    height: 81%;
  }
  .img-cont {
    display: flex;
  }
  .deta-con {
    width: 420px;
    height: 400px;
  }
  .nav-list {
    display: flex;
    align-self: center;
    margin-left: 60px;
  }
  .dash {
    width: 10%;
    height: 10%;
    margin-top: 5%;
    margin-right: 8%;
  }
  .list-cont {
    margin-top: 8%;
  }
  .detal {
    padding-bottom: 20%;
  }
  a {
    text-decoration: none;
    color: #000000;
  }
  a :hover {
    color: blue;
  }
`;

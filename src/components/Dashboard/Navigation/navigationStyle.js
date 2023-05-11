import styled from "styled-components";

export const NavigationContainer = styled.div`
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
  .details {
    width: 806px;
    height: 400px;
    /* background: rgba(66, 66, 64, 0.5);
    box-shadow: 0px 0px 25px rgba(168, 194, 251, 0.25); */
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
    /* justify-content: center; */
    /* align-items: center;*/
  }
  .deta-con {
    width: 420px;
    height: 400px;
    /* padding: 10px; */
    /* background: #ffffff; */
  }
  .nav-list {
    display: flex;
    /* justify-content: center; */
    align-self: center;
    margin-left: 60px;

    /* flex-direction: column; */
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

import styled from "styled-components";

export const ChatContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  /* height: 100 */
  .header {
    display: flex;
    justify-content: space-between;
  }
  .text {
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
  }
  .sub-head1 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 25%;
    background: rgba(168, 194, 251, 0.3);
  }
  .sub-head2 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .sub-head3 {
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
    width: 25%;
    background: rgba(168, 194, 251, 0.3);
  }
  .dis-cont {
    display: flex;
    flex-direction: column;
  }
  .input2 {
    background: #d9d9d9;
    width: 355px;
    height: 33px;
    border: none;
    padding-left: 5%;
    /* padding-left: 10%; */
  }
  .input {
    background: #d9d9d9;
    width: 355px;
    height: 33px;
    border: none;
    padding-left: 5%;
    /* padding-left: 10%; */
  }
  .topic-cont {
    /* width: 354px; */
    height: 683px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }
  .conv-cont {
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    width: 660px;
    height: 682px;
    background: rgba(168, 194, 251, 0.3);
    border-radius: 20px;
    margin-top: 5%;
  }
  .search-Cont {
    display: flex;
    justify-content: center;
    outline: none;
  }
  .img-cont {
    display: flex;
    justify-content: space-between;
  }
  .img-cont2 {
    display: flex;
    justify-content: space-between;
    padding: 5%;
    gap: 20px;
  }
  .img-cont3 {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 5%;
    gap: 20px;
  }
  .img {
    width: 10%;
    padding: 4%;
  }
  .text2 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
  }
  .onli-cont {
    display: flex;
    justify-content: center;
    margin-bottom: 5%;
    margin-top: 1%;
  }
  .text4 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    margin-right: 15%;
  }
  .text5 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    padding-left: 3%;
  }
  .border {
    width: 355px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  }

  .like-cont {
    display: flex;
    justify-content: space-between;
    margin-top: 10%;
    border-top: 1px solid rgba(0, 0, 0, 0.5);
  }

  .share {
    margin-left: 30%;
  }
  .comment {
    padding-right: 10%;
  }
  .comment-input {
    width: 490px;
    height: 60px;
    border: none;
    margin-left: 10%;
    border-radius: 20px;
    padding-left: 5%;
  }
  .inpt-cont {
    margin-top: 5%;
  }
  .thumb {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10%;
  }
  .icon {
    font-size: 30px;
    color: #2a52be;
    padding-right: 3%;
  }
  .Name-status {
    display: flex;
    justify-content: space-between;
    padding: 0 19%;
    margin-top: 5%;
  }
  .status {
    margin-right: 30%;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
  }
  .name {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
  }
  .img-commet {
    display: flex;
    justify-content: space-between;
    padding: 0 5%;
    gap: 20px;
  }
  .commet {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    padding-left: 2%;
  }
  .comet-cont {
    display: flex;
    align-items: center;
    border: none;
    width: 100%;
    /* position: fixed; */
    border-radius: 5px;
    margin-right: 35%;
    padding: 1px;
    background: gray;
  }
  .comet-cont2 {
    display: flex;
    align-items: center;
    border: none;
    width: 100%;
    /* position: fixed; */
    border-radius: 5px;
    margin-left: 30%;
    padding: 1px;
    background: gray;
  }
  .like-reply {
    display: flex;
    gap: 20px;
    padding-left: 20%;
  }
`;

import styled from "styled-components";

export const ReportfounditemContainer = styled.div`
  width: 100%;
  background: rgba(217, 217, 217, 0.35);
  height: fit-content;
  .header {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    width: 100%;
    height: 80px;
    background: #fff;
  }
  .reportfounditem-cont {
    width: 510px;
    height: 900px;
    background-color: #ffffff;
    margin: 2rem 0 4rem 30rem;
    box-shadow: 0px 0px 25px rgba(168, 194, 251, 0.25);
    /* margin: auto; */
    display: flex;
    flex-direction: column;
    /* border-radius: 50px; */
  }
  .sub {
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
  }
  .sub-head {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
  .text {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #012454;
  }
  .cat-cont {
    margin-left: 5rem;
  }
  .first {
    margin-left: 5rem;
  }
  .second-input {
    margin-right: 5rem;
  }
  .date {
    margin-left: 5rem;
    margin-right: 5rem;
  }
  .item-cont {
    margin-left: 5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  .text2 {
    color: #012454;
  }
  .colorCon {
    margin: 0 5rem 0 0;
  }
  .input {
    width: 200px;
    height: 40px;
    background: rgba(217, 217, 217, 0.2);
    border-radius: 10px;
    border: none;
    padding-left: 10px;
    outline: none;
  }
  .input2 {
    width: 300px;
    height: 40px;
    background: rgba(217, 217, 217, 0.2);
    border-radius: 10px;
    border: none;
    padding-left: 10px;
    outline: none;
  }
  .input3 {
    width: 345px;
    height: 45px;
    background: rgba(217, 217, 217, 0.2);
    border-radius: 5px;
    border: none;
    padding-left: 10px;
    outline: none;
  }
  .input4 {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    width: 345px;
    height: 90px;
    background: rgba(217, 217, 217, 0.2);
    border-radius: 5px;
    border: none;
    padding-left: 10px;
    outline: none;
    vertical-align: text-top;
  }
  .picker {
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 10px;
  }

  .locat-cont {
    margin-left: 5rem;
  }
  .desc-cont {
    margin-left: 5rem;
    margin-bottom: 2rem;
  }
  .submit-btn {
    width: 360px;
    margin-left: 5rem;
  }
`;

export const textareaStyle = {
  fontFamily: "Arial, sans-serif",
  fontSize: "16px",
  padding: "10px",
};

export const CustomStyle = {
  control: (base) => ({
    ...base,
    // border: "1px solid #DE3D6D",
    boxShadow: "none",
    border: "none",
    background: "#D9D9D9",
    width: "350px",
    minHeight: 48,
    marginBottom: 15,
    marginTop: 10,
    fontSize: 13,
    "&:hover": {
      // borderColor: "#DE3D6D",
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0 6px",
    color: "#012454",
  }),
  placeholder: (base) => ({
    ...base,
    textAlign: "left",
  }),
  input: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
    color: "#c4c4c4",
  }),
};

export const CustomStyles = {
  control: (base) => ({
    ...base,
    // border: "1px solid #DE3D6D",
    boxShadow: "none",
    border: "none",
    background: "#D9D9D9",
    width: "150px",
    minHeight: 48,
    marginBottom: 15,
    marginTop: 10,
    fontSize: 13,
    "&:hover": {
      // borderColor: "#DE3D6D",
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "0 6px",
    color: "#012454",
  }),
  placeholder: (base) => ({
    ...base,
    textAlign: "left",
  }),
  input: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
    color: "#c4c4c4",
  }),
};

import React, { useState } from "react";
import Footer from "../Footer/footer";
import {
  CustomStyle,
  CustomStyles,
  ReportlostitemContainer,
  textareaStyle,
} from "./reportlostitemStyle";
import Select from "react-select";
import { categoryOptions } from "../../utils/listofcategory";
import ColorPickerSelect from "../../utils/pickcolor";
import DateTimeInput from "../../utils/datetimepicker";
import { reportlist } from "../../utils/reporttype";
import { worthofitem } from "../../utils/worthofitem";
import { StyledButton } from "../Register/registerStyle";
import { useNavigate } from "react-router-dom";

const Reportlostitem = () => {
  const navigate = useNavigate();

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    navigate("/view-details");
  };

  return (
    <ReportlostitemContainer>
      {/* <form action=""> */}
      <div className="header">
        <h1 className="sub">Report lost item</h1>
      </div>
      <div className="reportlostitem-cont">
        <div className="sub-head">
          <p className="text">Provide the details below for your lost item</p>
        </div>
        <div className="cat-cont">
          <p className="text2">Category</p>
          <Select
            className="selections"
            styles={CustomStyle}
            options={categoryOptions}
            placeholder="Item type"
            // onChange={handleCategoryChange}
          />
        </div>
        <div className="item-cont">
          <div className="first-input">
            <p className="text2">Item name</p>
            <input
              className="input"
              type="text"
              placeholder="Enter name of item"
              // onChange={handleItemNameChange}
            />
          </div>
          <div className="colorCon">
            <p className="text2">Color item</p>
            <ColorPickerSelect />
          </div>
        </div>
        <div className="date">
          <p className="text2">Missing Date and Time</p>
          <DateTimeInput />
        </div>
        <div className="stol-cont">
          <div className="first">
            <p className="text2">Report Type</p>
            <Select
              className="selections"
              styles={CustomStyles}
              options={reportlist}
              placeholder="Select"
              // onChange={handleCategoryChange}
            />
          </div>
          <div className="second-input">
            <p className="text2"> Worth of item</p>
            <Select
              className="selections"
              styles={CustomStyles}
              options={worthofitem}
              placeholder="Select"
              // onChange={handleCategoryChange}
            />
          </div>
        </div>
        <div className="locat-cont">
          <p className="text2"> Missing Location</p>
          <input
            className="input3"
            type="text"
            placeholder="Enter the location last seen"
            // onChange={handleItemNameChange}
          />
        </div>
        <div className="desc-cont">
          <p className="text2"> Additional information</p>
          <textarea
            style={textareaStyle}
            className="input4"
            type="text"
            placeholder="Enter description of item"
            // onChange={handleItemNameChange}
          />
        </div>
        <StyledButton
          className="submit-btn"
          type="submit"
          onClick={handleSubmit}
        >
          Continue
        </StyledButton>
      </div>
      {/* </form> */}
      <Footer />
    </ReportlostitemContainer>
  );
};

export default Reportlostitem;

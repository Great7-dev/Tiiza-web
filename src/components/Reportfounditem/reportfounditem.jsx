import React from "react";
import DateTimeInput from "../../utils/datetimepicker";
import { categoryOptions } from "../../utils/listofcategory";
import { reportlist } from "../../utils/reporttype";
import { worthofitem } from "../../utils/worthofitem";
import Footer from "../Footer/footer";
import ColorPickerSelect from "../../utils/pickcolor";
import Select from "react-select";
import { StyledButton } from "../Register/registerStyle";
import {
  CustomStyle,
  CustomStyles,
  ReportfounditemContainer,
  textareaStyle,
} from "./reportfounditemStyle";

const Reportfounditem = () => {
  return (
    <ReportfounditemContainer>
      <div className="header">
        <h1 className="sub">Report found item</h1>
      </div>
      <div className="reportfounditem-cont">
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
        <StyledButton className="submit-btn" type="submit">
          Continue
        </StyledButton>
      </div>
      <Footer />
    </ReportfounditemContainer>
  );
};

export default Reportfounditem;

import React, { useState } from "react";
import { ReportlostitemContainer } from "../components/Reportlostitem/reportlostitemStyle";

const ColorPicker = () => {
  const [color, setColor] = useState("");
  return (
    <ReportlostitemContainer>
      <input
        type="color"
        onChange={(e) => setColor(e.target.value)}
        className="picker"
      />
      {/* <h1>{color}</h1> */}
    </ReportlostitemContainer>
  );
};

export default ColorPicker;

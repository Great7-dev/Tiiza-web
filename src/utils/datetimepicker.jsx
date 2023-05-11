import { useState } from "react";
import { ReportlostitemContainer } from "../components/Reportlostitem/reportlostitemStyle";

const DateTimeInput = () => {
  const [dateTime, setDateTime] = useState("");

  const handleDateTimeChange = (event) => {
    setDateTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dateTime);
  };

  return (
    <ReportlostitemContainer onSubmit={handleSubmit}>
      <input
        className="input2"
        type="datetime-local"
        value={dateTime}
        onChange={handleDateTimeChange}
      />
    </ReportlostitemContainer>
  );
};

export default DateTimeInput;

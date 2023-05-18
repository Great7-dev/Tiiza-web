import React, { useState } from "react";
import InputField from "../../../utils/input";
import { StyledButton } from "../../Register/registerStyle";
import { EmailModalContainer } from "../EmailModal/emailModalStyle";
import { useNavigate } from "react-router-dom";

const QrcodeModal = () => {
  const [imageDataUrls, setImageDataUrls] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/item-tag");
  };
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const urls = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = () => {
        const imageDataUrl = reader.result;
        urls.push(imageDataUrl);
        if (urls.length === files.length) {
          setImageDataUrls([...imageDataUrls, ...urls]);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <EmailModalContainer>
      <div className="mymodal">
        <h1 className="text">Items with QRcode</h1>
        <div className="container">
          <div className="image-grid">
            {imageDataUrls.map((url, index) => (
              <div key={index} className="image-container">
                <div
                  className="circular-container"
                  style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: "cover",
                  }}
                />
                {/* <div className="caption">Image {index + 1}</div> */}
              </div>
            ))}
          </div>
          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            className="imginput"
          />
          <p className="max">Max: 3</p>
        </div>
        <div>
          <InputField placeholder="Enter Item name" />
          <InputField placeholder="Color of item" />
          <InputField placeholder="Enter QRcode" />
          <StyledButton
            className="submit-btn"
            type="submit"
            onClick={handleSubmit}
          >
            Save
          </StyledButton>
        </div>
      </div>
    </EmailModalContainer>
  );
};

export default QrcodeModal;

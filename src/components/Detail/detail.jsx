import React, { useState } from "react";
import Footer from "../Footer/footer";
import { StyledButton } from "../Register/registerStyle";
import { DetailContainer } from "./detailStyle";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate();
  const [imageDataUrls, setImageDataUrls] = useState([]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/subscription");
  };

  return (
    <DetailContainer>
      <div className="header">
        <h1 className="sub">Detail view</h1>
      </div>
      <div className="det-cont">
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
        <div className="repot-cont">
          <div className="text-cont">
            <p className="text">Report details</p>
          </div>
          <div className="detail-cont">
            <p className="text1">Item type</p>
            <p className="text2">Key</p>
          </div>
          <div className="detail-cont">
            <p className="text1">Item name</p>
            <p className="text2">Camry Key</p>
          </div>
          <div className="detail-cont">
            <p className="text1">Color</p>
            <p className="text2">Black</p>
          </div>
          <div className="detail-cont">
            <p className="text1">Report type</p>
            <p className="text2">Missing</p>
          </div>
          <div className="detail-cont">
            <p className="text1">Missing date</p>
            <p className="text2">16-03-2023</p>
          </div>
          <div className="detail-cont">
            <p className="text1">Missing time</p>
            <p className="text2">5:30pm</p>
          </div>
          <div className="detail-cont">
            <p className="text1">Missing location</p>
            <p className="text2">Lekki</p>
          </div>
          <StyledButton
            className="submit-btn"
            type="submit"
            onClick={handleSubmit}
          >
            Save report
          </StyledButton>
        </div>
      </div>
      <Footer />
    </DetailContainer>
  );
};

export default Details;

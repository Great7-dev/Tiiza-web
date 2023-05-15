import React from "react";
import { GalleryContainer } from "./galleryStyle";
import Logo from "../../assets/Document.svg";
import Logo2 from "../../assets/Images.svg";
import Logo3 from "../../assets/Videos.svg";
import Logo4 from "../../assets/QRcode.svg";
import { BsPlusCircle } from "react-icons/bs";
import { useRecoilState } from "recoil";
import {
  DocModalState,
  ImgModalState,
  QrModalState,
  VidModalState,
} from "../../atoms/galleryMod";
import DocModal from "../Modal/DocModal/docModal";
import ImgModal from "../Modal/ImgModal/imgModal";
import VidModal from "../Modal/VidModal/vidModal";
import QrcodeModal from "../Modal/ItemQrcode/Qrcode";

const Gallery = () => {
  const [showDoc, setShowDoc] = useRecoilState(DocModalState);
  const handleShowDoc = () => {
    setShowDoc(true);
  };

  const [showImg, setShowImg] = useRecoilState(ImgModalState);
  const handleShowImg = () => {
    setShowImg(true);
  };

  const [showVid, setShowVid] = useRecoilState(VidModalState);
  const handleShowVid = () => {
    setShowVid(true);
  };
  const [showQR, setShowQR] = useRecoilState(QrModalState);
  const handleShowQr = () => {
    setShowQR(true);
  };

  return (
    <GalleryContainer>
      <div className="header">
        <h1 className="sub">
          Save all your important things you don’t want to lose
        </h1>
      </div>
      <div className="gallery-cont">
        <div className="sub-text">
          <p className="text"> Save you important files here</p>
        </div>
        <div className="fist-cont">
          <div>
            <BsPlusCircle className="add" onClick={handleShowDoc} />
            <img src={Logo} alt="img" />
            <p className="text2">Document</p>
            {showDoc && <DocModal />}
          </div>
          <div>
            <BsPlusCircle className="add" onClick={handleShowImg} />
            <img src={Logo2} alt="img" />
            <p className="text2">Images</p>
            {showImg && <ImgModal />}
          </div>
        </div>
        <div className="fist-cont">
          <div>
            <BsPlusCircle className="add" onClick={handleShowVid} />
            <img src={Logo3} alt="img" />
            <p className="text2">Videos</p>
            {showVid && <VidModal />}
          </div>
          <div>
            <BsPlusCircle className="add" onClick={handleShowQr} />
            <img src={Logo4} alt="img" />
            <p className="text2">Item tag with QRcode</p>
            {showQR && <QrcodeModal />}
          </div>
        </div>
      </div>
    </GalleryContainer>
  );
};

export default Gallery;

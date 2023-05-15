import { atom } from "recoil";

export const DocModalState = atom({
  key: "DocModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const ImgModalState = atom({
  key: "ImgModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const VidModalState = atom({
  key: "VidModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const QrModalState = atom({
  key: "QrModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

import { atom } from "recoil";

export const ResetModalState = atom({
  key: "resModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

import { atom } from "recoil";

export const NavModalState = atom({
  key: "navModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

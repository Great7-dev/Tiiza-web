import { atom } from "recoil";

export const MenuModalState = atom({
  key: "MenuModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

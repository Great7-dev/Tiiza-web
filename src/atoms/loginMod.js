import { atom } from "recoil";

export const LoginModalState = atom({
  key: "logModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

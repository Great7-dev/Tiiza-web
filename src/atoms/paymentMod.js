import { atom } from "recoil";

export const PaymentModalState = atom({
  key: "PaymentModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

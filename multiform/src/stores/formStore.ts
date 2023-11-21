import { create } from "zustand";
import { TFirstFormValues } from "../models/TFisrtFormValues";

type TamzStoreState = {
  firstForm: TFirstFormValues;
  emptyCart: () => void;
};

export const useamzStore = create<TamzStoreState>()((set) => ({
  firstForm: {
    name: "",
    email: "",
    phone: "",
  },
  emptyCart: () =>
    set({
      firstForm: {
        name: "",
        email: "",
        phone: "",
      },
    }),
}));

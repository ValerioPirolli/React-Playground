import { create } from "zustand";
import { TFirstFormValues } from "../models/TFisrtFormValues";

type TamzStoreState = {
  firstForm: TFirstFormValues;
  counter: number;
  addCounter: () => void;
  removeCounter: () => void;
};

export const useFormStore = create<TamzStoreState>((set) => ({
  firstForm: {
    name: "",
    email: "",
    phone: "",
  },
  counter: 0,
  addCounter: () =>
    set((state) => ({
      counter: state.counter + 1,
    })),
  removeCounter: () =>
    set((state) => ({
      counter: state.counter - 1,
    })),
}));

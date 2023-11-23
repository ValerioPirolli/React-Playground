import { devtools } from "zustand/middleware";
import { create } from "zustand";
import { TUserData } from "../models/TUserData";
import { TPlan } from "../models/TPlan";

type TStoreState = {
  userData: TUserData;
  userPlan: TPlan;
  stepCounter: number;
  setUserData: (data: TUserData) => void;
  setUserPlan: (data: TPlan) => void;
  addCounter: () => void;
  removeCounter: () => void;
};

export const useFormStore = create<TStoreState>()(
  devtools((set) => ({
    userData: {
      name: "",
      email: "",
      phone: "",
    },
    userPlan: {
      name: "arcade",
      periodicity: "montly",
    },
    stepCounter: 0,
    addCounter: () =>
      set(
        (state) => ({
          ...state,
          stepCounter: state.stepCounter + 1,
        }),
        undefined,
        "incremento step"
      ),
    setUserData: (userData) => {
      set((state) => ({
        ...state,
        userData,
      }));
    },
    setUserPlan: (userPlan) => {
      set((state) => ({
        ...state,
        userPlan,
      }));
    },
    removeCounter: () =>
      set(
        (state) => ({
          ...state,
          stepCounter: state.stepCounter - 1,
        }),
        undefined,
        "decremento step"
      ),
  }))
);

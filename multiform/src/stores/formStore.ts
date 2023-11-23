import { devtools } from "zustand/middleware";
import { create } from "zustand";
import { TUserData } from "../models/TUserData";
import { TPlan } from "../models/TPlan";

type TStoreState = {
  userData: TUserData;
  userPlan: TPlan;
  stepCounter: number;
  addons: {
    piano1: boolean;
    piano2: boolean;
    piano3: boolean;
  };
  setUserData: (data: TUserData) => void;
  setUserPlan: (data: TPlan) => void;
  addCounter: () => void;
  counterToOne: () => void;
  setAddOns: (addOn: keyof TStoreState["addons"], value: boolean) => void;
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
    addons: {
      piano1: false,
      piano2: false,
      piano3: false,
    },
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
    setAddOns: (addOn, value) => {
      set((state) => ({
        ...state,
        addons: {
          ...state.addons,
          [addOn]: value,
        },
      }));
    },
    counterToOne: () =>
      set(
        (state) => ({
          ...state,
          stepCounter: (state.stepCounter = 1),
        }),
        undefined,
        "decremento step"
      ),
  }))
);

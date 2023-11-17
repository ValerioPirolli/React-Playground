import { create } from 'zustand'

type TBearStoreState = {
    bears: number;
    increasePopulation: ()=> void;
    decreasePopulation: ()=> void;
    removeAllBears: ()=> void;
}

export const useBearStore = create<TBearStoreState>()((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1,})),
  decreasePopulation: () => set((state) => {
    if (state.bears > 0) {
      return { bears: state.bears - 1 };
    } else {
      return state;
    }
  }),
  
  removeAllBears: () => set({ bears: 0 }),
}))
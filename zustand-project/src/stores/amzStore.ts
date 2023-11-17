import { create } from "zustand";

type Product = {
    name: string;
    price: number;
  };

type TamzStoreState = {
    cart : Product[],
    addToCart: (product:Product) => void;
    removeFromCart: (productName:string) => void;
    emptyCart: () => void;
}

export const useamzStore = create<TamzStoreState>()((set) => ({

    cart: [],
    addToCart: (product) =>
    set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (productName) =>
    set((state) => ({ cart: state.cart.filter((item) => item.name !== productName) })),
    emptyCart: () => set({ cart: [] }),
  }))
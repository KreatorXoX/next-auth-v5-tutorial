import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ProductState {
  products: TableProduct[];
  addProduct: (product: TableProduct) => void;
  removeProduct: (product: TableProduct) => void;
  updateAmount: (by: number, asin: string) => void;
}

export const useProductStore = create<ProductState>()(
  persist(
    (set) => ({
      products: [],
      addProduct: (product) =>
        set((state) => ({
          products: [
            ...state.products.filter((p) => p.asin !== product.asin),
            product,
          ],
        })),
      removeProduct: (product) =>
        set((state) => ({
          products: state.products.filter((p) => p.asin !== product.asin),
        })),
      updateAmount: (by, asin) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.asin === asin ? { ...p, amount: p.amount! + by } : p
          ),
        })),
    }),
    { name: "product-storage" }
  )
);

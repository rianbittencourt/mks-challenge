import create from "zustand";

interface Item {
  id: number;
  name: string;
  price: number | string;
  description: string;
  photo: string;
  count?: number;
}

interface CartStore {
  cart: Item[];
  addedSuccessfully?: boolean;
  message?: string;
  addToCart: (item: Item) => void;
  removeFromCart: (id: number) => void;
  increaseCount: (id: number) => void;
  decreaseCount: (id: number) => void;
}

const getInitialCartState = (): CartStore => {
  const isBrowser = typeof window !== "undefined";

  const cartFromLocalStorage = isBrowser ? localStorage.getItem("cart") : null;

  const initialCart = cartFromLocalStorage
    ? JSON.parse(cartFromLocalStorage)
    : [];

  return {
    cart: initialCart,
    addToCart: () => {},
    removeFromCart: () => {},
    increaseCount: () => {},
    decreaseCount: () => {},
  };
};
export const useCartStore = create<CartStore>((set) => ({
  ...getInitialCartState(),

  addToCart: (item) =>
    set((state) => {
      const isItemInCart = state.cart.some(
        (cartItem) => cartItem.id === item.id
      );

      if (!isItemInCart) {
        const { id, name, price, description, photo } = item;
        const newCart = [
          ...state.cart,
          { id, name, price, description, photo, count: 1 },
        ];

        localStorage.setItem("cart", JSON.stringify(newCart));
        return {
          cart: newCart,
          addedSuccessfully: true,
          message: "Item adicionado ao carrinho",
        };
      }

      return {
        addedSuccessfully: false,
        message: "Item já existente no carrinho",
      };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const newCart = state.cart.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    }),

  increaseCount: (id) =>
    set((state) => {
      const newCart = state.cart.map((item) =>
        item.id === id ? { ...item, count: (item.count || 0) + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    }),

  decreaseCount: (id) =>
    set((state) => {
      const newCart = state.cart
        .map((item) =>
          item.id === id && item.count && item.count > 0
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter((item) => item.count !== 0);

      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    }),
}));

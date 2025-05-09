import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFilters = create((set) => ({
  type: "all",
  setType: (type) => set({ type }),
}));

export const useStoreProject = create(
  persist(
    (set) => ({
      cart: [],
      favorites: [],

      addToCart: (product) =>
        set((state) => ({ cart: [...state.cart, product] })),
      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== product.id),
        })),

      addToFavorites: (product) =>
        set((state) => ({ favorites: [...state.favorites, product] })),
      removeFromFavorites: (product) =>
        set((state) => ({
          favorites: state.favorites.filter((item) => item.id !== product.id),
        })),
    }),
    { name: "store" }
  )
);

export const useAuthStore = create((set, get) => {
  const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

  return {
    user: null,
    users: storedUsers,

    register: (newUser) => {
      const { users } = get();
      const userExists = users.some(
        (user) =>
          user.username === newUser.username || user.email === newUser.email
      );

      if (userExists) {
        alert("Пользователь с таким логином или email уже существует!");
        return;
      }

      const updatedUsers = [...users, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      set({ users: updatedUsers });
    },

    login: (username, password) => {
      const { users } = get();
      const foundUser = users.find(
        (user) => user.username === username && user.password === password
      );

      if (!foundUser) {
        alert("Неправильный логин или пароль!");
        return;
      }

      set({ user: foundUser });
    },

    logout: () => set({ user: null }),
  };
});

export const useOrderStore = create(
  persist(
    (set) => ({
      orders: [],
      addOrder: (order) =>
        set((state) => ({ orders: [...state.orders, order] })),
    }),
    { name: "orders" }
  )
);

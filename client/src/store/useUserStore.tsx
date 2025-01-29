import { create } from "zustand";
import { UserI } from "../types/index";

type User = {
  user: UserI | null;
};

type Action = {
  setUser: (user: UserI) => void;
};

export const useUserStore = create<User & Action>((set, get) => ({
  user: null,
  setUser: (user: UserI) => set({ user }),
}));

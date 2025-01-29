import { create } from "zustand";
import { PropertyI } from "@/types";

interface PropertyStore {
  currentPropertyId: string;
  setCurrentPropertyId: (id: string) => void;
  properties: PropertyI[];
  setProperties: (properties: PropertyI[]) => void;
  filter: {
    city: string;
    type: string;
  };
  setFilter: (filter: { city: string; type: string }) => void;
}

const initialFilter = {
  city: "",
  type: "",
};

export const usePropertyStore = create<PropertyStore>((set) => ({
  currentPropertyId: "",
  setCurrentPropertyId: (id: string) => set({ currentPropertyId: id }),
  properties: [],
  filter: initialFilter,
  setFilter: (filter: { city: string; type: string }) => set({ filter }),
  setProperties: (properties: PropertyI[]) => set({ properties }),
}));

import { create } from "zustand";

type State = {
  form: {
    title: string;
    description: string;
    price: string;
    address: string;
    city: string;
    zipcode: string;
    bien_type: string;
    created_at: string;
    updated_at: string;
  };
};

type Action = {
  setForm: (form: any) => void;
};

const form = {
  id: "",
  title: "",
  description: "",
  price: "",
  address: "",
  city: "",
  zipcode: "",
  bien_type: "",
  created_at: "",
  updated_at: "",
};

export const useFormStore = create<State & Action>((set) => ({
  form: form,
  setForm: (form) => set({ form }),
}));

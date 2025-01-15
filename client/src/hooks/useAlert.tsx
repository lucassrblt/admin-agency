import { useContext } from "react";
import { AlertContext } from "@/context/AlertContext";

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error("useAlert must be used within a AlertProvider");
  }
  return context;
};

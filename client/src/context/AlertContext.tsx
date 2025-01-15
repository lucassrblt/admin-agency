import { Alert } from "@/components/ui/alert";
import { createContext, ReactNode, useState } from "react";
import { AlertContextStateI, AlertContextValueI } from "@/types";
import { useContext } from "react";

export const AlertContext = createContext<AlertContextValueI | undefined>(
  undefined
);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [alert, setAlert] = useState<AlertContextStateI>({
    message: "",
    type: "",
    isVisible: false,
  });

  return (
    <AlertContext.Provider value={{ alert, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

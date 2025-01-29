import { useAlert } from "@/hooks/useAlert";
import { AlertCircle } from "lucide-react";
import clsx from "clsx";
import { useEffect } from "react";
export default function AlertComponent() {
  const context = useAlert();
  const { alert } = context;

  useEffect(() => {
    if (alert.isVisible) {
      setTimeout(() => {
        context.setAlert({ ...alert, isVisible: false });
      }, 3000);
    }
  }, [alert]);

  return (
    <div
      className={clsx(
        "flex px-3 py-2 w-fit min-w-32 bg-red-200 rounded-xl gap-3 items-center fixed -top-24 z-20 transition-all duration-300",
        { "top-6 ": alert.isVisible }
      )}
    >
      <AlertCircle className="h-6 w-6 stroke-red-500" />
      <div className="flex flex-col">
        <h4 className="text-red-500 font-bold text-sm">
          {alert.type === "error" ? "Erreur" : "Succes"}
        </h4>
        <p className="text-red-500 text-sm font-regular">{alert.message}</p>
      </div>
    </div>
  );
}

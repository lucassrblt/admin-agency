import { useAlert } from "@/hooks/useAlert";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { AlertCircle } from "lucide-react";
import clsx from "clsx";

export default function AlertComponent() {
  const context = useAlert();
  const { alert } = context;

  return (
    <Alert
      variant="destructive"
      className={clsx(
        "flex items-start absolute w-1/3 justify-self-center transition-all duration-300 -top-24",
        { "top-6": alert.isVisible }
      )}
    >
      <AlertCircle className="h-4 w-4" />
      <div className="flex flex-col justify-between p-0">
        <AlertTitle>{alert.type === "error" ? "Erreur" : "Succes"}</AlertTitle>
        <AlertDescription>{alert.message}</AlertDescription>
      </div>
    </Alert>
  );
}

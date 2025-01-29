import FormHeader from "./FormHeader";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormStore } from "@/store/useFormStore";
import FormFooter from "./FormFooter";
import { useEffect } from "react";
import { BienTypeE, TransactionTypeE } from "@/types";

export default function FormTarget() {
  const { setTarget, form } = useFormStore();
  useEffect(() => {
    console.log("form", form);
  }, [form]);

  return (
    <div className="flex flex-col gap-8 w-full max-w-screen-md">
      <FormHeader
        title="Ciblage"
        description="Remplissez les informations de ciblage de votre annonces"
      />
      <form className="flex flex-col gap-6 w-full">
        <div className="flex flex-col w-full gap-1.5">
          <Label htmlFor="bienType">
            Type de transaction <span className="text-red-500">*</span>
          </Label>
          <Select
            value={form.targetSection.transactionType}
            onValueChange={(value) =>
              setTarget({
                transactionType: value as TransactionTypeE,
              })
            }
          >
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Type de transaction" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="SALE">Vente</SelectItem>
              <SelectItem value="RENT">Location</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col w-full gap-1.5">
          <Label htmlFor="bienType">
            Type de bien <span className="text-red-500">*</span>
          </Label>
          <Select
            value={form.targetSection.bienType}
            onValueChange={(value) =>
              setTarget({ bienType: value as BienTypeE })
            }
          >
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Type de biens" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="APARTMENT">Appartement</SelectItem>
              <SelectItem value="HOUSE">Maison</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </form>
      <FormFooter />
    </div>
  );
}

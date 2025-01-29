import FormHeader from "./FormHeader";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormStore } from "@/store/useFormStore";

export default function FormDpe() {
  const { form, setDpeForm, dpeForm } = useFormStore();

  const handleDpeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDpeForm({
        ...dpeForm,
        dpeImg: e.target.files[0],
      });
    }
  };

  const handleGesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDpeForm({
        ...dpeForm,
        gesImg: e.target.files[0],
      });
    }
  };
  return (
    <div className="flex flex-col gap-8 w-full">
      <FormHeader
        title="Diagnostic de performance énergétique"
        description="Remplissez les informations  propos du diagnostic de performance énergétique"
      />
      <div className="w-full flex flex-wrap gap-6">
        <div className="flex flex-col w-fit min-w-[33%] gap-1.5">
          <Label htmlFor="bienType">
            Date de réalisation du DPE <span className="text-red-500">*</span>
          </Label>
          <Select
            value={dpeForm.dpeDate}
            onValueChange={(value) =>
              setDpeForm({
                ...dpeForm,
                dpeDate: value,
              })
            }
          >
            <SelectTrigger className="w-full bg-white">
              <SelectValue placeholder="Entrer une date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="BEFORE">Avant le 1er juillet 2021</SelectItem>
              <SelectItem value="AFTER">Après le 1er juillet 2021</SelectItem>
              <SelectItem value="NOTSUBMITTED">Non soumis au DPE</SelectItem>
              <SelectItem value="NULL">DPE vierge</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {dpeForm.dpeDate &&
          (dpeForm.dpeDate == "BEFORE" || dpeForm.dpeDate === "AFTER") && (
            <>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Etiquette DPE</Label>
                <Input
                  id="picture"
                  type="file"
                  onChange={(e) => handleDpeChange(e)}
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="picture">Etiquette GES</Label>
                <Input
                  id="picture"
                  type="file"
                  onChange={(e) => handleGesChange(e)}
                />
              </div>
            </>
          )}
      </div>
    </div>
  );
}

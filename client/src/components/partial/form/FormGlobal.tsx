import FormHeader from "./FormHeader";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useFormStore } from "@/store/useFormStore";
import DatePicker from "@/components/partial/DatePicker";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import InputWDropdown from "../InputWDropdown";
import { numberChecker } from "@/functions/checker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FormFooter from "./FormFooter";
import { TransactionTypeE } from "@/types";
import { useEffect, useState } from "react";

export default function FormGlobal() {
  const { form } = useFormStore();

  return (
    <div className="flex flex-col gap-12 w-4/5">
      <form className="flex flex-col gap-10 w-full">
        {/* General section */}
        <GeneralSection />

        {/* Prix */}
        {form.targetSection.transactionType &&
        form.targetSection.transactionType === TransactionTypeE.RENT ? (
          <>
            <PriceForRent />
            <AgencyFees />
          </>
        ) : (
          <PriceSection />
        )}

        {/* Localisation  */}
        <LocalisationSection />
      </form>
      <FormFooter />
    </div>
  );
}

function GeneralSection() {
  const { setGeneral, form } = useFormStore();
  const section = form.generalSection.general;
  return (
    <div className="flex flex-col gap-8">
      <FormHeader
        title="Informations Générales"
        description="Remplissez les informations générales de votre annonce"
      />
      <div className="w-full flex flex-wrap gap-6">
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="title">
            Titre de l'annonce <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="title"
            placeholder="Entrez le titre de l'annonce"
            required
            value={section.title}
            onChange={(e) => setGeneral({ title: e.target.value })}
          />
        </div>
        <div className="flex flex-col w-2/3 gap-1.5">
          <Label htmlFor="message">
            Description de l'annonce <span className="text-red-500">*</span>
          </Label>
          <Textarea
            placeholder="Entrer votre description"
            id="message"
            value={section.description}
            onChange={(e) => setGeneral({ description: e.target.value })}
          />
        </div>
        <DatePicker label="Date de disponibilité" subkey="availabilityDate" />
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="bienType">Sous-type du bien</Label>
          <Select
            value={section.subtype}
            onValueChange={(value) => setGeneral({ subtype: value })}
          >
            <SelectTrigger className="w-fit bg-white">
              <SelectValue placeholder="Sous-type du bien" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="DUPLEX">Duplex</SelectItem>
              <SelectItem value="SERVECHAMBER">Chambre de service</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="surface">
            Surface <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="surface"
            placeholder="Entrez la surface"
            value={section.surface}
            onChange={(e) =>
              setGeneral({
                surface: numberChecker(
                  form.generalSection.general.surface,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="landSurface">
            Surface terrain <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="landSurface"
            placeholder="Entrez la surface terrain"
            value={section.landSurface}
            onChange={(e) =>
              setGeneral({
                landSurface: numberChecker(
                  form.generalSection.general.landSurface,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="maxSurface">Surface maximum</Label>
          <Input
            type="text"
            id="maxSurface"
            placeholder="Entrez la surface maximum"
            value={section.maxSurface}
            onChange={(e) =>
              setGeneral({
                maxSurface: numberChecker(
                  form.generalSection.general.maxSurface,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="room">
            Nombre de pièces <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="room"
            placeholder="Entrez le nombre de pièces"
            value={section.room}
            onChange={(e) =>
              setGeneral({
                room: numberChecker(
                  form.generalSection.general.room,
                  e.target.value
                ),
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

function PriceSection() {
  const { setPriceForBuy, form } = useFormStore();
  const [honorary, setHonorary] = useState(0);
  const honoraryLabel =
    form.generalSection.priceForBuy.honoraryFor === "SELLER"
      ? "Prix du bien (hors honoraires à la charge du vendeur)"
      : form.generalSection.priceForBuy.honoraryFor === "BUYER"
      ? "Prix du bien hors honoraires"
      : "Prix du bien (hors honoraires à la charge de l'acquéreur)";

  useEffect(() => {
    // Met à jour les valeurs calculées lorsque les dépendances changent
    const newHonorary = calculateHonorary();
    setHonorary(newHonorary);
  }, [
    form.generalSection.priceForBuy.price,
    form.generalSection.priceForBuy.landPrice,
  ]);

  const calculateHonorary = () => {
    if (
      !form.generalSection.priceForBuy.price ||
      !form.generalSection.priceForBuy.landPrice
    )
      return 0;
    const totalPrice =
      Number(form.generalSection.priceForBuy.price) +
      Number(form.generalSection.priceForBuy.landPrice);
    const value =
      (Number(form.generalSection.priceForBuy.priceWithHonorary) / totalPrice) *
      100;
    setPriceForBuy({ honorary: value });
    return value;
  };

  return (
    <div className="flex flex-col gap-8">
      <FormHeader
        title="Prix"
        description="Remplissez les informations de prix"
      />
      <div className="flex flex-wrap w-full gap-6">
        <div className="flex flex-col w-fit gap-1.5">
          <Label htmlFor="honorary">
            Honoraire à charge de <span className="text-red-500">*</span>
          </Label>
          <Select
            value={form.generalSection.priceForBuy.honoraryFor}
            onValueChange={(value) => setPriceForBuy({ honoraryFor: value })}
          >
            <SelectTrigger className="w-fit bg-white">
              <SelectValue placeholder="A l'issu de la vente les honoraires sont à la charge de" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="BUYER">Acquéreur</SelectItem>
              <SelectItem value="SELLER">Vendeur</SelectItem>
              <SelectItem value="BOTH">Acquéreur et vendeur</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="city">
            Prix du bien <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="city"
            placeholder="Entrez le prix du bien"
            value={form.generalSection.priceForBuy.price}
            onChange={(e) =>
              setPriceForBuy({
                price: numberChecker(
                  form.generalSection.priceForBuy.price,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="landPrice">
            Prix du terrain <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="landPrice"
            placeholder="Entrez le prix du terrain"
            value={form.generalSection.priceForBuy.landPrice}
            onChange={(e) =>
              setPriceForBuy({
                landPrice: numberChecker(
                  form.generalSection.priceForBuy.landPrice,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex flex-col w-fit gap-1.5">
          <Label
            htmlFor="price"
            className="whitespace-nowrap"
          >{`${honoraryLabel}`}</Label>
          <Input
            type="text"
            id="landPrice"
            value={
              Number(form.generalSection.priceForBuy?.landPrice || 0) +
                Number(form.generalSection.priceForBuy?.price || 0) || ""
            }
            disabled
          />
        </div>
        <div className="flex flex-col w-fit gap-1.5">
          <Label htmlFor="price" className="whitespace-nowrap">
            Prix du bien incluant les honoraires à la charge de l'acquéreur
          </Label>
          <Input
            type="text"
            id="landPrice"
            value={form.generalSection.priceForBuy.priceWithHonorary}
            onChange={(e) =>
              setPriceForBuy({
                priceWithHonorary: numberChecker(
                  form.generalSection.priceForBuy.priceWithHonorary,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex flex-col w-fit gap-1.5">
          <Label htmlFor="price" className="whitespace-nowrap">
            Honoraires TTC en % du prix du bien hors honoraires{" "}
          </Label>
          <Input type="text" id="landPrice" value={honorary} disabled />
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="">
            Prix au mcarré <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="landPrice"
            placeholder="Entrez le prix du terrain"
            value={form.generalSection.priceForBuy.priceSurface}
            onChange={(e) =>
              setPriceForBuy({
                priceSurface: numberChecker(
                  form.generalSection.priceForBuy.priceSurface,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex items-center w-1/3 space-x-2">
          <Switch
            id="draw-mode"
            onCheckedChange={(value) => setPriceForBuy({ coownership: value })}
            checked={form.generalSection.priceForBuy.coownership}
          />
          <Label htmlFor="draw-mode">Copropriété</Label>
        </div>
      </div>
    </div>
  );
}

function PriceForRent() {
  const { setPriceForRent, form } = useFormStore();
  useEffect(() => {
    // Met à jour les valeurs calculées lorsque les dépendances changent
    const newRentBySurface = calculateRentBySurface();
    const newRentWithCharges = calculateRentWithCharges();
    setRentBySurface(newRentBySurface);
    setRentWithCharges(newRentWithCharges);
  }, [
    form.generalSection.priceForRent.rentBase,
    form.generalSection.general.surface,
    form.generalSection.priceForRent.chargesValue,
  ]);

  const calculateRentBySurface = () => {
    if (
      !form.generalSection.priceForRent.rentBase ||
      !form.generalSection.general.surface
    )
      return undefined;
    const value =
      form.generalSection.priceForRent.rentBase /
      form.generalSection.general.surface;
    setPriceForRent({ rentBySurface: value });
    return value;
  };

  const calculateRentWithCharges = () => {
    if (
      !form.generalSection.priceForRent.rentBase ||
      !form.generalSection.priceForRent.chargesValue
    )
      return undefined;
    const value =
      Number(form.generalSection.priceForRent.rentBase) +
      Number(form.generalSection.priceForRent.chargesValue);
    setPriceForRent({ rentWithCharges: value });
    return value;
  };

  return (
    <div className="flex flex-col gap-8">
      <FormHeader
        title="Prix"
        description="Remplissez les informations de prix"
      />
      <div className="flex flex-wrap w-full gap-6">
        <div className="flex items-center w-1/3 space-x-2">
          <Switch
            id="draw-mode"
            onCheckedChange={(value) => setPriceForRent({ tenseArea: value })}
            checked={form.generalSection.priceForRent.tenseArea}
          />
          <Label htmlFor="draw-mode">
            Bien en zone tendue soumis à l'encadrement des loyers ?
          </Label>
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="">
            Loyer mensuel de base (hors charges en euros){" "}
            <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="landPrice"
            placeholder="Entrez le loyer mensuelle de base"
            value={form.generalSection.priceForRent.rentBase}
            onChange={(e) =>
              setPriceForRent({
                rentBase: numberChecker(
                  form.generalSection.priceForRent.rentBase,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="">
            Loyer mensuel par m2 <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="landPrice"
            placeholder="Entrez le loyer mensuelle par m2"
            value={rentBySurface}
            disabled
            onChange={(e) =>
              setPriceForRent({
                rentBySurface: numberChecker(
                  form.generalSection.priceForRent.rentBySurface,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="">Complémént de loyer (en euros)</Label>
          <Input
            type="text"
            id="landPrice"
            placeholder="Entrez le prix du terrain"
            value={form.generalSection.priceForRent.rentComplementary}
            onChange={(e) =>
              setPriceForRent({
                rentComplementary: numberChecker(
                  form.generalSection.priceForRent.rentComplementary,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="bienType">Charges</Label>
          <Select
            value={form.generalSection.priceForRent.charges}
            onValueChange={(value) => setPriceForRent({ charges: value })}
          >
            <SelectTrigger className="w-fit bg-white">
              <SelectValue placeholder="Type de charges" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="FORFAITAIRE">Forfaitaire mensuelle</SelectItem>
              <SelectItem value="MENSUELLES">
                Prévisionnelles mensuelles avec régularisation anuelles
              </SelectItem>
              <SelectItem value="ANUELLES">
                Remboursement annuel par le locataire
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="">
            Montant des charges mensuelles récupérables (en euros){" "}
          </Label>
          <Input
            type="text"
            id="landPrice"
            placeholder="Entrer le montant des charges mensuelles récupérables"
            value={form.generalSection.priceForRent.chargesValue}
            onChange={(e) =>
              setPriceForRent({
                chargesValue: numberChecker(
                  form.generalSection.priceForRent.chargesValue,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="">Loyer mensuel charges comprises (en euros) </Label>
          <Input
            type="text"
            id="landPrice"
            placeholder="Loyer mensuel charges comprises"
            value={rentWithCharges}
            disabled
            onChange={(e) =>
              setPriceForRent({
                rentWithCharges: numberChecker(
                  form.generalSection.priceForRent.rentWithCharges,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="">Depot de garantie (en euros)</Label>
          <Input
            type="text"
            id="landPrice"
            placeholder="Entrez le dêpot de garantie"
            value={form.generalSection.priceForRent.guarantee}
            onChange={(e) =>
              setPriceForRent({
                guarantee: numberChecker(
                  form.generalSection.priceForRent.guarantee,
                  e.target.value
                ),
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

function AgencyFees() {
  const { setAgencyFees, form } = useFormStore();
  return (
    <div className="flex flex-col gap-8">
      <FormHeader
        title="Frais d'agence"
        description="Remplissez les informations à propos des frais d'agence"
      />
      <div className="flex flex-wrap w-full gap-6">
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="">Honoraire TTC charge locataire</Label>
          <Input
            type="text"
            id="landPrice"
            placeholder="Entrez le prix du terrain"
            value={form.generalSection.agencyFees.honoraryTTCAmount}
            onChange={(e) =>
              setAgencyFees({
                honoraryTTCAmount: numberChecker(
                  form.generalSection.agencyFees.honoraryTTCAmount,
                  e.target.value
                ),
              })
            }
          />
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="">Honoraire TTC charge locataire</Label>
          <Input
            type="text"
            id="landPrice"
            placeholder="Entrez le prix du terrain"
            value={form.generalSection.agencyFees.inventoryFees}
            onChange={(e) =>
              setAgencyFees({
                inventoryFees: numberChecker(
                  form.generalSection.agencyFees.inventoryFees,
                  e.target.value
                ),
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

function LocalisationSection() {
  const { form } = useFormStore();
  return (
    <div className="flex flex-col gap-8">
      <FormHeader
        title="Localisation"
        description="Remplissez les informations de localisation"
      />
      <div className="flex flex-wrap w-full gap-6">
        <InputWDropdown />
        <div className="flex flex-wrap w-1/3 gap-1.5">
          <Label htmlFor="city">
            Ville <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="city"
            placeholder="Entrez la ville"
            value={form.generalSection.localisation.city}
            disabled
          />
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="zipcode">
            Code postal <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            id="zipcode"
            placeholder="Entrez le code postal"
            value={form.generalSection.localisation.zipcode}
            disabled
          />
        </div>
      </div>
    </div>
  );
}

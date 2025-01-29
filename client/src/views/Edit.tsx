import { useParams } from "react-router";
import { Header } from "@/components/partial/Header";
import FormDpe from "@/components/partial/form/FormDpe";
import { useProperty } from "@/hooks/useProperties";
import { useFormStore, form } from "@/store/useFormStore";
import FormComplementary from "@/components/partial/form/FormComplementary";
import { useEffect } from "react";
import FormGlobal from "@/components/partial/form/FormGlobal";
import { FormNav } from "@/components/partial/form/FormNav";
import FormImages from "@/components/partial/form/FormImage";
import FormTarget from "@/components/partial/form/FormTarget";

export default function Edit() {
  const { id } = useParams();
  const { setForm, currentTab } = useFormStore();
  const { property } = useProperty(id as string);

  // Effet pour gérer l'initialisation du formulaire
  useEffect(() => {
    if (property) {
      setForm(property);
    } else {
      // Initialiser avec un formulaire vide pour une nouvelle propriété
      setForm(form);
    }
  }, [property, setForm]);
  return (
    <>
      <Header />
      <div className="w-full pt-4 flex gap-8 h-fit pb-8">
        <FormNav />
        {currentTab === "Ciblage" && <FormTarget />}
        {currentTab === "Général" && <FormGlobal />}
        {currentTab === "Complementaire" && <FormComplementary />}
        {currentTab === "Dpe" && <FormDpe />}
        {currentTab === "Images" && <FormImages />}
      </div>

      {/* <Form /> */}
    </>
  );
}

import { useParams } from "react-router";
import { Header } from "@/components/partial/Header";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useProperty } from "@/hooks/useProperties";
import { useFormStore } from "@/store/useForm";
import { useEffect } from "react";
import clsx from "clsx";

export default function Edit() {
  const [currentTab, setCurrentTab] = useState("Global");
  const { id } = useParams();
  const { setForm } = useFormStore();
  const { property } = useProperty(id as string);

  // Effet pour gérer l'initialisation du formulaire
  useEffect(() => {
    if (property) {
      setForm(property);
    } else {
      // Initialiser avec un formulaire vide pour une nouvelle propriété
      setForm({
        title: "",
        description: "",
        price: "",
        address: "",
        city: "",
        zipcode: "",
      });
    }
  }, [property, setForm]);

  const handleCurrentTab = (tab) => {
    setCurrentTab(tab);
  };
  return (
    <>
      <Header />
      <section className="w-full px-8 pt-8 flex gap-6 h-[calc(100vh-70px)]">
        <FormNav handleChange={handleCurrentTab} currentTab={currentTab} />
        {currentTab === "Global" && <FormGlobal />}
        {currentTab === "Métadonnées" && <FormMetadata />}
        {currentTab === "Images" && <FormImages />}
      </section>

      {/* <Form /> */}
    </>
  );
}

export function FormHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-full pb-6 border-b-[1px] border-gray-300 gap-8 h-fit">
      <h4 className="text-lg font-regular text-gray-900">{title}</h4>
      <p className="text-sm font-light text-slate-400">{description}</p>
    </div>
  );
}

export function FormNav({ handleChange, currentTab }) {
  const nav = ["Global", "Métadonnées", "Images"];
  return (
    <nav className="w-1/5 h-full">
      <ul className="flex flex-col gap-2 min-w-full">
        {nav.map((item) => {
          return (
            <li
              key={item}
              onClick={() => handleChange(item)}
              className={clsx(
                "w-full px-2 py-2.5 hover:underline text-gray-900 text-sm cursor-pointer font-medium rounded-md",
                { "bg-[#f4f5f5]": currentTab === item }
              )}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function FormGlobal() {
  const { setForm, form } = useFormStore();
  console.log("form", form);
  return (
    <div className="flex flex-col gap-8 w-full max-w-screen-md">
      <FormHeader
        title="Informations Global"
        description="Remplissez les informations globales de votre annonces"
      />
      <form className="flex flex-col gap-6 w-full">
        <div className="flex flex-col w-full gap-1.5">
          <Label htmlFor="title">Titre</Label>
          <Input
            type="text"
            id="title"
            placeholder="Titre de l'annonce"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
        <div className="flex flex-col w-full gap-1.5">
          <Label htmlFor="description">Description</Label>
          <Textarea
            placeholder="Description"
            id="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
        <div className="flex flex-col w-full gap-1.5">
          <Label htmlFor="prix">Prix</Label>
          <Input
            type="text"
            id="price"
            placeholder="Votre prix"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />
        </div>
        <InputWDropdown />
        <div className="flex flex-col w-full gap-1.5">
          <Label htmlFor="email">Ville</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
          />
        </div>
        <div className="flex flex-col w-full gap-1.5">
          <Label htmlFor="email">Code postal</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            value={form.zipcode}
            onChange={(e) => setForm({ ...form, zipcode: e.target.value })}
          />
        </div>
      </form>
    </div>
  );
}

export function FormImages() {
  return (
    <div className="flex flex-col gap-8 w-full max-w-screen-md">
      <FormHeader
        title="Images"
        description="Remplissez les images correspondant à votre annonces"
      />
      <form className="flex flex-col gap-6 w-full">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Photo n°1</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Photo n°2</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Photo n°3</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Photo n°4</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Photo n°5</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Photo n°6</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Photo n°7</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Photo n°8</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Photo n°9</Label>
          <Input id="picture" type="file" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Photo n°10</Label>
          <Input id="picture" type="file" />
        </div>
      </form>
    </div>
  );
}

export function FormMetadata() {
  return (
    <div className="max-w-screen-md w-full">
      <FormHeader
        title="Métadonnées"
        description="Remplissez les métadonnées à propos de votre annonces "
      />
    </div>
  );
}

function InputWDropdown() {
  const { setForm, form } = useFormStore();
  const [stateDropdown, setStateDropdown] = useState<Boolean>(false);
  const [address, setAdresse] = useState([]);

  const handleChange = async (e) => {
    setStateDropdown(true);
    setForm({ ...form, address: e.target.value });
    const response = await fetch(
      `${import.meta.env.VITE_ADRESS_API_URL}/search?q=${e.target.value}`
    );
    const data = await response.json();
    console.log("data", data);
    setAdresse(data.features.map((item) => item.properties));
  };

  return (
    <div className="flex flex-col w-full gap-1.5 relative">
      <Label htmlFor="adress">Adresse</Label>
      <Input
        type="text"
        id="adress"
        placeholder="L'adresse du bien"
        value={form.address}
        onChange={handleChange}
      />
      <ul
        className={clsx(
          "absolute bg-white w-full h-fit border-[1px] border-gray-200 rounded-md -top-10 opacity-0 shadow-sm transition-all duration-300",
          { "top-[110%] opacity-100": stateDropdown }
        )}
      >
        {address.map((item) => (
          <li
            key={item}
            className="px-2 py-2.5 text-sm hover:bg-gray-100 cursor-pointer"
            onClick={() => {
              setForm({
                ...form,
                address: item.name,
                city: item.city,
                zipcode: item.postcode,
              });
              setAdresse([]);
              setStateDropdown(false);
            }}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

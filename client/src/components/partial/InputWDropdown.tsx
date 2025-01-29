import { useFormStore } from "@/store/useFormStore";
import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import clsx from "clsx";
import { set } from "date-fns";

export default function InputWDropdown() {
  const { setLocalisation, form } = useFormStore();
  const [stateDropdown, setStateDropdown] = useState<Boolean>(false);
  const [address, setAdresse] = useState([]);

  const handleChange = async (e) => {
    setStateDropdown(true);
    setLocalisation({ address: e.target.value });
    const response = await fetch(
      `${import.meta.env.VITE_ADRESS_API_URL}/search?q=${e.target.value}`
    );
    const data = await response.json();
    setAdresse(data.features.map((item) => item.properties));
  };

  return (
    <div className="flex flex-col w-1/3 gap-1.5 relative z-20">
      <Label htmlFor="adress">
        Adresse <span className="text-red-500">*</span>
      </Label>
      <Input
        type="text"
        id="adress"
        placeholder="L'adresse du bien"
        value={form.generalSection.localisation.address}
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
              console.log('item', item);
              setLocalisation({
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

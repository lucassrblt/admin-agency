import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import useCities from "@/hooks/useCities";
import { useProperties } from "@/hooks/useProperties";
import React from "react";
import { useNavigate } from "react-router";

export function ActionBar() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-between items-center">
      <SelectWrapper />
      <Button onClick={() => navigate("/annonce")}>Créer une annonce</Button>
    </div>
  );
}

export function SelectWrapper() {
  const [city, setCity] = React.useState("");
  const [type, setType] = React.useState("");

  const { cities } = useCities();
  const { refetch } = useProperties();

  const handleCityChange = (val: string) => {
    setCity(val);
    refetch();
  };

  const handleTypeChange = (val: string) => {
    setType(val);
    refetch();
  };

  return (
    <div className="flex items-center gap-6">
      <Select onValueChange={handleCityChange}>
        <SelectTrigger className="w-[180px] bg-white">
          <SelectValue placeholder="Localisation" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Toutes les villes</SelectItem>
          {cities?.map((city: string) => (
            <SelectItem key={city} value={city}>
              {city}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select onValueChange={handleTypeChange}>
        <SelectTrigger className="w-[180px] bg-white">
          <SelectValue placeholder="Prix" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">test</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px] bg-white">
          <SelectValue placeholder="Type de bien" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">test</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

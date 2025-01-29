import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export default function Company() {
  return (
    <div>
      <h1>Company</h1>
      <CompanyForm />
    </div>
  );
}

const CompanyForm = () => {
  const [company, setCompany] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [img, setImg] = useState<File>(null);
  const navigate = useNavigate();

  const sendCompany = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", company);
    formData.append("website", website);
    formData.append("logo", img);
    const url = `${import.meta.env.VITE_API_URL}/companies`;
    console.log("url", url);

    try {
      const response = await fetch(url, {
        headers: {
          Accept: "application/json",
        },
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log("data", data);
      if (data.success) {
        navigate("/get-started/admin");
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <form>
      <div className="flex flex-col w-1/3 gap-1.5">
        <Label htmlFor="toilets">Nom de l'entreprise</Label>
        <Input
          type="text"
          id="toilets"
          placeholder="Entrer le nom de votre entrerprise"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div className="flex flex-col w-1/3 gap-1.5">
        <Label htmlFor="toilets">Site web de l'entreprise</Label>
        <Input
          type="text"
          id="toilets"
          placeholder="Entrer le sitweb de votre entrerprise"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="picture">Logo de l'entrerprise</Label>
        <Input
          id="picture"
          type="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
      </div>
      <Button onClick={(e) => sendCompany(e)}>Envoyer</Button>
    </form>
  );
};

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function AdminAccount() {
  return (
    <>
      <h1>Création du compte administrateur</h1>
      <AdminForm />
    </>
  );
}

function AdminForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const sendAdmin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("compagnyId", img);
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
      <form>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="toilets">Email</Label>
          <Input
            type="email"
            id="toilets"
            placeholder="Entrer le nom de votre entrerprise"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-1/3 gap-1.5">
          <Label htmlFor="toilets">Password</Label>
          <Input
            type="password"
            id="toilets"
            placeholder="Entrer le sitweb de votre entrerprise"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button onClick={(e) => sendAdmin(e)}>Envoyer</Button>
      </form>
    </form>
  );
}

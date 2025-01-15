import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React from "react";
import { useAlert } from "@/hooks/useAlert";
import { useNavigate } from "react-router";

export default function Connexion() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const context = useAlert();
  const { alert, setAlert } = context;
  const navigate = useNavigate();

  const handleLogin = () => {
    const url = import.meta.env.VITE_API_URL;
    fetch(`${url}/auth/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          setAlert({ message: data.message, type: "error", isVisible: true });
          setTimeout(() => {
            setAlert({ message: "", type: "", isVisible: false });
          }, 4000);
        } else {
          navigate("/dashboard");
        }
      });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div className="w-1/4 flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-1.5 w-full">
          <h1 className="text-gray-950 text-2xl font-bold">
            Connexion à votre compte
          </h1>
          <p className="text-md text-gray-600 font-regular">
            Entrer votre email et votre mot de passe
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col w-full gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full gap-1.5">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              type="password"
              id="password"
              placeholder="******"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button onClick={handleLogin}>Se connecter</Button>
        </div>
      </div>
    </div>
  );
}

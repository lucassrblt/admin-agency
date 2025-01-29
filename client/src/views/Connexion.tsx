import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import React from "react";
import { useAlert } from "@/hooks/useAlert";
import { useNavigate } from "react-router";
import { useUserStore } from "@/store/useUserStore";

export default function Connexion() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const context = useAlert();
  const { setUser } = useUserStore();
  const navigate = useNavigate();
  const { alert, setAlert } = context;

  const handleLogin = async () => {
    const url = import.meta.env.VITE_API_URL;
    const response = await fetch(`${url}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    let data = await response.json();

    if (!data.success) {
      setAlert({
        type: "error",
        message: data.message,
        isVisible: true,
      });
      return;
    }
    data = data.data;

    const user = {
      company: data.user.company,
      profile: data.user.profile,
      email: data.user.email,
      token: data.token,
    };
    setUser(user);
    data.user.profile?.firstName
      ? navigate("/dashboard")
      : navigate("/profile");
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

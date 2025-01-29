import { useUserStore } from "@/store/useUserStore";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export default function RequireAuth() {
  const { user } = useUserStore();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user?.token) {
  //     navigate("/connexion");
  //   }
  // }, [user, navigate]);

  return <Outlet />;
}

import { PropertyWrapper } from "@/components/card/PropertyWrapper";
import { ActionBar } from "@/components/partial/ActionBar";
import { Header } from "@/components/partial/Header";

export function Dashboard() {
  return (
    <>
      <Header />
      <ActionBar />
      <PropertyWrapper />
    </>
  );
}
